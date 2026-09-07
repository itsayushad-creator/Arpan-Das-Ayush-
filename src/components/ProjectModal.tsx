import { X, ExternalLink, Github, CheckCircle2, Layers, Cpu, Code2 } from 'lucide-react';
import { Project } from '../types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  if (!project) return null;

  return (
    <div
      id="project-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="project-modal-card"
        className="relative w-full max-w-2xl bg-zinc-900 border border-zinc-700/80 rounded-2xl shadow-2xl p-6 sm:p-8 my-8 text-left animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          type="button"
          id="project-modal-close-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close project modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="pr-10">
          <div className="flex items-center gap-2 mb-2">
            <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 uppercase font-semibold tracking-wider">
              {project.category}
            </span>
            {project.metrics && (
              <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-zinc-800 text-zinc-300 border border-zinc-700">
                {project.metrics}
              </span>
            )}
          </div>
          <h2 className="text-2xl font-bold text-white tracking-tight">
            {project.title}
          </h2>
          <p className="text-sm font-medium text-zinc-400 mt-1">
            {project.subtitle}
          </p>
        </div>

        {/* Body Content */}
        <div className="mt-6 space-y-6 text-sm text-zinc-300">
          <div>
            <h3 className="text-xs uppercase tracking-wider font-mono text-zinc-400 mb-2 font-semibold">
              Project Overview
            </h3>
            <p className="leading-relaxed text-zinc-300 bg-zinc-950/60 p-4 rounded-xl border border-zinc-800">
              {project.description}
            </p>
          </div>

          {/* Key Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h3 className="text-xs uppercase tracking-wider font-mono text-zinc-400 mb-2.5 font-semibold flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-400" />
                <span>Key Capabilities & Implementations</span>
              </h3>
              <ul className="space-y-2">
                {project.highlights.map((highlight, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-2 shrink-0" />
                    <span className="leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Architecture Insights */}
          {project.architecture && (
            <div>
              <h3 className="text-xs uppercase tracking-wider font-mono text-zinc-400 mb-2 font-semibold flex items-center gap-2">
                <Layers className="w-4 h-4 text-blue-400" />
                <span>Architecture & Engineering Notes</span>
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed bg-zinc-950/40 p-3.5 rounded-lg border border-zinc-800/80">
                {project.architecture}
              </p>
            </div>
          )}

          {/* Tech Tags */}
          <div>
            <h3 className="text-xs uppercase tracking-wider font-mono text-zinc-400 mb-2 font-semibold flex items-center gap-2">
              <Cpu className="w-4 h-4 text-emerald-400" />
              <span>Technology Stack</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-2.5 py-1 rounded bg-zinc-800 border border-zinc-700 text-xs font-mono text-zinc-200"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer Actions */}
        <div className="mt-8 pt-5 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-medium inline-flex items-center gap-2 transition-colors"
              >
                <Github className="w-4 h-4" />
                <span>Source Code</span>
              </a>
            )}
            {project.liveUrl && project.liveUrl !== '#' && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer"
                className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 text-xs font-semibold inline-flex items-center gap-2 transition-colors"
              >
                <span>Live Demonstration</span>
                <ExternalLink className="w-4 h-4" />
              </a>
            )}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-transparent hover:bg-zinc-800 text-zinc-400 hover:text-white text-xs font-medium transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
}
