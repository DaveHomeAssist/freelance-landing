import { useState, useEffect, useRef } from "react";

// ═══════════════════════════════════════════════════════════════
// FREELANCE SERVICES LANDING PAGE
// Designed to convert local business owners into clients
// ═══════════════════════════════════════════════════════════════

const ME = {
  name: "Your Name",               // ← CHANGE THIS
  bizName: "Rapid Sites",           // ← CHANGE THIS (or use your name)
  tagline: "Professional websites for local businesses — delivered in 48 hours.",
  email: "hello@rapidsites.dev",    // ← CHANGE THIS
  phone: "(555) 000-0000",          // ← CHANGE THIS
  calendly: "#contact",             // ← Replace with your Calendly or Cal.com link
  location: "Philadelphia & South Jersey",
};

const PACKAGES = [
  {
    id: "starter",
    name: "Starter",
    price: 750,
    desc: "Perfect for businesses that need a clean, professional web presence fast.",
    turnaround: "48 hours",
    features: [
      "Single-page responsive website",
      "Mobile-optimized design",
      "Contact form integration",
      "Google Maps embed",
      "Basic SEO setup",
      "1 round of revisions",
    ],
    best: false,
  },
  {
    id: "professional",
    name: "Professional",
    price: 1500,
    desc: "The full package — multi-page site with everything a growing business needs.",
    turnaround: "3–5 days",
    features: [
      "Multi-page website (up to 7 pages)",
      "Custom design matched to your brand",
      "Mobile-first responsive design",
      "Contact forms + email integration",
      "Google Business optimization",
      "Speed & SEO optimization",
      "Social media integration",
      "2 rounds of revisions",
      "30 days of free support",
    ],
    best: true,
  },
  {
    id: "premium",
    name: "Premium",
    price: 2500,
    desc: "Full-service digital presence with advanced features and ongoing support.",
    turnaround: "5–7 days",
    features: [
      "Everything in Professional",
      "PWA — works offline, installable on phones",
      "Booking / scheduling system",
      "Blog or news section",
      "Analytics dashboard setup",
      "Content writing assistance",
      "3 rounds of revisions",
      "60 days of priority support",
      "Monthly maintenance option available",
    ],
    best: false,
  },
];

const PORTFOLIO = [
  {
    id: 1, name: "Act Two Catering", type: "Catering Company",
    desc: "Full-service PWA with menu showcase, event booking, budget estimator, and multi-page content. Installable on mobile with offline support.",
    tags: ["PWA", "React", "Multi-Page", "Booking Form"],
    color: "#722F37", accent: "#C8973E",
    stats: { pages: 12, days: 3, features: "PWA + Offline" },
    featured: true,
  },
  {
    id: 2, name: "Getz Hardwood Flooring", type: "Home Services",
    desc: "Comprehensive business site with service pages, project gallery, budget calculator, and multi-step quote form. Built for lead generation.",
    tags: ["Lead Gen", "Gallery", "Calculator", "SEO"],
    color: "#1B2838", accent: "#8B6F47",
    stats: { pages: 14, days: 4, features: "Quote System" },
    featured: true,
  },
  {
    id: 3, name: "Coming Soon: Law Firm Template", type: "Legal Services",
    desc: "Practice area pages, attorney profiles, case results, and consultation booking. Designed for trust and authority.",
    tags: ["Professional", "Trust Signals", "Booking"],
    color: "#1a2744", accent: "#8FA4C4",
    stats: { pages: 8, days: 3, features: "Attorney Profiles" },
    featured: false,
  },
  {
    id: 4, name: "Coming Soon: Real Estate Template", type: "Real Estate",
    desc: "Property showcase, neighborhood guides, agent profile, and contact system. MLS-style listing layouts.",
    tags: ["Listings", "Neighborhood Pages", "Agent Profile"],
    color: "#2d1f0e", accent: "#c9a96e",
    stats: { pages: 10, days: 4, features: "Property Cards" },
    featured: false,
  },
];

