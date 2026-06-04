import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { RGBELoader } from 'three/addons/loaders/RGBELoader.js';

const GLTF_MODEL_URL =
  'https://raw.githubusercontent.com/KhronosGroup/glTF-Sample-Assets/main/Models/DamagedHelmet/glTF-Binary/DamagedHelmet.glb';

// Try jsdelivr first (CORS-friendly); fallback to raw.githubusercontent
const HDR_URLS = [
  'https://cdn.jsdelivr.net/gh/mrdoob/three.js@dev/examples/textures/equirectangular/royal_esplanade_2k.hdr',
  'https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/textures/equirectangular/royal_esplanade_2k.hdr',
];

export function ThreeBackground() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let camera: THREE.PerspectiveCamera;
    let scene: THREE.Scene;
    let renderer: THREE.WebGLRenderer;
    let model: THREE.Group | null = null;
    let mixer: THREE.AnimationMixer | null = null;
    let clock: THREE.Clock;
    let frameId: number;
    let loadId = 0;

    const getSize = () => ({
      w: container.clientWidth || window.innerWidth,
      h: container.clientHeight || window.innerHeight,
    });
    let { w: initW, h: initH } = getSize();
    camera = new THREE.PerspectiveCamera(45, initW / initH, 0.25, 20);
    camera.position.set(-1.8, 0.6, 2.7);
    camera.lookAt(0, 0, -0.2);

    scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    scene.backgroundBlurriness = 0;
    const initLight = new THREE.AmbientLight(0xffffff, 0.25);
    scene.add(initLight);

    renderer = new THREE.WebGLRenderer({ antialias: true, alpha: false });
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(initW, initH);
    renderer.setAnimationLoop(null);
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    container.appendChild(renderer.domElement);

    clock = new THREE.Clock();

    function addFallbackLights() {
      const ambient = new THREE.AmbientLight(0x404060, 0.8);
      scene.add(ambient);
      const key = new THREE.DirectionalLight(0xffffff, 0.6);
      key.position.set(2, 3, 4);
      scene.add(key);
      const fill = new THREE.DirectionalLight(0x6699cc, 0.3);
      fill.position.set(-2, 1, -2);
      scene.add(fill);
    }

    function loadEnv() {
      let tried = 0;
      function tryLoad(url: string) {
        new RGBELoader().load(
          url,
          (texture) => {
            texture.mapping = THREE.EquirectangularReflectionMapping;
            scene.environment = texture;
            scene.background = new THREE.Color(0xffffff);
          },
          undefined,
          () => {
            tried += 1;
            if (tried < HDR_URLS.length) tryLoad(HDR_URLS[tried]);
            else {
              scene.background = new THREE.Color(0xffffff);
              addFallbackLights();
            }
          }
        );
      }
      tryLoad(HDR_URLS[0]);
    }

    function fitCameraToModel(box: THREE.Box3) {
      const size = box.getSize(new THREE.Vector3());
      const maxSize = Math.max(size.x, size.y, size.z);
      const fitHeightDistance = maxSize / (2 * Math.atan((Math.PI * camera.fov) / 360));
      const distance = 1.3 * fitHeightDistance;
      const target = new THREE.Vector3(0, 0, -0.2);
      camera.position.set(0, 0, target.z + distance);
      camera.lookAt(target);
      camera.near = distance / 100;
      camera.far = distance * 100;
      camera.updateProjectionMatrix();
    }

    function loadModel() {
      const id = ++loadId;
      const loader = new GLTFLoader();
      loader.load(
        GLTF_MODEL_URL,
        async (gltf) => {
          if (id !== loadId) return;
          model = gltf.scene;
          model.position.set(0, 0, -0.2);
          model.rotation.y = Math.PI * 0.5;
          model.scale.setScalar(1);

          await renderer.compileAsync(model, camera, scene);
          if (id !== loadId) return;
          scene.add(model);

          const box = new THREE.Box3().setFromObject(model);
          fitCameraToModel(box);

          if (gltf.animations.length > 0) {
            mixer = new THREE.AnimationMixer(model);
            gltf.animations.forEach((clip) => mixer!.clipAction(clip).play());
          }
        },
        undefined,
        () => {}
      );
    }

    loadEnv();
    loadModel();

    function animate() {
      const delta = clock.getDelta();
      if (model) {
        model.rotation.y += delta * 0.12;
      }
      if (mixer) mixer.update(delta);
      renderer.render(scene, camera);
      frameId = requestAnimationFrame(animate);
    }
    animate();

    function onResize() {
      const { w, h } = getSize();
      if (w === 0 || h === 0) return;
      camera.aspect = w / h;
      camera.updateProjectionMatrix();
      renderer.setSize(w, h);
    }
    const resizeObserver = new ResizeObserver(onResize);
    resizeObserver.observe(container);
    window.addEventListener('resize', onResize);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', onResize);
      cancelAnimationFrame(frameId);
      renderer.setAnimationLoop(null);
      renderer.dispose();
      if (container.contains(renderer.domElement)) container.removeChild(renderer.domElement);
      scene.clear();
      if (model) {
        model.traverse((o) => {
          if (o instanceof THREE.Mesh) {
            o.geometry?.dispose();
            if (Array.isArray(o.material)) o.material.forEach((m) => m.dispose());
            else o.material?.dispose();
          }
        });
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="absolute inset-0 z-0 overflow-hidden"
      style={{ pointerEvents: 'none' }}
      aria-hidden
    />
  );
}
