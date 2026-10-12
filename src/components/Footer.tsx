import { profile } from '../data/resume';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="pb-8 pt-4">
      <div className="section-inner">
        <div className="clay !rounded-full px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-ink-muted">
          <p className="font-semibold">
            © {year} {profile.name}
          </p>
          <div className="flex gap-5 font-semibold">
            <a href="#ai" className="text-accent-dim hover:text-accent">
              AI Dominate
            </a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              LinkedIn
            </a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent">
              GitHub
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
