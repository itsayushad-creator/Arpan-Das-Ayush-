import { ArrowUp, Heart, Globe, BookOpen, Code2, Mail } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="border-t border-zinc-800/80 bg-zinc-950/90 py-12 text-xs text-zinc-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-900">
          {/* Left Brand Summary */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-bold text-base text-zinc-100 font-sans">
                {PERSONAL_INFO.name}
              </span>
              <span className="text-xs font-mono text-amber-400 font-semibold bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/20">
                {PERSONAL_INFO.nickname}
              </span>
            </div>
            <p className="text-zinc-400 text-xs max-w-sm">
              Full-Stack Developer, Wikipedia Contributor & Creative Technologist.
            </p>
          </div>

          {/* Social Links */}
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs font-medium">
            <a
              href="https://commons.wikimedia.org"
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
            >
              <BookOpen className="w-3.5 h-3.5 text-blue-400" />
              <span>Wikimedia Commons</span>
            </a>
            <span className="text-zinc-700">•</span>
            <a
              href="https://en.wikipedia.org"
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
            >
              <Globe className="w-3.5 h-3.5 text-zinc-400" />
              <span>Wikipedia</span>
            </a>
            <span className="text-zinc-700">•</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5"
            >
              <Code2 className="w-3.5 h-3.5 text-zinc-400" />
              <span>GitHub</span>
            </a>
            <span className="text-zinc-700">•</span>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="hover:text-amber-400 transition-colors flex items-center gap-1.5 font-mono"
            >
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              <span>{PERSONAL_INFO.email}</span>
            </a>
          </div>

          {/* Back to top */}
          <button
            type="button"
            id="footer-back-to-top-btn"
            onClick={scrollToTop}
            className="p-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white transition-colors flex items-center gap-1.5 cursor-pointer text-xs"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left text-[11px] text-zinc-400">
          <p>
            © {new Date().getFullYear()} Arpan Das (Ayush). All rights reserved. Content licensed under open knowledge principles.
          </p>
          <div className="flex items-center gap-1 font-mono">
            <span>Crafted with React, TypeScript & Tailwind</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