const PROCESS = [
  { step: "01", title: "Free Consultation", desc: "We talk for 15 minutes. You tell me about your business, your goals, and what you need. I'll tell you exactly what I'd build and what it costs. No pressure, no jargon.", icon: "📞" },
  { step: "02", title: "Design & Build", desc: "I build your complete site — typically within 48 hours to 5 days depending on the package. You get a live preview link to review before anything goes public.", icon: "⚡" },
  { step: "03", title: "Review & Refine", desc: "You review the site and tell me what to adjust. Copy changes, color tweaks, layout preferences — I handle all of it. Your site, your call.", icon: "✏️" },
  { step: "04", title: "Launch & Support", desc: "We go live. I handle domain setup, hosting configuration, and make sure everything works perfectly. Then I stick around for 30–60 days of support.", icon: "🚀" },
];

const FAQS = [
  { q: "How can you build a site in 48 hours?", a: "I work from battle-tested templates that I've built specifically for each industry. Instead of starting from scratch every time, I customize a proven foundation to match your brand. The result is faster delivery without sacrificing quality — you get a site that would take most agencies 4–6 weeks." },
  { q: "What do I need to provide?", a: "Your logo (if you have one), photos of your business/team/work, your business information (hours, address, services), and any specific text you want on the site. If you don't have great photos, I can help with stock photography. If you don't have a logo, I can recommend affordable options." },
  { q: "Do I need to know anything technical?", a: "Nothing. I handle everything — design, development, hosting setup, domain configuration, email forms, the works. You just tell me what you want your site to communicate and I build it." },
  { q: "What about hosting and domain?", a: "I'll help you set up hosting (typically $0–20/month depending on your needs) and connect your domain. If you don't have a domain yet, I'll help you pick and register one." },
  { q: "Can I update the site myself later?", a: "Depending on the setup, I can build it so you can make basic text and image changes yourself. For more complex updates, I offer affordable monthly maintenance packages or one-time update fees." },
  { q: "What if I'm not happy with the design?", a: "Every package includes revision rounds. We'll work together until you're satisfied. That said, I've never had a client need more than the included revisions — I listen carefully during the consultation and get it right." },
  { q: "Do you work with businesses outside your area?", a: "Absolutely. While I specialize in local businesses in the Philadelphia and South Jersey area, everything I do is remote-friendly. I work with clients anywhere." },
];

const SOCIAL_PROOF = [
  { quote: "Had our site up and running in two days. Looked better than what our last agency spent three months building.", author: "Local Business Owner", biz: "Home Services", rating: 5 },
  { quote: "The 48-hour turnaround sounded too good to be true, but he delivered. Professional, fast, and easy to work with.", author: "Restaurant Owner", biz: "Food & Beverage", rating: 5 },
  { quote: "Finally have a website I'm proud to send clients to. The booking form alone has brought in new business.", author: "Professional Services", biz: "Consulting", rating: 5 },
];

// ═══════════════════════════════════════════════════════════════
// STYLES
// ═══════════════════════════════════════════════════════════════

