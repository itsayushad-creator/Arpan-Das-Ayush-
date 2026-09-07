import { BookOpen, Code, Compass, Heart, Shield, Globe, Award, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function About() {
  const pillars = [
    {
      title: "Clean Software Craft",
      description: "Writing code that prioritizes semantic clarity, deterministic state, and low runtime overhead rather than stacking bloated dependencies.",
      icon: Code,
      badge: "Engineering"
    },
    {
      title: "Open Knowledge Stewardship",
      description: "Contributing actively to Wikipedia and Wikimedia Commons to ensure universal access to fact-checked, neutral, and verified cultural & scientific information.",
      icon: BookOpen,
      badge: "Wikipedia"
    },
    {
      title: "Security & Digital Hygiene",
      description: "Advocating for robust web application security, encrypted communications, and conscious user data privacy in modern cloud architectures.",
      icon: Shield,
      badge: "Cybersecurity"
    },
    {
      title: "Curiosity & Lifelong Learning",
      description: "Bridging diverse disciplines—from stage performance and creative media to algorithms, competitive chess, and full-stack web platforms.",
      icon: Compass,
      badge: "Philosophy"
    }
  ];

  return (
    <section id="about" className="py-20 border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Behind the Screen</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            About Arpan Das (Ayush)
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            A technologist driven by curiosity, open-source knowledge preservation, and the art of purposeful software.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Narrative Column */}
          <div className="lg:col-span-7 space-y-5 text-sm sm:text-base text-zinc-300 leading-relaxed">
            {PERSONAL_INFO.aboutParagraphs.map((paragraph, idx) => (
              <p key={idx} className="text-zinc-300 leading-relaxed">
                {paragraph}
              </p>
            ))}

            <div className="p-4 rounded-xl bg-zinc-900/70 border border-zinc-800/90 mt-6 space-y-2">
              <h3 className="text-sm font-semibold text-zinc-200 flex items-center gap-2">
                <Globe className="w-4 h-4 text-amber-400" />
                <span>The Wikipedia Connection</span>
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed">
                On Wikipedia, under user name associations as Arpan Das (Ayush), I actively edit articles with a focus on technology, regional history, and reliable citations. The discipline of validating every claim against trusted secondary sources directly informs how I write robust, verifiable code in software engineering.
              </p>
            </div>
          </div>

          {/* Right Column: Quick Profile Sheet & Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 space-y-4">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider font-mono text-zinc-300">
                Quick Profile & Roots
              </h3>
              
              <div className="divide-y divide-zinc-800/80 text-xs sm:text-sm">
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-zinc-400">Full Name</span>
                  <span className="font-medium text-zinc-200">Arpan Das</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-zinc-400">Familiar Name</span>
                  <span className="font-mono text-amber-400 font-medium">Ayush</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-zinc-400">Primary Location</span>
                  <span className="font-medium text-zinc-200">West Bengal, India</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-zinc-400">Education Alma Mater</span>
                  <span className="font-medium text-zinc-200 text-right">Palashipara M.G.S. Vidyapith</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-zinc-400">Languages</span>
                  <span className="font-medium text-zinc-200">English, Bengali, Hindi</span>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-zinc-400">Inquiries Email</span>
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="font-mono text-amber-400 hover:underline"
                  >
                    {PERSONAL_INFO.email}
                  </a>
                </div>
                <div className="py-2.5 flex items-center justify-between">
                  <span className="text-zinc-400">Status</span>
                  <span className="inline-flex items-center gap-1.5 text-emerald-400 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Open to Collaborations
                  </span>
                </div>
              </div>
            </div>

            {/* Motivational motto */}
            <div className="p-4 rounded-xl bg-amber-500/5 border border-amber-500/15 text-xs text-amber-300/90 leading-relaxed font-mono">
              &ldquo;Truth is built on verifiable references; software is built on deterministic logic. Both require care, patience, and transparency.&rdquo;
            </div>

          </div>

        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {pillars.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div
                key={idx}
                id={`pillar-card-${idx}`}
                className="bg-zinc-900/60 border border-zinc-800/80 rounded-xl p-5 hover:border-zinc-700 transition-colors flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className="w-8 h-8 rounded-lg bg-zinc-800 text-amber-400 flex items-center justify-center">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700/60">
                      {pillar.badge}
                    </span>
                  </div>
                  <h4 className="text-sm font-semibold text-zinc-100 mb-1.5">
                    {pillar.title}
                  </h4>
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
