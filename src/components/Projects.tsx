import { useState, ElementType } from 'react';
import { 
  FolderGit2, 
  Search, 
  ExternalLink, 
  BookMarked, 
  Activity, 
  ShieldAlert, 
  FileText, 
  Sparkles, 
  Terminal,
  Code,
  ArrowRight,
  Filter
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { Project } from '../types';
import { ProjectModal } from './ProjectModal';

const projectIconMap: Record<string, ElementType> = {
  BookMarked,
  Activity,
  ShieldAlert,
  FileText,
  Sparkles,
  Terminal,
};

export function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'fullstack', label: 'Full-Stack Apps' },
    { id: 'opensource', label: 'Open Knowledge & Wiki' },
    { id: 'security', label: 'Security & Utilities' },
    { id: 'creative', label: 'Developer Tools' },
  ];

  const filteredProjects = PROJECTS.filter((proj) => {
    const matchesCategory = selectedCategory === 'all' || proj.category === selectedCategory;
    const q = searchQuery.toLowerCase().trim();
    const matchesQuery = !q || (
      proj.title.toLowerCase().includes(q) ||
      proj.subtitle.toLowerCase().includes(q) ||
      proj.description.toLowerCase().includes(q) ||
      proj.tags.some(tag => tag.toLowerCase().includes(q))
    );
    return matchesCategory && matchesQuery;
  });

  return (
    <section id="projects" className="py-20 border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400 mb-3">
              <FolderGit2 className="w-3.5 h-3.5" />
              <span>Selected Works</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
              Featured Projects & Tools
            </h2>
            <p className="mt-3 text-base text-zinc-400">
              A curated catalog of open-source utilities, developer cockpits, web security inspectors, and digital knowledge platforms.
            </p>
          </div>

          {/* Search bar */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              id="projects-search-input"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search by tech or title..."
              className="w-full bg-zinc-900 border border-zinc-800 rounded-xl pl-9 pr-3 py-2 text-xs text-zinc-100 placeholder-zinc-500 focus:outline-none focus:border-amber-500/60 transition-colors"
            />
          </div>
        </div>

        {/* Category Selector */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <div className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 mr-2">
            <Filter className="w-3.5 h-3.5 text-amber-400" />
            <span>Filter:</span>
          </div>
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              id={`projects-filter-${cat.id}`}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-colors cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-zinc-100 text-zinc-950 font-semibold shadow-sm'
                  : 'bg-zinc-900/80 border border-zinc-800/80 text-zinc-400 hover:text-white hover:bg-zinc-800/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        {filteredProjects.length === 0 ? (
          <div className="p-12 text-center bg-zinc-900/30 border border-zinc-800 rounded-2xl">
            <p className="text-zinc-400 text-sm">No projects matching your search criteria.</p>
            <button
              type="button"
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
              }}
              className="mt-3 text-xs text-amber-400 hover:underline cursor-pointer"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => {
              const IconComponent = projectIconMap[project.iconName] || Code;
              return (
                <div
                  key={project.id}
                  id={`project-card-${project.id}`}
                  className="group bg-zinc-900/70 border border-zinc-800/90 rounded-2xl p-6 hover:border-zinc-700 transition-all duration-300 flex flex-col justify-between hover:shadow-xl hover:shadow-black/40"
                >
                  <div>
                    {/* Top row */}
                    <div className="flex items-start justify-between gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-zinc-800 border border-zinc-700/60 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <div className="flex flex-col items-end gap-1">
                        <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700/60">
                          {project.category}
                        </span>
                        {project.featured && (
                          <span className="text-[10px] font-mono text-amber-400">
                            ★ Featured
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Title and Subtitle */}
                    <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400 mt-0.5 mb-3">
                      {project.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-xs text-zinc-300 leading-relaxed line-clamp-3 mb-4">
                      {project.description}
                    </p>

                    {/* Performance Metric Pill */}
                    {project.metrics && (
                      <div className="mb-4 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-amber-500/5 border border-amber-500/15 text-[11px] font-mono text-amber-300/90">
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
                        <span>{project.metrics}</span>
                      </div>
                    )}
                  </div>

                  {/* Bottom section */}
                  <div className="pt-4 border-t border-zinc-800/80 space-y-4">
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800/60 border border-zinc-700/40 text-zinc-400"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 4 && (
                        <span className="text-[10px] font-mono text-zinc-400 self-center">
                          +{project.tags.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between pt-1">
                      <button
                        type="button"
                        id={`project-details-btn-${project.id}`}
                        onClick={() => setActiveModalProject(project)}
                        className="text-xs font-semibold text-amber-400 hover:text-amber-300 flex items-center gap-1 transition-colors cursor-pointer"
                      >
                        <span>Case Study & Specs</span>
                        <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                      </button>

                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="text-xs text-zinc-400 hover:text-white flex items-center gap-1 transition-colors"
                          title="View Repository"
                        >
                          <span>Code</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* Modal display when a project is selected */}
        <ProjectModal
          project={activeModalProject}
          onClose={() => setActiveModalProject(null)}
        />

      </div>
    </section>
  );
}