const CSS = `
@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600;700&display=swap');

:root {
  --bg: #0A0A0B;
  --bg-raised: #111113;
  --bg-card: #161618;
  --bg-hover: #1C1C1F;
  --border: #232326;
  --border-light: #2A2A2E;
  --text: #EDEDEF;
  --text-secondary: #8B8B8E;
  --text-muted: #5C5C60;
  --accent: #E8C872;
  --accent-dim: rgba(232,200,114,0.12);
  --accent-glow: rgba(232,200,114,0.06);
  --green: #4ADE80;
  --green-dim: rgba(74,222,128,0.1);
  --red: #F87171;
  --font-display: 'Instrument Serif', Georgia, serif;
  --font-body: 'Geist', -apple-system, system-ui, sans-serif;
  --ease: cubic-bezier(0.16, 1, 0.3, 1);
  --radius: 10px;
  --radius-lg: 16px;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
html { scroll-behavior: smooth; }
body { font-family: var(--font-body); background: var(--bg); color: var(--text); line-height: 1.6; -webkit-font-smoothing: antialiased; }

/* ANIMATIONS */
@keyframes fadeUp { from { opacity: 0; transform: translateY(24px); } to { opacity: 1; transform: translateY(0); } }
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
@keyframes shimmer { 0% { background-position: -200% 0; } 100% { background-position: 200% 0; } }
@keyframes pulse-dot { 0%, 100% { opacity: 1; } 50% { opacity: 0.4; } }

.anim-up { animation: fadeUp 0.7s var(--ease) both; }
.anim-up-1 { animation-delay: 0.05s; }
.anim-up-2 { animation-delay: 0.1s; }
.anim-up-3 { animation-delay: 0.15s; }
.anim-up-4 { animation-delay: 0.2s; }
.anim-up-5 { animation-delay: 0.25s; }
.anim-up-6 { animation-delay: 0.3s; }

@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after { animation: none !important; transition-duration: 0.01ms !important; }
}

/* LAYOUT */
.container { max-width: 1100px; margin: 0 auto; padding: 0 24px; }
.section { padding: 100px 0; position: relative; }
.section + .section { border-top: 1px solid var(--border); }

/* NAV */
.nav {
  position: sticky; top: 0; z-index: 100;
  background: rgba(10,10,11,0.85); backdrop-filter: blur(16px) saturate(180%);
  border-bottom: 1px solid var(--border); height: 60px;
}
.nav-inner {
  max-width: 1100px; margin: 0 auto; padding: 0 24px;
  display: flex; align-items: center; justify-content: space-between; height: 100%;
}
.nav-logo {
  font-family: var(--font-display); font-size: 20px; color: var(--text);
  text-decoration: none; display: flex; align-items: baseline; gap: 4px;
  cursor: default;
}
.nav-logo em { color: var(--accent); font-style: italic; }
.nav-links { display: flex; gap: 4px; align-items: center; }
.nav-links a {
  color: var(--text-secondary); text-decoration: none; font-size: 13px; font-weight: 500;
  padding: 6px 14px; border-radius: 6px; transition: all 0.2s;
}
.nav-links a:hover { color: var(--text); background: var(--bg-hover); }
.nav-cta {
  background: var(--accent); color: var(--bg); font-weight: 600; font-size: 13px;
  padding: 8px 18px; border-radius: 8px; border: none; cursor: pointer;
  font-family: var(--font-body); transition: all 0.2s;
  text-decoration: none;
}
.nav-cta:hover { filter: brightness(1.1); transform: translateY(-1px); }

@media (max-width: 640px) {
  .nav-links a:not(.nav-cta) { display: none; }
}

/* HERO */
.hero { padding: 120px 0 100px; position: relative; overflow: hidden; }
.hero::before {
  content: ''; position: absolute; top: -200px; left: 50%; transform: translateX(-50%);
  width: 800px; height: 800px; border-radius: 50%;
  background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
  pointer-events: none;
}
.hero-label {
  display: inline-flex; align-items: center; gap: 8px;
  background: var(--accent-dim); color: var(--accent); border: 1px solid rgba(232,200,114,0.15);
  padding: 6px 16px; border-radius: 24px; font-size: 12px; font-weight: 600;
  letter-spacing: 0.06em; text-transform: uppercase; margin-bottom: 28px;
}
.hero-dot { width: 6px; height: 6px; border-radius: 50%; background: var(--green); animation: pulse-dot 2s ease infinite; }
.hero h1 {
  font-family: var(--font-display); font-size: clamp(44px, 7vw, 76px);
  line-height: 1.05; color: var(--text); margin-bottom: 24px;
  letter-spacing: -0.02em; max-width: 800px;
}
.hero h1 em { font-style: italic; color: var(--accent); }
.hero-sub {
  font-size: 18px; line-height: 1.7; color: var(--text-secondary);
  max-width: 560px; margin-bottom: 40px;
}
.hero-ctas { display: flex; gap: 12px; flex-wrap: wrap; align-items: center; }
.btn-primary {
  background: var(--accent); color: var(--bg); font-weight: 600; font-size: 15px;
  padding: 14px 30px; border-radius: var(--radius); border: none; cursor: pointer;
  font-family: var(--font-body); transition: all 0.25s var(--ease);
  text-decoration: none; display: inline-flex; align-items: center; gap: 8px;
}
.btn-primary:hover { filter: brightness(1.08); transform: translateY(-2px); box-shadow: 0 8px 30px rgba(232,200,114,0.2); }
.btn-ghost {
  background: transparent; color: var(--text-secondary); font-weight: 500; font-size: 15px;
  padding: 14px 24px; border-radius: var(--radius); border: 1px solid var(--border);
  cursor: pointer; font-family: var(--font-body); transition: all 0.2s;
  text-decoration: none; display: inline-flex; align-items: center; gap: 8px;
}
.btn-ghost:hover { color: var(--text); border-color: var(--border-light); background: var(--bg-raised); }
.hero-stats {
  display: flex; gap: 40px; margin-top: 56px; padding-top: 32px;
  border-top: 1px solid var(--border);
}
.hero-stat-num { font-family: var(--font-display); font-size: 32px; color: var(--text); }
.hero-stat-label { font-size: 13px; color: var(--text-muted); margin-top: 2px; }

@media (max-width: 600px) {
  .hero { padding: 80px 0 60px; }
  .hero-stats { gap: 24px; }
}

/* SECTION HEADERS */
.section-eyebrow {
  font-size: 11px; text-transform: uppercase; letter-spacing: 0.14em;
  color: var(--accent); font-weight: 600; margin-bottom: 14px;
}
.section-title {
  font-family: var(--font-display); font-size: clamp(32px, 4.5vw, 48px);
  color: var(--text); line-height: 1.1; margin-bottom: 16px; letter-spacing: -0.01em;
}
.section-desc { font-size: 16px; color: var(--text-secondary); line-height: 1.7; max-width: 560px; }

/* PRICING CARDS */
.pricing-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 48px; }
@media (max-width: 800px) { .pricing-grid { grid-template-columns: 1fr; max-width: 420px; } }
.price-card {
  background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg);
  padding: 32px 28px; transition: all 0.3s var(--ease); position: relative; overflow: hidden;
}
.price-card:hover { border-color: var(--border-light); transform: translateY(-4px); box-shadow: 0 12px 40px rgba(0,0,0,0.3); }
.price-card.featured { border-color: var(--accent); background: linear-gradient(180deg, rgba(232,200,114,0.04) 0%, var(--bg-card) 40%); }
.price-card.featured::before {
  content: 'MOST POPULAR'; position: absolute; top: 14px; right: -28px;
  background: var(--accent); color: var(--bg); font-size: 9px; font-weight: 700;
  padding: 4px 36px; transform: rotate(45deg); letter-spacing: 0.08em;
}
.price-name { font-family: var(--font-display); font-size: 24px; color: var(--text); margin-bottom: 4px; }
.price-amount { font-size: 40px; font-weight: 700; color: var(--text); margin: 16px 0 4px; display: flex; align-items: baseline; gap: 2px; }
.price-amount span { font-size: 18px; color: var(--text-muted); font-weight: 400; }
.price-turn { font-size: 12px; color: var(--accent); font-weight: 600; margin-bottom: 16px; letter-spacing: 0.02em; }
.price-desc { font-size: 13px; color: var(--text-secondary); line-height: 1.6; margin-bottom: 20px; padding-bottom: 20px; border-bottom: 1px solid var(--border); }
.price-features { list-style: none; }
.price-features li {
  font-size: 13px; color: var(--text-secondary); padding: 6px 0;
  display: flex; align-items: flex-start; gap: 10px; line-height: 1.5;
}
.price-features li::before { content: '✓'; color: var(--green); font-weight: 700; font-size: 12px; margin-top: 2px; flex-shrink: 0; }
.price-cta {
  width: 100%; padding: 12px; border-radius: 8px; font-weight: 600; font-size: 14px;
  cursor: pointer; font-family: var(--font-body); transition: all 0.2s;
  margin-top: 24px; border: none; text-align: center;
}
.price-card.featured .price-cta { background: var(--accent); color: var(--bg); }
.price-card.featured .price-cta:hover { filter: brightness(1.1); }
.price-card:not(.featured) .price-cta { background: var(--bg-hover); color: var(--text); border: 1px solid var(--border); }
.price-card:not(.featured) .price-cta:hover { background: var(--border); }

/* PORTFOLIO */
.portfolio-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 48px; }
@media (max-width: 700px) { .portfolio-grid { grid-template-columns: 1fr; } }
.folio-card {
  background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg);
  overflow: hidden; transition: all 0.3s var(--ease);
}
.folio-card:hover { border-color: var(--border-light); transform: translateY(-3px); box-shadow: 0 12px 40px rgba(0,0,0,0.25); }
.folio-header {
  padding: 32px 28px 24px; position: relative; overflow: hidden;
}
.folio-header::before {
  content: ''; position: absolute; inset: 0;
  opacity: 0.06; pointer-events: none;
}
.folio-type { font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; font-weight: 600; margin-bottom: 8px; }
.folio-name { font-family: var(--font-display); font-size: 24px; color: var(--text); margin-bottom: 10px; }
.folio-desc { font-size: 13px; color: var(--text-secondary); line-height: 1.65; }
.folio-tags { display: flex; gap: 6px; flex-wrap: wrap; margin-top: 14px; }
.folio-tag {
  font-size: 10px; padding: 3px 10px; border-radius: 4px; font-weight: 600;
  background: var(--bg-hover); color: var(--text-muted); border: 1px solid var(--border);
  letter-spacing: 0.02em;
}
.folio-stats {
  display: flex; border-top: 1px solid var(--border); background: var(--bg-raised);
}
.folio-stat {
  flex: 1; padding: 14px 20px; text-align: center;
  border-right: 1px solid var(--border);
  font-size: 12px; color: var(--text-muted);
}
.folio-stat:last-child { border-right: none; }
.folio-stat strong { display: block; color: var(--text); font-size: 15px; font-weight: 600; margin-bottom: 2px; }

/* PROCESS */
.process-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-top: 48px; }
@media (max-width: 800px) { .process-grid { grid-template-columns: 1fr 1fr; } }
@media (max-width: 500px) { .process-grid { grid-template-columns: 1fr; } }
.process-card {
  background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg);
  padding: 28px 24px; transition: all 0.2s;
}
.process-card:hover { border-color: var(--border-light); }
.process-icon { font-size: 28px; margin-bottom: 16px; }
.process-step { font-size: 11px; color: var(--accent); font-weight: 700; letter-spacing: 0.08em; margin-bottom: 8px; }
.process-title { font-family: var(--font-display); font-size: 20px; color: var(--text); margin-bottom: 8px; }
.process-desc { font-size: 13px; color: var(--text-secondary); line-height: 1.6; }

/* SOCIAL PROOF */
.proof-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 48px; }
@media (max-width: 700px) { .proof-grid { grid-template-columns: 1fr; } }
.proof-card {
  background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg);
  padding: 28px; transition: all 0.2s;
}
.proof-card:hover { border-color: var(--border-light); }
.proof-stars { color: var(--accent); font-size: 14px; letter-spacing: 2px; margin-bottom: 14px; }
.proof-quote { font-size: 14px; color: var(--text-secondary); line-height: 1.7; font-style: italic; margin-bottom: 16px; }
.proof-author { font-size: 13px; font-weight: 600; color: var(--text); }
.proof-biz { font-size: 12px; color: var(--text-muted); }

/* FAQ */
.faq-list { margin-top: 40px; max-width: 700px; }
.faq-item { border-bottom: 1px solid var(--border); }
.faq-q {
  width: 100%; text-align: left; padding: 20px 0; background: none; border: none;
  font-family: var(--font-body); font-size: 15px; font-weight: 500; color: var(--text);
  cursor: pointer; display: flex; justify-content: space-between; align-items: center; gap: 16px;
}
.faq-q:hover { color: var(--accent); }
.faq-arrow { font-size: 16px; color: var(--text-muted); transition: transform 0.3s var(--ease); flex-shrink: 0; }
.faq-arrow.open { transform: rotate(45deg); color: var(--accent); }
.faq-a { padding: 0 0 20px; font-size: 14px; color: var(--text-secondary); line-height: 1.7; max-width: 600px; }

/* CTA SECTION */
.cta-section {
  text-align: center; padding: 100px 24px;
  background: linear-gradient(180deg, var(--bg) 0%, var(--bg-raised) 100%);
  position: relative;
}
.cta-section::before {
  content: ''; position: absolute; top: 0; left: 50%; transform: translateX(-50%);
  width: 600px; height: 400px; border-radius: 50%;
  background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
  pointer-events: none;
}
.cta-section h2 { font-family: var(--font-display); font-size: clamp(36px, 5vw, 56px); color: var(--text); margin-bottom: 16px; position: relative; }
.cta-section h2 em { font-style: italic; color: var(--accent); }
.cta-section p { color: var(--text-secondary); font-size: 16px; margin-bottom: 36px; position: relative; }

/* CONTACT FORM */
.contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 48px; margin-top: 48px; align-items: start; }
@media (max-width: 700px) { .contact-grid { grid-template-columns: 1fr; } }
.form-card {
  background: var(--bg-card); border: 1px solid var(--border); border-radius: var(--radius-lg);
  padding: 32px; 
}
.form-field { margin-bottom: 18px; }
.form-label { display: block; font-size: 12px; font-weight: 600; color: var(--text-secondary); margin-bottom: 6px; text-transform: uppercase; letter-spacing: 0.06em; }
.form-input, .form-select, .form-textarea {
  width: 100%; padding: 12px 14px; border: 1px solid var(--border); border-radius: 8px;
  font-family: var(--font-body); font-size: 14px; color: var(--text);
  background: var(--bg); transition: all 0.2s; outline: none;
}
.form-input:focus, .form-select:focus, .form-textarea:focus { border-color: var(--accent); box-shadow: 0 0 0 3px var(--accent-dim); }
.form-textarea { resize: vertical; min-height: 100px; }
.form-input::placeholder, .form-textarea::placeholder { color: var(--text-muted); }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
.form-submit {
  width: 100%; padding: 14px; background: var(--accent); color: var(--bg);
  border: none; border-radius: 8px; font-weight: 600; font-size: 15px;
  cursor: pointer; font-family: var(--font-body); transition: all 0.2s; margin-top: 8px;
}
.form-submit:hover { filter: brightness(1.1); }
.contact-info h3 { font-family: var(--font-display); font-size: 28px; color: var(--text); margin-bottom: 20px; }
.contact-detail { margin-bottom: 20px; }
.contact-detail-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted); font-weight: 600; margin-bottom: 4px; }
.contact-detail-value { font-size: 16px; color: var(--text); }
.contact-detail-value a { color: var(--accent); text-decoration: none; }

/* FOOTER */
.footer {
  border-top: 1px solid var(--border); padding: 40px 0;
  font-size: 13px; color: var(--text-muted); text-align: center;
}

/* GUARANTEE */
.guarantee-box {
  background: var(--green-dim); border: 1px solid rgba(74,222,128,0.15);
  border-radius: var(--radius-lg); padding: 28px 32px; margin-top: 32px;
  display: flex; align-items: flex-start; gap: 16px;
}
.guarantee-icon { font-size: 28px; flex-shrink: 0; }
.guarantee-title { font-weight: 600; color: var(--green); font-size: 15px; margin-bottom: 4px; }
.guarantee-text { font-size: 13px; color: var(--text-secondary); line-height: 1.6; }
`;

