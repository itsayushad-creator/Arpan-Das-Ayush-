import { useState, ElementType } from 'react';
import { 
  Atom, 
  Code2, 
  Palette, 
  FileCode2, 
  Server, 
  Workflow, 
  Database, 
  GitBranch, 
  Terminal, 
  Cpu, 
  BookOpen, 
  PenTool, 
  Image as ImageIcon, 
  ShieldCheck, 
  Lock,
  Wrench
} from 'lucide-react';
import { SKILLS } from '../data/portfolioData';
import { SkillItem } from '../types';

// Map icon strings to Lucide components
const iconMap: Record<string, ElementType> = {
  Atom,
  Code2,
  Palette,
  FileCode2,
  Server,
  Workflow,
  Database,
  GitBranch,
  Terminal,
  Cpu,
  BookOpen,
  PenTool,
  Image: ImageIcon,
  ShieldCheck,
  Lock,
};

export function Skills() {
  const [activeTab, setActiveTab] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Disciplines' },
    { id: 'frontend', label: 'Frontend & UI' },
    { id: 'backend', label: 'Backend & APIs' },
    { id: 'tools', label: 'Tools & DevOps' },
    { id: 'knowledge', label: 'Open Knowledge & Writing' },
    { id: 'security', label: 'Security & Privacy' },
  ];

  const filteredSkills = activeTab === 'all'
    ? SKILLS
    : SKILLS.filter(s => s.category === activeTab);

  return (
    <section id="skills" className="py-20 border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400 mb-3">
              <Wrench className="w-3.5 h-3.5" />
              <span>Technical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Skills & Expertise Matrix
            </h2>
            <p className="mt-3 text-base text-zinc-400">
              A comprehensive view of the languages, frameworks, open knowledge methodologies, and security practices in my toolkit.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap items-center gap-1.5 bg-zinc-900/80 p-1.5 rounded-xl border border-zinc-800 self-start md:self-auto">
            {categories.map((cat) => (
              <button
                key={cat.id}
                type="button"
                id={`skills-tab-${cat.id}`}
                onClick={() => setActiveTab(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  activeTab === cat.id
                    ? 'bg-amber-500 text-zinc-950 font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredSkills.map((skill: SkillItem, idx: number) => {
            const IconComponent = iconMap[skill.icon] || Code2;
            return (
              <div
                key={idx}
                id={`skill-card-${skill.name.toLowerCase().replace(/\s+/g, '-')}`}
                className="bg-zinc-900/70 border border-zinc-800 rounded-xl p-5 hover:border-zinc-700 transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-amber-400 shrink-0">
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <h3 className="text-sm font-semibold text-zinc-100">
                        {skill.name}
                      </h3>
                    </div>
                    {skill.experienceYears && (
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400 border border-zinc-700/60 shrink-0">
                        {skill.experienceYears}
                      </span>
                    )}
                  </div>

                  <p className="text-xs text-zinc-400 leading-relaxed mb-4">
                    {skill.description}
                  </p>
                </div>

                {/* Level Bar */}
                <div className="space-y-1.5 pt-2 border-t border-zinc-800/60">
                  <div className="flex justify-between items-center text-[11px] font-mono">
                    <span className="text-zinc-500 capitalize">{skill.category}</span>
                    <span className="text-zinc-300 font-semibold">{skill.level}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-amber-500 to-amber-400 rounded-full transition-all duration-700"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Supplementary Tech Stack Badges Strip */}
        <div className="mt-12 p-5 rounded-xl bg-zinc-900/40 border border-zinc-800/60 flex flex-wrap items-center justify-between gap-4">
          <div>
            <h3 className="text-xs font-semibold text-zinc-200 uppercase tracking-wider font-mono">
              Associated Technologies & Tools
            </h3>
            <p className="text-xs text-zinc-400 mt-0.5">
              Everyday workflow utilities and runtime environments
            </p>
          </div>
          <div className="flex flex-wrap gap-2">
            {[
              'TypeScript',
              'React 19',
              'Node.js',
              'Express',
              'Tailwind CSS',
              'Vite',
              'Git / GitHub',
              'Linux / Bash',
              'RESTful APIs',
              'Wikipedia MediaWiki',
              'Wikimedia Commons',
              'OWASP Principles',
              'Markdown / MDX',
              'ESLint & Prettier'
            ].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded-md bg-zinc-800/80 border border-zinc-700/60 text-xs font-mono text-zinc-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
