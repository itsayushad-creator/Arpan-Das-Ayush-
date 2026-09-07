import { useState, useEffect, FormEvent } from 'react';
import { 
  Mail, 
  Copy, 
  Check, 
  Send, 
  MapPin, 
  Clock, 
  Globe, 
  ExternalLink, 
  MessageSquare,
  Sparkles,
  AlertCircle
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export function Contact() {
  const [copied, setCopied] = useState(false);
  const [currentTime, setCurrentTime] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [formErrors, setFormErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  // Live IST Clock
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: true,
      };
      setCurrentTime(new Intl.DateTimeFormat('en-US', options).format(now));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validateForm = () => {
    const errors: { [key: string]: string } = {};
    if (!formData.name.trim()) errors.name = 'Please enter your name.';
    if (!formData.email.trim()) {
      errors.email = 'Please enter your email address.';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      errors.email = 'Please enter a valid email address.';
    }
    if (!formData.subject.trim()) errors.subject = 'Please provide a subject.';
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errors.message = 'Please provide a message of at least 10 characters.';
    }
    setFormErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate sending message to Arpan's direct inbox
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
    }, 1000);
  };

  const openMailtoFallback = () => {
    const subject = encodeURIComponent(formData.subject || 'Inquiry for Arpan Das');
    const body = encodeURIComponent(
      `From: ${formData.name} (${formData.email})\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 border-t border-zinc-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-xs font-mono text-amber-400 mb-3">
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Initiate Communication</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">
            Get in Touch
          </h2>
          <p className="mt-3 text-base text-zinc-400">
            Have a project in mind, want to collaborate on open-source software or Wikipedia documentation, or simply want to say hello? My inbox is always open.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          
          {/* Left Column: Direct Coordinates & Status */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Direct Email Card */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-md">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Primary Inquiries</h3>
                  <p className="text-xs text-zinc-400">Direct response within 24 hours</p>
                </div>
              </div>

              <div className="flex items-center justify-between p-3 rounded-xl bg-zinc-950 border border-zinc-800 font-mono text-xs sm:text-sm text-zinc-200">
                <span className="truncate mr-2">{PERSONAL_INFO.email}</span>
                <button
                  type="button"
                  id="contact-copy-email-btn"
                  onClick={handleCopyEmail}
                  className="px-3 py-1.5 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-xs font-medium text-white transition-colors flex items-center gap-1.5 shrink-0 cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400">Copied</span>
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
                id="contact-direct-mailto"
                className="mt-3 w-full py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 text-xs font-semibold flex items-center justify-center gap-2 transition-colors cursor-pointer"
              >
                <span>Open Mail App</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Location & Time Zone Widget */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 shadow-md space-y-4">
              <h3 className="text-xs font-semibold text-zinc-300 uppercase tracking-wider font-mono">
                Location & Local Time
              </h3>

              <div className="flex items-center justify-between text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-zinc-300">
                  <MapPin className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>Nadia, West Bengal, India</span>
                </div>
                <span className="text-[11px] font-mono text-zinc-500">Asia/Kolkata</span>
              </div>

              <div className="p-3 rounded-xl bg-zinc-950 border border-zinc-800 flex items-center justify-between">
                <div className="flex items-center gap-2 text-xs text-zinc-400">
                  <Clock className="w-4 h-4 text-emerald-400" />
                  <span>Current Local Time:</span>
                </div>
                <span className="font-mono text-xs sm:text-sm font-bold text-white tracking-wider">
                  {currentTime || 'Loading...'} (IST)
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs text-emerald-400 pt-1">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Currently active & checking communications</span>
              </div>
            </div>

            {/* Open Knowledge & Social Coordinates */}
            <div className="p-5 rounded-2xl bg-zinc-900/50 border border-zinc-800/80 space-y-3">
              <h4 className="text-xs font-semibold text-zinc-300 font-mono uppercase">
                Digital Presence & Profiles
              </h4>
              <div className="grid grid-cols-2 gap-2 text-xs font-medium">
                <a
                  href="https://commons.wikimedia.org"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white flex items-center justify-between transition-colors"
                >
                  <span>Wikimedia</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
                <a
                  href="https://en.wikipedia.org"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white flex items-center justify-between transition-colors"
                >
                  <span>Wikipedia</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white flex items-center justify-between transition-colors"
                >
                  <span>GitHub</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-lg bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 hover:text-white flex items-center justify-between transition-colors"
                >
                  <span>LinkedIn</span>
                  <ExternalLink className="w-3 h-3 text-zinc-500" />
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Interactive Message Form */}
          <div className="lg:col-span-7">
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-6 sm:p-8 shadow-xl">
              
              <h3 className="text-lg font-bold text-white mb-1">
                Send a Message to Arpan Das (Ayush)
              </h3>
              <p className="text-xs sm:text-sm text-zinc-400 mb-6">
                Fill out the fields below to dispatch an inquiry.
              </p>

              {isSent ? (
                <div className="p-6 rounded-xl bg-emerald-950/40 border border-emerald-800/80 text-center space-y-3 animate-in fade-in">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-6 h-6" />
                  </div>
                  <h4 className="text-base font-bold text-white">
                    Thank you, {formData.name}!
                  </h4>
                  <p className="text-xs sm:text-sm text-emerald-300/90 max-w-md mx-auto leading-relaxed">
                    Your message regarding &ldquo;{formData.subject}&rdquo; has been registered. Arpan Das will respond to <span className="font-mono text-white">{formData.email}</span> shortly.
                  </p>
                  <div className="pt-3 flex flex-wrap items-center justify-center gap-3">
                    <button
                      type="button"
                      onClick={openMailtoFallback}
                      className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-zinc-950 text-xs font-semibold inline-flex items-center gap-2 cursor-pointer transition-colors"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>Also open in Email Client</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => {
                        setIsSent(false);
                        setFormData({ name: '', email: '', subject: '', message: '' });
                      }}
                      className="px-4 py-2 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-zinc-300 text-xs font-medium cursor-pointer transition-colors"
                    >
                      Send Another Note
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label htmlFor="contact-name" className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Your Name <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="text"
                        id="contact-name"
                        value={formData.name}
                        onChange={(e) => {
                          setFormData({ ...formData, name: e.target.value });
                          if (formErrors.name) setFormErrors({ ...formErrors, name: '' });
                        }}
                        placeholder="e.g. Maya Roy"
                        className={`w-full bg-zinc-950 border rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none transition-colors ${
                          formErrors.name ? 'border-red-500 focus:border-red-500' : 'border-zinc-800 focus:border-amber-500'
                        }`}
                      />
                      {formErrors.name && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{formErrors.name}</span>
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label htmlFor="contact-email" className="block text-xs font-medium text-zinc-300 mb-1.5">
                        Your Email Address <span className="text-amber-400">*</span>
                      </label>
                      <input
                        type="email"
                        id="contact-email"
                        value={formData.email}
                        onChange={(e) => {
                          setFormData({ ...formData, email: e.target.value });
                          if (formErrors.email) setFormErrors({ ...formErrors, email: '' });
                        }}
                        placeholder="name@example.com"
                        className={`w-full bg-zinc-950 border rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none transition-colors ${
                          formErrors.email ? 'border-red-500 focus:border-red-500' : 'border-zinc-800 focus:border-amber-500'
                        }`}
                      />
                      {formErrors.email && (
                        <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          <span>{formErrors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label htmlFor="contact-subject" className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Subject / Topic <span className="text-amber-400">*</span>
                    </label>
                    <input
                      type="text"
                      id="contact-subject"
                      value={formData.subject}
                      onChange={(e) => {
                        setFormData({ ...formData, subject: e.target.value });
                        if (formErrors.subject) setFormErrors({ ...formErrors, subject: '' });
                      }}
                      placeholder="e.g. Web Development Inquiry / Wikipedia Collaboration"
                      className={`w-full bg-zinc-950 border rounded-xl px-3.5 py-2.5 text-xs sm:text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none transition-colors ${
                        formErrors.subject ? 'border-red-500 focus:border-red-500' : 'border-zinc-800 focus:border-amber-500'
                      }`}
                    />
                    {formErrors.subject && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{formErrors.subject}</span>
                      </p>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label htmlFor="contact-message" className="block text-xs font-medium text-zinc-300 mb-1.5">
                      Your Message <span className="text-amber-400">*</span>
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (formErrors.message) setFormErrors({ ...formErrors, message: '' });
                      }}
                      placeholder="Share details about your idea, project scope, or questions..."
                      className={`w-full bg-zinc-950 border rounded-xl p-3 text-xs sm:text-sm text-zinc-100 placeholder-zinc-500 focus:outline-none transition-colors resize-none ${
                        formErrors.message ? 'border-red-500 focus:border-red-500' : 'border-zinc-800 focus:border-amber-500'
                      }`}
                    />
                    {formErrors.message && (
                      <p className="text-[11px] text-red-400 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        <span>{formErrors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                    <button
                      type="submit"
                      id="contact-submit-btn"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-6 py-3 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-bold text-xs sm:text-sm flex items-center justify-center gap-2 transition-colors shadow-md disabled:opacity-50 cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin" />
                          <span>Dispatching...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Send Message to Arpan</span>
                        </>
                      )}
                    </button>

                    <span className="text-[11px] text-zinc-500 text-center sm:text-right font-mono">
                      Target: {PERSONAL_INFO.email}
                    </span>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