// ═══════════════════════════════════════════════════════════════
// COMPONENTS
// ═══════════════════════════════════════════════════════════════

function FAQ() {
  const [openId, setOpenId] = useState(null);
  return (
    <div className="faq-list">
      {FAQS.map((f, i) => (
        <div key={i} className="faq-item">
          <button className="faq-q" onClick={() => setOpenId(openId === i ? null : i)}>
            {f.q}
            <span className={`faq-arrow ${openId === i ? "open" : ""}`}>+</span>
          </button>
          {openId === i && <div className="faq-a">{f.a}</div>}
        </div>
      ))}
    </div>
  );
}

function ContactForm() {
  const [sent, setSent] = useState(false);
  if (sent) return (
    <div className="form-card" style={{ textAlign: "center", padding: 48 }}>
      <div style={{ fontSize: 48, marginBottom: 16 }}>✓</div>
      <h3 style={{ fontFamily: "var(--font-display)", fontSize: 24, color: "var(--text)", marginBottom: 8 }}>Message Sent</h3>
      <p style={{ color: "var(--text-secondary)", fontSize: 14 }}>I'll get back to you within a few hours.</p>
    </div>
  );
  return (
    <div className="form-card">
      <div className="form-field">
        <label className="form-label">Your Name</label>
        <input className="form-input" placeholder="Jane Smith" />
      </div>
      <div className="form-row">
        <div className="form-field">
          <label className="form-label">Email</label>
          <input className="form-input" type="email" placeholder="jane@business.com" />
        </div>
        <div className="form-field">
          <label className="form-label">Phone</label>
          <input className="form-input" type="tel" placeholder="(555) 000-0000" />
        </div>
      </div>
      <div className="form-field">
        <label className="form-label">Business Type</label>
        <select className="form-select" defaultValue="">
          <option value="" disabled>Select your industry…</option>
          <option>Restaurant / Food Service</option>
          <option>Contractor / Home Services</option>
          <option>Law Firm / Legal</option>
          <option>Real Estate</option>
          <option>Salon / Beauty</option>
          <option>Healthcare / Dental</option>
          <option>Other</option>
        </select>
      </div>
      <div className="form-field">
        <label className="form-label">Tell me about your project</label>
        <textarea className="form-textarea" placeholder="Do you have an existing site? What are your goals? Any specific features you need?" />
      </div>
      <button className="form-submit" onClick={() => setSent(true)}>Send Message</button>
    </div>
  );
}

