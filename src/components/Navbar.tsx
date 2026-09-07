import { useState, useEffect, MouseEvent } from 'react';
import { Menu, X, ArrowUpRight, FileText, Mail, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenContact: () => void;
}

export function Navbar({ onOpenResume, onOpenContact }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Articles', href: '#articles' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleLinkClick = (e: MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="navbar"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-zinc-950/80 backdrop-blur-md border-b border-zinc-800/80 py-3 shadow-lg shadow-black/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand */}
        <a
          href="#"
          id="navbar-brand-link"
          className="group flex items-center gap-2.5 text-left focus:outline-none"
        >
          <div className="w-9 h-9 rounded-lg bg-zinc-900 border border-zinc-700/80 flex items-center justify-center font-mono font-bold text-amber-400 group-hover:border-amber-400/50 transition-colors shadow-sm">
            AD
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-base tracking-tight text-zinc-100 flex items-center gap-1.5">
              {PERSONAL_INFO.name}
              <span className="text-xs font-normal text-amber-400/90 font-mono bg-amber-400/10 px-1.5 py-0.5 rounded border border-amber-400/20">
                {PERSONAL_INFO.nickname}
              </span>
            </span>
            <span className="text-[11px] text-zinc-400 tracking-wide">
              Full-Stack & Open Knowledge
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav-links" className="hidden md:flex items-center gap-1 bg-zinc-900/60 border border-zinc-800/60 rounded-full px-3 py-1.5 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              id={`nav-link-${link.label.toLowerCase()}`}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="px-3.5 py-1.5 text-xs font-medium text-zinc-300 hover:text-white rounded-full hover:bg-zinc-800/60 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          {/* Availability pill */}
          <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-950/40 border border-emerald-800/50 text-[11px] font-medium text-emerald-300">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for projects</span>
          </div>

          <button
            type="button"
            id="nav-resume-btn"
            onClick={onOpenResume}
            className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-xs font-medium text-zinc-200 hover:text-white transition-colors cursor-pointer"
          >
            <FileText className="w-3.5 h-3.5 text-amber-400" />
            <span>Resume</span>
          </button>

          <button
            type="button"
            id="nav-contact-btn"
            onClick={onOpenContact}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 text-xs font-semibold transition-colors shadow-sm cursor-pointer"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </button>
        </div>

        {/* Mobile menu trigger */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            type="button"
            id="mobile-menu-toggle"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-navigation-drawer"
          className="md:hidden bg-zinc-950/95 border-b border-zinc-800 px-5 pt-4 pb-6 backdrop-blur-xl mt-2 space-y-3"
        >
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                id={`mobile-link-${link.label.toLowerCase()}`}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="px-3 py-2.5 rounded-lg bg-zinc-900/60 border border-zinc-800/60 text-sm font-medium text-zinc-300 hover:text-white hover:bg-zinc-800/80 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-2 border-t border-zinc-800/80 flex flex-col gap-2">
            <button
              type="button"
              id="mobile-drawer-resume-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="w-full py-2.5 px-4 rounded-lg bg-zinc-900 border border-zinc-800 text-xs font-medium text-zinc-200 flex items-center justify-center gap-2"
            >
              <FileText className="w-4 h-4 text-amber-400" />
              <span>View Curriculum Vitae (Resume)</span>
            </button>
            <button
              type="button"
              id="mobile-drawer-contact-btn"
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 px-4 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 text-xs font-semibold flex items-center justify-center gap-2"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Arpan Das</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
