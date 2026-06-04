import { profile } from '../data/resume';

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-8">
      <div className="section-inner flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-slate-500">
        <p>© {year} {profile.name}</p>
        <div className="flex gap-6">
          <a href="#ai" className="hover:text-teal-700 font-medium">
            AI Dominate
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-teal-700">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-teal-700">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}