// ═══════════════════════════════════════════════════════════════
// MAIN APP
// ═══════════════════════════════════════════════════════════════

export default function FreelanceLanding() {
  const scrollTo = (id) => document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <>
      <style>{CSS}</style>

      {/* NAV */}
      <nav className="nav">
        <div className="nav-inner">
          <div className="nav-logo"><em>{ME.bizName.split(" ")[0]}</em>&nbsp;{ME.bizName.split(" ").slice(1).join(" ") || ""}</div>
          <div className="nav-links">
            <a href="#work" onClick={(e) => { e.preventDefault(); scrollTo("work"); }}>Work</a>
            <a href="#pricing" onClick={(e) => { e.preventDefault(); scrollTo("pricing"); }}>Pricing</a>
            <a href="#process" onClick={(e) => { e.preventDefault(); scrollTo("process"); }}>Process</a>
            <a href="#faq" onClick={(e) => { e.preventDefault(); scrollTo("faq"); }}>FAQ</a>
            <a className="nav-cta" href="#contact" onClick={(e) => { e.preventDefault(); scrollTo("contact"); }}>Get Started</a>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="container">
          <div className="hero-label anim-up">
            <span className="hero-dot" />
            Available for new projects
          </div>
          <h1 className="anim-up anim-up-1">
            Professional websites for local businesses — <em>in 48 hours</em>
          </h1>
          <p className="hero-sub anim-up anim-up-2">
            I build fast, beautiful, mobile-ready websites for restaurants, contractors, law firms, and small businesses. Fixed pricing. No surprises. You focus on your business — I handle the rest.
          </p>
          <div className="hero-ctas anim-up anim-up-3">
            <button className="btn-primary" onClick={() => scrollTo("contact")}>Book Free Consultation →</button>
            <button className="btn-ghost" onClick={() => scrollTo("work")}>See My Work</button>
          </div>
          <div className="hero-stats anim-up anim-up-4">
            <div>
              <div className="hero-stat-num">48hr</div>
              <div className="hero-stat-label">Fastest delivery</div>
            </div>
            <div>
              <div className="hero-stat-num">$750</div>
              <div className="hero-stat-label">Starting price</div>
            </div>
            <div>
              <div className="hero-stat-num">100%</div>
              <div className="hero-stat-label">Satisfaction rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* PORTFOLIO */}
      <section className="section" id="work">
        <div className="container">
          <div className="section-eyebrow anim-up">Recent Work</div>
          <h2 className="section-title anim-up anim-up-1">Built to convert, <em style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--accent)" }}>designed to impress</em></h2>
          <p className="section-desc anim-up anim-up-2">Every site is built mobile-first, optimized for speed, and designed to turn visitors into customers.</p>
          <div className="portfolio-grid">
            {PORTFOLIO.map((p, i) => (
              <div key={p.id} className={`folio-card anim-up anim-up-${i + 2}`}>
                <div className="folio-header" style={{ borderBottom: `1px solid var(--border)` }}>
                  <div className="folio-type" style={{ color: p.accent }}>{p.type}</div>
                  <div className="folio-name">{p.name}</div>
                  <div className="folio-desc">{p.desc}</div>
                  <div className="folio-tags">
                    {p.tags.map(t => <span key={t} className="folio-tag">{t}</span>)}
                  </div>
                </div>
                <div className="folio-stats">
                  <div className="folio-stat"><strong>{p.stats.pages}</strong>pages</div>
                  <div className="folio-stat"><strong>{p.stats.days} days</strong>delivered</div>
                  <div className="folio-stat"><strong>{p.stats.features}</strong>highlight</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section className="section" id="pricing">
        <div className="container">
          <div className="section-eyebrow">Pricing</div>
          <h2 className="section-title">Simple, fixed pricing. <em style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--accent)" }}>No hourly billing.</em></h2>
          <p className="section-desc">Pick a package. Know the cost upfront. Get your site built fast.</p>
          <div className="pricing-grid">
            {PACKAGES.map(pkg => (
              <div key={pkg.id} className={`price-card ${pkg.best ? "featured" : ""}`}>
                <div className="price-name">{pkg.name}</div>
                <div className="price-amount">${pkg.price.toLocaleString()}<span> flat</span></div>
                <div className="price-turn">⚡ {pkg.turnaround} delivery</div>
                <div className="price-desc">{pkg.desc}</div>
                <ul className="price-features">
                  {pkg.features.map((f, i) => <li key={i}>{f}</li>)}
                </ul>
                <button className="price-cta" onClick={() => scrollTo("contact")}>Get Started</button>
              </div>
            ))}
          </div>
          <div className="guarantee-box">
            <span className="guarantee-icon">🛡️</span>
            <div>
              <div className="guarantee-title">Satisfaction Guarantee</div>
              <div className="guarantee-text">
                If you're not happy with the design after all revision rounds are complete, I'll refund 100% of your payment. No questions asked. I've never had to use this policy — but it's there because I stand behind the work.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="section" id="process">
        <div className="container">
          <div className="section-eyebrow">How It Works</div>
          <h2 className="section-title">Four steps to a <em style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--accent)" }}>site you're proud of</em></h2>
          <p className="section-desc">No jargon, no long timelines, no mystery about what happens next.</p>
          <div className="process-grid">
            {PROCESS.map(p => (
              <div key={p.step} className="process-card">
                <div className="process-icon">{p.icon}</div>
                <div className="process-step">Step {p.step}</div>
                <div className="process-title">{p.title}</div>
                <div className="process-desc">{p.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="section" id="reviews">
        <div className="container">
          <div className="section-eyebrow">What Clients Say</div>
          <h2 className="section-title">Real feedback from <em style={{ fontFamily: "var(--font-display)", fontStyle: "italic", color: "var(--accent)" }}>real businesses</em></h2>
          <div className="proof-grid">
            {SOCIAL_PROOF.map((r, i) => (
              <div key={i} className="proof-card">
                <div className="proof-stars">{"★".repeat(r.rating)}</div>
                <p className="proof-quote">"{r.quote}"</p>
                <div className="proof-author">{r.author}</div>
                <div className="proof-biz">{r.biz}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="section" id="faq">
        <div className="container">
          <div className="section-eyebrow">FAQ</div>
          <h2 className="section-title">Common questions</h2>
          <FAQ />
        </div>
      </section>

      {/* CONTACT */}
      <section className="section" id="contact">
        <div className="container">
          <div className="section-eyebrow">Get Started</div>
          <h2 className="section-title">Let's build your site</h2>
          <p className="section-desc">Fill out the form and I'll get back to you within a few hours with a custom recommendation.</p>
          <div className="contact-grid">
            <ContactForm />
            <div className="contact-info">
              <h3>Or reach out directly</h3>
              <div className="contact-detail">
                <div className="contact-detail-label">Email</div>
                <div className="contact-detail-value"><a href={`mailto:${ME.email}`}>{ME.email}</a></div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-label">Phone</div>
                <div className="contact-detail-value"><a href={ME.phoneTel}>{ME.phone}</a></div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-label">Based In</div>
                <div className="contact-detail-value">{ME.location}</div>
              </div>
              <div className="contact-detail">
                <div className="contact-detail-label">Response Time</div>
                <div className="contact-detail-value" style={{ color: "var(--green)" }}>Usually within 2–4 hours</div>
              </div>
              <div className="guarantee-box" style={{ marginTop: 24 }}>
                <span className="guarantee-icon">💬</span>
                <div>
                  <div className="guarantee-title" style={{ color: "var(--accent)" }}>Free 15-Minute Consultation</div>
                  <div className="guarantee-text">
                    Every project starts with a free call. We'll discuss your business, your goals, and what kind of site makes sense. No pressure, no commitment.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-section">
        <h2>Ready to get <em>started?</em></h2>
        <p>Your new site could be live by this time next week.</p>
        <button className="btn-primary" onClick={() => scrollTo("contact")}>Book Free Consultation →</button>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          © {new Date().getFullYear()} {ME.bizName}. All rights reserved.
        </div>
      </footer>
    </>
  );
}
