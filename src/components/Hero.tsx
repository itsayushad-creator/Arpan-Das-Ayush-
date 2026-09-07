import { useState } from 'react';
import { 
  ArrowDown, 
  Copy, 
  Check, 
  FileText, 
  Mail, 
  Globe, 
  ShieldCheck, 
  BookOpen, 
  Code2, 
  Sparkles,
  ExternalLink
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export function Hero({ onOpenResume, onOpenContact }: HeroProps) {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden"
    >
      {/* Subtle geometric background grids (no cheesy gradients) */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f29370f_1px,transparent_1px),linear-gradient(to_bottom,#1f29370f_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_70%,transparent_100%)] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Info Column */}
          <div className="lg:col-span-8 flex flex-col space-y-6">
            
            {/* Top Status & Location Badge */}
            <div className="flex flex-wrap items-center gap-2.5">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs text-zinc-300 font-mono">
                <span className="w-2 h-2 rounded-full bg-amber-400" />
                <span>Nadia, West Bengal, India</span>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-zinc-900/60 border border-zinc-800 text-xs text-zinc-400 font-mono">
                <span>IST (UTC+5:30)</span>
              </div>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
                Arpan Das{' '}
                <span className="inline-block text-2xl sm:text-3xl lg:text-4xl font-mono font-medium text-amber-400 bg-amber-500/10 px-3 py-1 rounded-xl border border-amber-500/20 align-middle">
                  ({PERSONAL_INFO.nickname})
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-zinc-300 max-w-2xl leading-relaxed">
                Full-Stack Developer, Open Knowledge Contributor & Creative Technologist.
              </p>
            </div>

            {/* Bio Narrative Snippet */}
            <p className="text-sm sm:text-base text-zinc-400 max-w-2xl leading-relaxed">
              Passionate about building fast, accessible web applications, curating verified open knowledge on Wikipedia, and exploring cybersecurity and creative digital media. Guided by clean code craftsmanship and open-source principles.
            </p>

            {/* Email quick copy bar */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <div className="flex items-center rounded-lg bg-zinc-900 border border-zinc-800 p-1 pl-3 shadow-inner">
                <Mail className="w-4 h-4 text-zinc-400 mr-2 shrink-0" />
                <span className="font-mono text-xs sm:text-sm text-zinc-200 select-all mr-3">
                  {PERSONAL_INFO.email}
                </span>
                <button
                  type="button"
                  id="hero-copy-email-btn"
                  onClick={copyEmail}
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-md bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-zinc-100 transition-colors cursor-pointer"
                  title="Copy email to clipboard"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                id="hero-mailto-link"
                className="text-xs text-amber-400 hover:text-amber-300 font-medium inline-flex items-center gap-1 px-3 py-2 rounded-lg bg-amber-500/10 border border-amber-500/20 hover:bg-amber-500/15 transition-colors"
              >
                <span>Send direct email</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <button
                type="button"
                id="hero-view-projects-btn"
                onClick={() => scrollToSection('projects')}
                className="px-5 py-2.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 text-sm font-semibold transition-all shadow-md flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Work</span>
                <ArrowDown className="w-4 h-4" />
              </button>

              <button
                type="button"
                id="hero-view-resume-btn"
                onClick={onOpenResume}
                className="px-5 py-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-700 text-zinc-200 text-sm font-medium transition-colors flex items-center gap-2 cursor-pointer"
              >
                <FileText className="w-4 h-4 text-amber-400" />
                <span>Curriculum Vitae</span>
              </button>

              <button
                type="button"
                id="hero-contact-trigger-btn"
                onClick={() => scrollToSection('contact')}
                className="px-5 py-2.5 rounded-lg bg-transparent hover:bg-zinc-900/60 border border-zinc-800 text-zinc-300 hover:text-white text-sm font-medium transition-colors flex items-center gap-2 cursor-pointer"
              >
                <Mail className="w-4 h-4" />
                <span>Get in Touch</span>
              </button>
            </div>

            {/* Social Coordinates Links */}
            <div className="pt-3 flex flex-wrap items-center gap-3 text-xs text-zinc-400">
              <span className="font-mono text-zinc-400">Connect:</span>
              <a
                href="https://commons.wikimedia.org"
                target="_blank"
                rel="noreferrer"
                id="hero-wikimedia-link"
                className="hover:text-amber-400 transition-colors inline-flex items-center gap-1 bg-zinc-900/80 px-2.5 py-1 rounded border border-zinc-800"
              >
                <BookOpen className="w-3.5 h-3.5 text-blue-400" />
                <span>Wikimedia Commons</span>
              </a>
              <a
                href="https://en.wikipedia.org"
                target="_blank"
                rel="noreferrer"
                id="hero-wikipedia-link"
                className="hover:text-amber-400 transition-colors inline-flex items-center gap-1 bg-zinc-900/80 px-2.5 py-1 rounded border border-zinc-800"
              >
                <Globe className="w-3.5 h-3.5 text-zinc-300" />
                <span>Wikipedia Contributor</span>
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noreferrer"
                id="hero-github-link"
                className="hover:text-amber-400 transition-colors inline-flex items-center gap-1 bg-zinc-900/80 px-2.5 py-1 rounded border border-zinc-800"
              >
                <Code2 className="w-3.5 h-3.5 text-zinc-300" />
                <span>GitHub</span>
              </a>
            </div>

          </div>

          {/* Right Showcase Card */}
          <div className="lg:col-span-4">
            <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl p-6 shadow-xl relative overflow-hidden">
              
              {/* Header inside card */}
              <div className="flex items-center justify-between pb-4 border-b border-zinc-800">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h2 className="text-sm font-semibold text-zinc-100">Identity & Focus</h2>
                    <p className="text-[11px] text-zinc-400 font-mono">Arpan Das (Ayush)</p>
                  </div>
                </div>
                <span className="text-[10px] uppercase font-mono px-2 py-0.5 rounded bg-emerald-500/10 border border-emerald-500/20 text-emerald-400">
                  Active
                </span>
              </div>

              {/* Focus List */}
              <div className="py-4 space-y-3.5 text-xs">
                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded bg-zinc-800 text-amber-400 shrink-0 mt-0.5">
                    <Code2 className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="font-medium text-zinc-200">Modern Full-Stack</p>
                    <p className="text-zinc-400 text-[11px] leading-relaxed">
                      TypeScript, React 19, Next.js, Node.js & clean modular architecture.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded bg-zinc-800 text-blue-400 shrink-0 mt-0.5">
                    <BookOpen className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="font-medium text-zinc-200">Wikipedia & Open Knowledge</p>
                    <p className="text-zinc-400 text-[11px] leading-relaxed">
                      Rigorous fact-checking, neutral verifiability, and educational media archival.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-1.5 rounded bg-zinc-800 text-emerald-400 shrink-0 mt-0.5">
                    <ShieldCheck className="w-3.5 h-3.5" />
                  </div>
                  <div>
                    <p className="font-medium text-zinc-200">Web Security & Privacy</p>
                    <p className="text-zinc-400 text-[11px] leading-relaxed">
                      Defense-in-depth, security headers, OWASP guidelines, and protocol analysis.
                    </p>
                  </div>
                </div>
              </div>

              {/* Direct email display */}
              <div className="pt-4 border-t border-zinc-800 text-[11px] text-zinc-400 flex items-center justify-between">
                <span>Direct inquiry:</span>
                <span className="font-mono text-zinc-300">{PERSONAL_INFO.email}</span>
              </div>

            </div>
          </div>

        </div>

        {/* 4-Stat Overview Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-16 pt-8 border-t border-zinc-800/60">
          {PERSONAL_INFO.stats.map((stat, idx) => (
            <div
              key={idx}
              id={`stat-card-${idx}`}
              className="bg-zinc-900/40 border border-zinc-800/80 rounded-xl p-4 transition-colors hover:border-zinc-700"
            >
              <span className="text-[11px] font-mono text-zinc-400 block mb-1">
                {stat.label}
              </span>
              <p className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                {stat.value}
              </p>
              <p className="text-xs text-zinc-400 mt-0.5">
                {stat.sublabel}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
