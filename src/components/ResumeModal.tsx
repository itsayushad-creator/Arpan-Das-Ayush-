import { useState } from 'react';
import { X, Printer, Download, Copy, Check, Mail, MapPin, Globe, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, SKILLS, EXPERIENCES, PROJECTS } from '../data/portfolioData';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const resumeText = `
ARPAN DAS (AYUSH)
Full-Stack Developer, Open Knowledge Contributor & Creative Technologist
Email: ${PERSONAL_INFO.email}
Location: ${PERSONAL_INFO.location}
Timezone: ${PERSONAL_INFO.timezone}

PROFESSIONAL SUMMARY
${PERSONAL_INFO.aboutParagraphs.join('\n\n')}

CORE COMPETENCIES
- Frontend: React 19, TypeScript, Next.js, Tailwind CSS, HTML5/CSS3
- Backend: Node.js, Express, REST APIs, JSON APIs, Databases
- Open Knowledge: Wikipedia Research & Fact-Checking, Wikimedia Commons, Technical Writing
- Security & Systems: Web App Security, OWASP standards, Linux, Git/GitHub

EXPERIENCE & MILESTONES
${EXPERIENCES.map(e => `${e.role} | ${e.organization} (${e.period})\n- ${e.description}\n${e.bullets.map(b => `  * ${b}`).join('\n')}`).join('\n\n')}

KEY PROJECTS
${PROJECTS.map(p => `${p.title} (${p.category.toUpperCase()}): ${p.subtitle}\n- ${p.description}\n- Tech: ${p.tags.join(', ')}`).join('\n\n')}

EDUCATION
- Palashipara Mahatma Gandhi Smriti Vidyapith (Foundations in Mathematics, CS & Sciences)
    `.trim();

    navigator.clipboard.writeText(resumeText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleDownloadTxt = () => {
    const resumeText = `ARPAN DAS (AYUSH) - CURRICULUM VITAE\nEmail: ${PERSONAL_INFO.email}\nLocation: ${PERSONAL_INFO.location}\n\n` +
      `SUMMARY\n${PERSONAL_INFO.aboutParagraphs.join('\n\n')}\n\n` +
      `EXPERIENCE\n` +
      EXPERIENCES.map(e => `[${e.period}] ${e.role} - ${e.organization}\n${e.bullets.map(b => `* ${b}`).join('\n')}`).join('\n\n');
    
    const blob = new Blob([resumeText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `Arpan_Das_Ayush_Resume.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div
      id="resume-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="resume-modal-card"
        className="relative w-full max-w-4xl bg-zinc-950 border border-zinc-700/80 rounded-2xl shadow-2xl p-6 sm:p-10 my-8 text-left max-h-[90vh] flex flex-col"
      >
        {/* Controls Toolbar */}
        <div className="flex flex-wrap items-center justify-between pb-4 border-b border-zinc-800 gap-3 shrink-0">
          <div className="flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-amber-400" />
            <h2 className="text-sm sm:text-base font-bold text-zinc-100 font-mono">
              Curriculum Vitae • Arpan Das (Ayush)
            </h2>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              id="resume-copy-btn"
              onClick={handleCopyText}
              className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-medium text-zinc-300 flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Copy formatted resume text"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span className="text-emerald-400">Copied</span>
                </>
              ) : (
                <>
                  <Copy className="w-3.5 h-3.5" />
                  <span>Copy Text</span>
                </>
              )}
            </button>

            <button
              type="button"
              id="resume-download-btn"
              onClick={handleDownloadTxt}
              className="px-3 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-medium text-zinc-300 flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Download text file"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download .txt</span>
            </button>

            <button
              type="button"
              id="resume-print-btn"
              onClick={handlePrint}
              className="px-3 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 text-xs font-semibold flex items-center gap-1.5 transition-colors cursor-pointer"
              title="Print or Save as PDF"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Print / PDF</span>
            </button>

            <button
              type="button"
              id="resume-close-btn"
              onClick={onClose}
              className="p-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-400 hover:text-white transition-colors cursor-pointer ml-2"
              aria-label="Close CV"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Scrollable Printable Document Content */}
        <div id="printable-resume" className="overflow-y-auto pr-2 pt-6 space-y-8 text-zinc-300 text-xs sm:text-sm">
          
          {/* Header */}
          <div className="border-b border-zinc-800 pb-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Arpan Das <span className="text-amber-400 text-xl font-mono">({PERSONAL_INFO.nickname})</span>
            </h1>
            <p className="text-base text-zinc-300 mt-1 font-medium">
              {PERSONAL_INFO.tagline}
            </p>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-3 text-xs font-mono text-zinc-400">
              <span className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-amber-400" />
                <a href={`mailto:${PERSONAL_INFO.email}`} className="text-zinc-200 hover:underline">
                  {PERSONAL_INFO.email}
                </a>
              </span>
              <span className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-zinc-400" />
                <span>{PERSONAL_INFO.location}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Globe className="w-3.5 h-3.5 text-zinc-400" />
                <span>IST (UTC+5:30)</span>
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div>
            <h2 className="text-xs uppercase tracking-wider font-mono text-amber-400 font-bold mb-2">
              Professional Summary
            </h2>
            <p className="text-zinc-300 leading-relaxed text-xs sm:text-sm bg-zinc-900/40 p-4 rounded-xl border border-zinc-800/80">
              Passionate full-stack developer and open-source advocate with deep roots in creative media and digital knowledge curation. Experienced in designing resilient web applications using React, TypeScript, Node.js, and modern styling libraries. Highly active contributor to Wikipedia and Wikimedia Commons, championing factual verifiability, neutral point of view, and digital access. Proactively investigates web security, encryption protocols, and performance optimization.
            </p>
          </div>

          {/* Technical Skills */}
          <div>
            <h2 className="text-xs uppercase tracking-wider font-mono text-amber-400 font-bold mb-3">
              Technical Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div className="p-3.5 rounded-lg bg-zinc-900/60 border border-zinc-800">
                <p className="font-semibold text-zinc-200 text-xs mb-1">Frontend Engineering</p>
                <p className="text-zinc-400 text-xs">
                  React 19, Next.js, TypeScript, JavaScript (ESNext), Tailwind CSS, Responsive Design, Semantic HTML5, Motion.
                </p>
              </div>
              <div className="p-3.5 rounded-lg bg-zinc-900/60 border border-zinc-800">
                <p className="font-semibold text-zinc-200 text-xs mb-1">Backend & Cloud</p>
                <p className="text-zinc-400 text-xs">
                  Node.js, Express.js, RESTful Architecture, JSON APIs, Cloud Run, Database schema fundamentals.
                </p>
              </div>
              <div className="p-3.5 rounded-lg bg-zinc-900/60 border border-zinc-800">
                <p className="font-semibold text-zinc-200 text-xs mb-1">Open Knowledge & Curation</p>
                <p className="text-zinc-400 text-xs">
                  Wikipedia Editing, Wikimedia Commons, Reference Citation Verification, Technical Writing, Open Documentation.
                </p>
              </div>
              <div className="p-3.5 rounded-lg bg-zinc-900/60 border border-zinc-800">
                <p className="font-semibold text-zinc-200 text-xs mb-1">Tools & Security</p>
                <p className="text-zinc-400 text-xs">
                  Git / GitHub, Linux Environments, Web Application Security (OWASP), Security Headers, SSL/TLS, Vite.
                </p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div>
            <h2 className="text-xs uppercase tracking-wider font-mono text-amber-400 font-bold mb-3">
              Experience & Contributions
            </h2>
            <div className="space-y-4">
              {EXPERIENCES.map((exp) => (
                <div key={exp.id} className="border-l-2 border-zinc-800 pl-4 space-y-1.5">
                  <div className="flex flex-wrap items-center justify-between gap-1">
                    <h3 className="font-bold text-zinc-100 text-sm">
                      {exp.role} — <span className="font-normal text-amber-400">{exp.organization}</span>
                    </h3>
                    <span className="font-mono text-xs text-zinc-500">{exp.period}</span>
                  </div>
                  <p className="text-xs text-zinc-400">{exp.description}</p>
                  <ul className="list-disc list-inside space-y-1 text-xs text-zinc-300">
                    {exp.bullets.map((b, idx) => (
                      <li key={idx} className="leading-relaxed">{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Selected Projects */}
          <div>
            <h2 className="text-xs uppercase tracking-wider font-mono text-amber-400 font-bold mb-3">
              Key Projects & Open Tools
            </h2>
            <div className="space-y-3">
              {PROJECTS.slice(0, 4).map((p) => (
                <div key={p.id} className="p-3.5 rounded-lg bg-zinc-900/40 border border-zinc-800/80">
                  <div className="flex items-center justify-between">
                    <h3 className="font-semibold text-zinc-100 text-xs sm:text-sm">
                      {p.title} <span className="font-mono text-zinc-500 text-xs">({p.subtitle})</span>
                    </h3>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-zinc-800 text-zinc-400">
                      {p.category}
                    </span>
                  </div>
                  <p className="text-xs text-zinc-400 mt-1">{p.description}</p>
                  <p className="text-[11px] font-mono text-amber-400/90 mt-1.5">
                    Tech: {p.tags.join(' • ')}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="border-t border-zinc-800 pt-5">
            <h2 className="text-xs uppercase tracking-wider font-mono text-amber-400 font-bold mb-2">
              Education
            </h2>
            <div className="flex items-start justify-between">
              <div>
                <p className="font-bold text-zinc-100 text-sm">Palashipara Mahatma Gandhi Smriti Vidyapith</p>
                <p className="text-xs text-zinc-400">Nadia, West Bengal, India</p>
                <p className="text-xs text-zinc-300 mt-1">
                  Focus on Mathematics, Computer Applications, Science, and Creative Co-Curriculars.
                </p>
              </div>
              <span className="font-mono text-xs text-zinc-500">Formative Years</span>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
