import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { RoomEnvironment } from 'three/addons/environments/RoomEnvironment.js';

const INTRO_DURATION_MS = 1000;
const MIN_DISPLAY_MS = 1000;
const DRIVE_START = -120;
const DRIVE_END = 120;
const BG_COLOR = 0x4b4e52;

function createFallbackCar(): THREE.Group {
  const group = new THREE.Group();
  const body = new THREE.Mesh(
    new THREE.BoxGeometry(40, 18, 20),
    new THREE.MeshStandardMaterial({ color: 0x00d4aa })
  );
  body.position.y = 9;
  group.add(body);
  const cabin = new THREE.Mesh(
    new THREE.BoxGeometry(22, 14, 18),
    new THREE.MeshStandardMaterial({ color: 0x0a0a0f })
  );
  cabin.position.set(0, 25, 0);
  group.add(cabin);
  const wheel = new THREE.Mesh(
    new THREE.CylinderGeometry(6, 6, 4, 16),
    new THREE.MeshStandardMaterial({ color: 0x171717 })
  );
  wheel.rotation.z = Math.PI / 2;
  const positions: [number, number, number][] = [[-18, 6, -12], [18, 6, -12], [-18, 6, 12], [18, 6, 12]];
  positions.forEach(([x, y, z]) => {
    const w = wheel.clone();
    w.position.set(x, y, z);
    group.add(w);
  });
  return group;
}

type CarIntroProps = {
  onComplete: () => void;
};

export function CarIntro({ onComplete }: CarIntroProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const tryCompleteRef = useRef<() => void>(() => {});

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const introStartTime = performance.now();
    let completeTimeoutId: ReturnType<typeof setTimeout> | null = null;

    const tryComplete = () => {
      const elapsed = performance.now() - introStartTime;
      if (elapsed >= MIN_DISPLAY_MS) {
        onComplete();
      } else {
        completeTimeoutId = setTimeout(onComplete, MIN_DISPLAY_MS - elapsed);
      }
    };
    tryCompleteRef.current = tryComplete;

    let camera: THREE.PerspectiveCamera;
    let scene: THREE.Scene;
    let renderer: THREE.WebGLRenderer;
    let controls: OrbitControls;
    let driveStartTime = 0;
    let driveStarted = false;
    let frameId: number;
    let completeCalled = false;

    camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(0, 80, 220);
    camera.lookAt(0, 0, 0);

    renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 0.85;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);
    (renderer.domElement as HTMLCanvasElement).style.position = 'absolute';
    (renderer.domElement as HTMLCanvasElement).style.inset = '0';
    (renderer.domElement as HTMLCanvasElement).style.zIndex = '0';

    scene = new THREE.Scene();
    scene.background = new THREE.Color(BG_COLOR);
    const pmremGenerator = new THREE.PMREMGenerator(renderer);
    scene.environment = pmremGenerator.fromScene(new RoomEnvironment(), 0.04).texture;

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.enabled = false;

    let car: THREE.Group = createFallbackCar();
    car.position.set(DRIVE_START, 0, 0);
    scene.add(car);
    driveStarted = true;
    driveStartTime = performance.now();

    function animate() {
      frameId = requestAnimationFrame(animate);
      const now = performance.now();
      const elapsed = driveStarted ? now - driveStartTime : 0;

      if (driveStarted && car) {
        const t = Math.min(elapsed / INTRO_DURATION_MS, 1);
        const eased = 1 - (1 - t) * (1 - t);
        car.position.x = DRIVE_START + (DRIVE_END - DRIVE_START) * eased;
      }

      if (driveStarted && elapsed >= INTRO_DURATION_MS && !completeCalled) {
        completeCalled = true;
        tryComplete();
      }

      controls.update();
      renderer.render(scene, camera);
    }
    animate();

    function onResize() {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    }
    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(frameId);
      if (completeTimeoutId != null) clearTimeout(completeTimeoutId);
      pmremGenerator.dispose();
      renderer.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
      scene.clear();
      if (car) {
        car.traverse((o) => {
          if (o instanceof THREE.Mesh) {
            o.geometry?.dispose();
            if (Array.isArray(o.material)) o.material.forEach((m) => m.dispose());
            else o.material?.dispose();
          }
        });
      }
    };
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-[50] bg-[#4b4e52]" ref={containerRef}>
      <div className="absolute inset-0 z-[1] pointer-events-none intro-grid" aria-hidden />
      <button
        type="button"
        onClick={() => tryCompleteRef.current()}
        className="absolute top-4 right-4 z-10 rounded-lg border border-zinc-400/60 bg-white/80 px-3 py-1.5 text-sm text-zinc-700 backdrop-blur-sm hover:bg-white"
      >
        Skip
      </button>
    </div>
  );
}
