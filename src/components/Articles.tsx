import { useState } from 'react';
import { BookOpen, Clock, Calendar, ArrowRight, Sparkles } from 'lucide-react';
import { ARTICLES } from '../data/portfolioData';
import { ArticleItem } from '../types';
import { ArticleModal } from './ArticleModal';

export function Articles() {
  const [selectedArticle, setSelectedArticle] = useState<ArticleItem | null>(null);

  return (
    <section id="articles" className="py-20 border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400 mb-3">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Writings & Thoughts</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Articles & Digital Insights
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            Reflections on information preservation, frontend design systems, and cybersecurity hygiene in modern web development.
          </p>
        </div>

        {/* Article Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {ARTICLES.map((article) => (
            <article
              key={article.id}
              id={`article-card-${article.id}`}
              onClick={() => setSelectedArticle(article)}
              className="group bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 hover:border-zinc-700 transition-all flex flex-col justify-between cursor-pointer hover:shadow-lg hover:shadow-black/30"
            >
              <div>
                {/* Meta */}
                <div className="flex items-center justify-between text-xs font-mono text-zinc-400 mb-3">
                  <span className="text-amber-400 font-medium">
                    {article.category}
                  </span>
                  <div className="flex items-center gap-1 text-zinc-500">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{article.readTime}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-amber-400 transition-colors leading-snug mb-2.5">
                  {article.title}
                </h3>

                {/* Excerpt */}
                <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 mb-4">
                  {article.excerpt}
                </p>
              </div>

              {/* Bottom */}
              <div className="pt-4 border-t border-zinc-800/80 flex items-center justify-between">
                <span className="text-[11px] font-mono text-zinc-500">
                  {article.date}
                </span>
                <span className="text-xs font-semibold text-amber-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform">
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </span>
              </div>
            </article>
          ))}
        </div>

        {/* Modal viewer */}
        <ArticleModal
          article={selectedArticle}
          onClose={() => setSelectedArticle(null)}
        />

      </div>
    </section>
  );
}
