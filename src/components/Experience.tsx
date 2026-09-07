import { useState } from 'react';
import { 
  Briefcase, 
  GraduationCap, 
  Globe, 
  Code2, 
  PenTool, 
  Calendar, 
  MapPin, 
  CheckCircle2,
  Filter
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';
import { ExperienceItem } from '../types';

export function Experience() {
  const [filterType, setFilterType] = useState<string>('all');

  const filters = [
    { id: 'all', label: 'All Milestones' },
    { id: 'opensource', label: 'Wikipedia & Open Source' },
    { id: 'dev', label: 'Web Engineering' },
    { id: 'media', label: 'Content & Media' },
    { id: 'education', label: 'Education' },
  ];

  const filtered = filterType === 'all'
    ? EXPERIENCES
    : EXPERIENCES.filter((item) => item.type === filterType);

  const getTypeIcon = (type: ExperienceItem['type']) => {
    switch (type) {
      case 'opensource':
        return Globe;
      case 'dev':
        return Code2;
      case 'media':
        return PenTool;
      case 'education':
        return GraduationCap;
      default:
        return Briefcase;
    }
  };

  return (
    <section id="experience" className="py-20 border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400 mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Career & Milestones</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Experience & Trajectory
            </h2>
            <p className="mt-3 text-base text-zinc-400">
              Tracing my journey through open-source encyclopedia editing, web development, creative media production, and academic foundations.
            </p>
          </div>

          {/* Filter pills */}
          <div className="flex flex-wrap gap-1.5 bg-zinc-900/80 p-1.5 rounded-xl border border-zinc-800 self-start md:self-auto">
            {filters.map((f) => (
              <button
                key={f.id}
                type="button"
                id={`exp-filter-${f.id}`}
                onClick={() => setFilterType(f.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                  filterType === f.id
                    ? 'bg-amber-500 text-zinc-950 font-semibold shadow-sm'
                    : 'text-zinc-400 hover:text-white hover:bg-zinc-800/60'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l border-zinc-800 ml-4 sm:ml-8 space-y-10 pl-6 sm:pl-10">
          {filtered.map((item, index) => {
            const IconComponent = getTypeIcon(item.type);
            return (
              <div
                key={item.id}
                id={`timeline-item-${item.id}`}
                className="relative group"
              >
                {/* Timeline Dot with Icon */}
                <div className="absolute -left-[35px] sm:-left-[51px] top-0 w-8 h-8 rounded-lg bg-zinc-900 border border-zinc-700 flex items-center justify-center text-amber-400 group-hover:border-amber-400/80 transition-colors shadow-md">
                  <IconComponent className="w-4 h-4" />
                </div>

                {/* Content Card */}
                <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 sm:p-7 hover:border-zinc-700 transition-colors">
                  
                  {/* Header info */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                    <div>
                      <span className="text-[11px] font-mono uppercase tracking-wider text-amber-400 font-semibold">
                        {item.organization}
                      </span>
                      <h3 className="text-xl font-bold text-white tracking-tight mt-0.5">
                        {item.role}
                      </h3>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-zinc-400">
                      <span className="inline-flex items-center gap-1 bg-zinc-800/80 px-2.5 py-1 rounded border border-zinc-700/60">
                        <Calendar className="w-3 h-3 text-zinc-400" />
                        <span>{item.period}</span>
                      </span>
                      <span className="inline-flex items-center gap-1 bg-zinc-800/80 px-2.5 py-1 rounded border border-zinc-700/60">
                        <MapPin className="w-3 h-3 text-zinc-400" />
                        <span>{item.location}</span>
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-zinc-300 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Bullet points */}
                  <div className="space-y-2 mb-5">
                    {item.bullets.map((bullet, bIdx) => (
                      <div key={bIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-amber-400 mt-1 shrink-0" />
                        <span className="leading-relaxed">{bullet}</span>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-3 border-t border-zinc-800/60">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800/50 border border-zinc-700/40 text-zinc-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
