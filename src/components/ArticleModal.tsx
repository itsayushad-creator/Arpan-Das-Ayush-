import { X, Clock, Calendar, Tag, BookOpen, Share2, Check } from 'lucide-react';
import { useState } from 'react';
import { ArticleItem } from '../types';

interface ArticleModalProps {
  article: ArticleItem | null;
  onClose: () => void;
}

export function ArticleModal({ article, onClose }: ArticleModalProps) {
  const [copied, setCopied] = useState(false);

  if (!article) return null;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="article-modal-backdrop"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="article-modal-card"
        className="relative w-full max-w-3xl bg-zinc-900 border border-zinc-700/80 rounded-2xl shadow-2xl p-6 sm:p-10 my-8 text-left animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Close Button */}
        <button
          type="button"
          id="article-modal-close-btn"
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-400 hover:text-white transition-colors cursor-pointer"
          aria-label="Close article modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="pr-10 border-b border-zinc-800 pb-6">
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-amber-500/10 border border-amber-500/20 text-amber-400 uppercase font-semibold">
              {article.category}
            </span>
            <span className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400">
              <Calendar className="w-3.5 h-3.5" />
              <span>{article.date}</span>
            </span>
            <span className="text-zinc-600">•</span>
            <span className="inline-flex items-center gap-1 text-xs font-mono text-zinc-400">
              <Clock className="w-3.5 h-3.5" />
              <span>{article.readTime}</span>
            </span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-snug">
            {article.title}
          </h2>

          <p className="text-sm sm:text-base text-zinc-400 mt-2 font-medium">
            {article.excerpt}
          </p>

          <div className="flex items-center justify-between pt-4 mt-2">
            <div className="flex items-center gap-2">
              <div className="w-7 h-7 rounded-full bg-amber-500/20 border border-amber-500/30 flex items-center justify-center text-amber-400 font-mono text-xs font-bold">
                AD
              </div>
              <span className="text-xs text-zinc-300 font-medium">
                By Arpan Das (Ayush)
              </span>
            </div>

            <button
              type="button"
              onClick={handleCopyLink}
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-zinc-300 transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3 h-3 text-emerald-400" />
                  <span className="text-emerald-400">Link Copied</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3 h-3" />
                  <span>Share</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Body Paragraphs */}
        <div className="py-6 space-y-4 text-zinc-300 text-sm sm:text-base leading-relaxed">
          {article.content.map((p, idx) => (
            <p key={idx} className="leading-relaxed">
              {p}
            </p>
          ))}
        </div>

        {/* Tags and Close */}
        <div className="pt-6 border-t border-zinc-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-1.5">
            <Tag className="w-3.5 h-3.5 text-zinc-500 mr-1" />
            {article.tags.map((t) => (
              <span
                key={t}
                className="text-xs font-mono px-2.5 py-0.5 rounded bg-zinc-800 border border-zinc-700 text-zinc-300"
              >
                #{t}
              </span>
            ))}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white text-xs font-medium transition-colors cursor-pointer"
          >
            Close Article
          </button>
        </div>

      </div>
    </div>
  );
}
