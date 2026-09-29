'use client';

import { useState } from 'react';
import {
  Palette,
  Wrench,
  Hammer,
  Building2,
  Phone,
  MessageCircle,
  Menu,
  X,
  ArrowRight,
  CheckCircle2,
  MapPin,
  Mail,
  ShieldCheck,
  Sparkles,
  Compass,
  Layers,
  SlidersHorizontal,
} from 'lucide-react';

const categories = [
  {
    icon: Palette,
    title: 'Paints & Colours',
    description:
      'Interior and exterior paints, primers, putty, textures and luxury colour solutions.',
  },
  {
    icon: Hammer,
    title: 'Hardware',
    description:
      'Architectural hardware products, high-grade fittings, heavy-duty fasteners and fittings.',
  },
  {
    icon: Wrench,
    title: 'Tools & Equipment',
    description:
      'Precision hand tools, advanced power equipment and safety gear for professionals and DIYers.',
  },
  {
    icon: Building2,
    title: 'Building Materials',
    description:
      'Reliable structural products and finishing materials for modern construction and renovation.',
  },
];

const products = [
  {
    name: 'Aura Premium Wall Paints',
    category: 'PAINTS & FINISHES',
    tagline: 'Flawless finish, rich sheen & long-lasting durability',
    icon: Palette,
  },
  {
    name: 'Architectural Hardware',
    category: 'HARDWARE & FITTINGS',
    tagline: 'Sleek aesthetics engineered for secure performance',
    icon: Hammer,
  },
  {
    name: 'Pro-Grade Power Tools',
    category: 'EQUIPMENT',
    tagline: 'Maximum torque & ergonomic design for elite tradesmen',
    icon: Wrench,
  },
];

const benefits = [
  'Uncompromising Quality Standards',
  'Transparent & Competitive Pricing',
  'Comprehensive Architectural Catalog',
  'Expert Technical Assistance',
  'Trusted Industry Reputation',
  'Instant Stock Availability & Delivery',
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-amber-500 selection:text-slate-950 font-sans">
      {/* LUXURY TOP BAR */}
      <div className="hidden bg-gradient-to-r from-amber-600 via-amber-700 to-amber-900 text-amber-50 md:block">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-2.5 text-xs font-medium tracking-wide lg:px-8">
          <div className="flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-amber-200 animate-pulse" />
            <span>Excellence in Architectural Hardware & Premium Finishes Since Inception</span>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-amber-200" /> Authenticity Guaranteed
            </span>
            <span className="flex items-center gap-1.5">
              <Compass className="w-3.5 h-3.5 text-amber-200" /> Expert Consultation Available
            </span>
          </div>
        </div>
      </div>

      {/* REFINED GLASS NAVBAR */}
      <header className="sticky top-0 z-50 border-b border-slate-800/80 bg-slate-950/80 backdrop-blur-xl">
        <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6 lg:px-8">
          {/* LUXURY LOGO */}
          <a href="#" className="flex items-center gap-3.5 group">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 text-xl font-black text-slate-950 shadow-lg shadow-amber-500/10 group-hover:scale-105 transition-transform duration-300">
              B
            </div>
            <div>
              <h1 className="text-xl font-black tracking-widest text-white">BHAWANI</h1>
              <p className="-mt-1 text-[10px] font-bold tracking-[0.4em] text-amber-500">SPACE</p>
            </div>
          </a>

          {/* DESKTOP NAV */}
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-300 lg:flex">
            <a href="#home" className="transition hover:text-amber-400">
              Home
            </a>
            <a href="#products" className="transition hover:text-amber-400">
              Products
            </a>
            <a href="#categories" className="transition hover:text-amber-400">
              Categories
            </a>
            <a href="#about" className="transition hover:text-amber-400">
              About Us
            </a>
            <a href="#contact" className="transition hover:text-amber-400">
              Contact
            </a>
          </nav>

          {/* ACTION BUTTONS */}
          <div className="hidden items-center gap-3 sm:flex">
            <a
              href="tel:+919999999999"
              className="hidden rounded-xl border border-slate-800 bg-slate-900/50 px-4 py-2.5 text-sm font-semibold text-slate-300 transition hover:border-amber-500/50 hover:text-amber-400 md:flex items-center gap-2"
            >
              <Phone className="w-4 h-4 text-amber-500" />
              <span>Call Us</span>
            </a>

            <a
              href="#contact"
              className="rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 px-5 py-2.5 text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/20 transition hover:from-amber-400 hover:to-amber-500 active:scale-95"
            >
              Enquire Now
            </a>
          </div>

          {/* MOBILE MENU TRIGGER */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-800 bg-slate-900 text-slate-200 lg:hidden"
            aria-label="Toggle menu"
          >
            {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

        {/* MOBILE MENU DROPDOWN */}
        {menuOpen && (
          <div className="border-t border-slate-800 bg-slate-950/95 backdrop-blur-2xl px-6 py-6 lg:hidden animate-in fade-in slide-in-from-top-2 duration-200">
            <nav className="flex flex-col gap-4 text-base font-medium text-slate-200">
              <a href="#home" onClick={() => setMenuOpen(false)} className="hover:text-amber-400">
                Home
              </a>
              <a
                href="#products"
                onClick={() => setMenuOpen(false)}
                className="hover:text-amber-400"
              >
                Products
              </a>
              <a
                href="#categories"
                onClick={() => setMenuOpen(false)}
                className="hover:text-amber-400"
              >
                Categories
              </a>
              <a href="#about" onClick={() => setMenuOpen(false)} className="hover:text-amber-400">
                About Us
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="hover:text-amber-400"
              >
                Contact
              </a>
            </nav>
            <div className="mt-6 pt-6 border-t border-slate-800 flex flex-col gap-3">
              <a
                href="tel:+919999999999"
                className="flex items-center justify-center gap-2 rounded-xl border border-slate-800 py-3 text-sm font-semibold text-slate-200"
              >
                <Phone className="w-4 h-4 text-amber-500" /> Call Now
              </a>
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="flex items-center justify-center rounded-xl bg-amber-500 py-3 text-sm font-bold text-slate-950"
              >
                Enquire Now
              </a>
            </div>
          </div>
        )}
      </header>

      {/* HERO SECTION */}
      <section id="home" className="relative overflow-hidden bg-slate-950 py-24 lg:py-32">
        <div className="absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full bg-amber-500/10 blur-[120px] pointer-events-none" />
        <div className="absolute -bottom-40 -left-40 h-[500px] w-[500px] rounded-full bg-blue-500/5 blur-[120px] pointer-events-none" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-amber-500/20 bg-amber-500/10 px-4 py-2 text-xs font-bold uppercase tracking-widest text-amber-400">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Architectural Hardware • Premium Paints • Heavy Tools</span>
            </div>

            <h2 className="text-4xl font-black tracking-tight leading-[1.08] sm:text-6xl lg:text-7xl">
              Build Better. <br />
              <span className="bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 bg-clip-text text-transparent">
                Paint Elegance.
              </span>{' '}
              <br />
              Live Inspired.
            </h2>

            <p className="mt-6 text-base leading-relaxed text-slate-400 sm:text-lg max-w-xl">
              Welcome to Bhawani Space — your ultimate destination for curated architectural
              hardware, elite coatings, and industrial-grade construction supplies designed for
              lasting luxury.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#products"
                className="group inline-flex items-center gap-2 rounded-xl bg-amber-500 px-7 py-4 text-sm font-bold text-slate-950 shadow-xl shadow-amber-500/15 transition hover:bg-amber-400 active:scale-95"
              >
                <span>Explore Catalog</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-800 bg-slate-900/40 px-7 py-4 text-sm font-semibold text-slate-200 transition hover:border-slate-700 hover:bg-slate-900"
              >
                Visit Boutique Store
              </a>
            </div>

            {/* TRUST MARKERS */}
            <div className="mt-12 grid grid-cols-3 gap-6 border-t border-slate-800/80 pt-8 text-xs font-medium text-slate-400">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Verified Quality</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Expert Guidance</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-amber-500 shrink-0" />
                <span>Trusted Inventory</span>
              </div>
            </div>
          </div>

          {/* VISUAL SHOWCASE */}
          <div className="relative hidden lg:block h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-tr from-amber-500/10 via-transparent to-transparent rounded-3xl border border-slate-800/80 p-8 flex flex-col justify-between overflow-hidden shadow-2xl backdrop-blur-sm">
              <div className="flex justify-between items-start">
                <div className="p-3 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-amber-400">
                  <Palette className="w-8 h-8" />
                </div>
                <span className="text-xs tracking-widest text-slate-500 font-mono uppercase">
                  EST. BHAWANI
                </span>
              </div>
              <div className="space-y-3">
                <div className="inline-block px-3 py-1 rounded-lg bg-amber-500/10 text-amber-400 text-xs font-semibold">
                  Featured Collection
                </div>
                <h3 className="text-3xl font-black text-white">
                  Signature Palette & Hardware Suite
                </h3>
                <p className="text-sm text-slate-400">
                  Engineered to elevate modern commercial and residential spaces with absolute
                  structural integrity.
                </p>
              </div>
              <div className="flex items-center justify-between pt-6 border-t border-slate-800/60 text-xs text-slate-400">
                <span className="flex items-center gap-1.5">
                  <Layers className="w-4 h-4 text-amber-500" /> Multi-Layer Protection
                </span>
                <span className="font-mono text-amber-400">SERIES 01</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORY ICON STRIP */}
      <section className="border-y border-slate-800/80 bg-slate-900/40 backdrop-blur">
        <div className="mx-auto grid max-w-7xl grid-cols-2 divide-x divide-slate-800/80 md:grid-cols-4">
          {categories.map(({ title, icon: Icon }) => (
            <a
              href="#categories"
              key={title}
              className="group flex items-center gap-4 px-6 py-6 transition hover:bg-slate-800/30"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 group-hover:bg-amber-500 group-hover:text-slate-950 transition-colors">
                <Icon className="w-6 h-6" />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-200 group-hover:text-amber-400 transition-colors">
                  {title}
                </p>
                <p className="mt-0.5 text-xs text-slate-400 flex items-center gap-1">
                  Explore{' '}
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </p>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* CATEGORIES GRID */}
      <section id="categories" className="bg-slate-950 py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-500">
              Curated Divisions
            </p>
            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Designed for your <span className="text-amber-400">masterpiece.</span>
            </h2>
            <p className="mt-4 text-base text-slate-400">
              From sophisticated foundational paints to high-tolerance architectural hardware, our
              catalogue meets rigorous structural and aesthetic requirements.
            </p>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {categories.map((category) => {
              const IconComponent = category.icon;
              return (
                <div
                  key={category.title}
                  className="group relative rounded-2xl border border-slate-800/80 bg-slate-900/30 p-8 transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/40 hover:bg-slate-900/80 hover:shadow-2xl hover:shadow-amber-500/5"
                >
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-amber-500/10 text-amber-400 transition-colors group-hover:bg-amber-500 group-hover:text-slate-950">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <h3 className="mt-6 text-xl font-bold text-white tracking-wide">
                    {category.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-slate-400">
                    {category.description}
                  </p>

                  <a
                    href="#products"
                    className="mt-6 inline-flex items-center gap-1.5 text-xs font-bold text-amber-400 tracking-wider uppercase group-hover:text-amber-300"
                  >
                    <span>View Specifications</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* PRODUCTS SHOWCASE */}
      <section
        id="products"
        className="bg-slate-900/20 py-24 lg:py-32 border-t border-slate-800/80"
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-500">
                Flagship Lineup
              </p>
              <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
                Excellence you can verify.
              </h2>
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-sm font-semibold text-amber-400 hover:text-amber-300 transition-colors"
            >
              <span>Check Specific Stock Availability</span>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {products.map((product) => {
              const IconComponent = product.icon;
              return (
                <div
                  key={product.name}
                  className="group overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/60 transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/50 hover:shadow-2xl"
                >
                  <div className="flex h-64 items-center justify-center bg-gradient-to-b from-slate-900 to-slate-950 border-b border-slate-800/60 relative overflow-hidden">
                    <div className="absolute inset-0 bg-amber-500/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                    <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 text-amber-400 shadow-xl group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-16 h-16" />
                    </div>
                  </div>

                  <div className="p-8">
                    <p className="text-[11px] font-bold tracking-[0.25em] text-amber-500 uppercase">
                      {product.category}
                    </p>

                    <h3 className="mt-2 text-2xl font-black text-white">{product.name}</h3>

                    <p className="mt-3 text-sm text-slate-400 leading-relaxed">{product.tagline}</p>

                    <a
                      href="#contact"
                      className="mt-8 flex w-full items-center justify-center gap-2 rounded-xl bg-slate-800 hover:bg-amber-500 hover:text-slate-950 py-3.5 text-sm font-bold text-slate-200 transition-all duration-200 shadow-sm"
                    >
                      <span>Enquire Availability</span>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section id="about" className="bg-slate-950 py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-96 h-96 bg-amber-500/5 rounded-full blur-[100px] pointer-events-none" />

        <div className="mx-auto grid max-w-7xl gap-16 px-6 lg:grid-cols-2 lg:px-8 items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-500">
              The Bhawani Space Standard
            </p>
            <h2 className="mt-4 text-4xl font-black leading-tight sm:text-5xl lg:text-6xl text-white">
              Your vision demands <br />
              <span className="bg-gradient-to-r from-amber-400 to-amber-600 bg-clip-text text-transparent">
                uncompromising quality.
              </span>
            </h2>
          </div>

          <div className="space-y-6 lg:pt-4">
            <p className="text-lg leading-relaxed text-slate-300">
              Bhawani Space stands at the intersection of robust utility and refined aesthetics. We
              provide top-tier hardware solutions and premier paint lines built to withstand time
              and elements.
            </p>

            <p className="text-base leading-relaxed text-slate-400">
              Whether executing large architectural builds, high-end residential transformations, or
              localized renovations, our experts streamline selection and procurement with absolute
              clarity.
            </p>

            <div className="pt-2">
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl bg-amber-500 px-7 py-4 text-sm font-bold text-slate-950 shadow-lg shadow-amber-500/10 transition hover:bg-amber-400 active:scale-95"
              >
                <span>Consult Our Specialists</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-slate-900/30 py-24 lg:py-32 border-t border-slate-800/80">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-500">
              Core Pillars
            </p>
            <h2 className="mt-3 text-4xl font-black sm:text-5xl text-white">
              Why professionals choose Bhawani Space.
            </h2>
          </div>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {benefits.map((benefit, index) => (
              <div
                key={benefit}
                className="flex items-start gap-5 rounded-2xl border border-slate-800/80 bg-slate-900/60 p-7 shadow-sm transition hover:border-amber-500/40"
              >
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-amber-500/10 font-black text-amber-400 text-base font-mono">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div>
                  <p className="font-bold text-white text-base">{benefit}</p>
                  <p className="mt-1.5 text-xs text-slate-400 leading-relaxed">
                    Designed around efficiency, reliability, and long-term asset value.
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT CTA */}
      <section
        id="contact"
        className="relative bg-gradient-to-r from-amber-600 via-amber-700 to-amber-900 py-24 text-slate-950 overflow-hidden"
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.15),transparent)] pointer-events-none" />

        <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-10 px-6 lg:flex-row lg:items-center lg:px-8">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.3em] text-amber-950/80">
              Initiate Project Consultation
            </p>

            <h2 className="mt-3 text-4xl font-black sm:text-5xl tracking-tight text-white">
              Let's secure the right material for your project.
            </h2>

            <p className="mt-4 max-w-2xl text-amber-100/90 text-base leading-relaxed">
              Connect directly with Bhawani Space for bulk orders, price quotes, custom paint
              matching, and architectural fittings guidance.
            </p>
          </div>

          <div className="flex flex-wrap gap-4 shrink-0">
            <a
              href="tel:+919999999999"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-950 px-8 py-4 text-sm font-black text-white shadow-xl transition hover:bg-slate-900 active:scale-95"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>Call Now</span>
            </a>

            <a
              href="https://wa.me/919999999999"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-950/20 bg-amber-500/20 px-8 py-4 text-sm font-bold text-slate-950 transition hover:bg-amber-500/30 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 text-slate-950" />
              <span>WhatsApp Us</span>
            </a>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-slate-950 py-16 text-slate-400 border-t border-slate-800/80">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 md:grid-cols-3">
            <div>
              <div className="flex items-center gap-3.5">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-amber-500 font-black text-slate-950">
                  B
                </div>
                <div>
                  <p className="font-black tracking-widest text-white">BHAWANI</p>
                  <p className="text-[9px] font-bold tracking-[0.35em] text-amber-500">SPACE</p>
                </div>
              </div>

              <p className="mt-6 max-w-sm text-sm leading-relaxed text-slate-400">
                Premium hardware, exquisite paints, robust tools, and structural building supplies
                built for the demanding modern builder.
              </p>
            </div>

            <div>
              <h3 className="font-bold text-white text-sm uppercase tracking-wider">
                Quick Navigation
              </h3>

              <div className="mt-5 flex flex-col gap-3 text-sm">
                <a href="#home" className="hover:text-amber-400 transition-colors">
                  Home
                </a>
                <a href="#products" className="hover:text-amber-400 transition-colors">
                  Products
                </a>
                <a href="#categories" className="hover:text-amber-400 transition-colors">
                  Categories
                </a>
                <a href="#about" className="hover:text-amber-400 transition-colors">
                  About Us
                </a>
                <a href="#contact" className="hover:text-amber-400 transition-colors">
                  Contact
                </a>
              </div>
            </div>

            <div>
              <h3 className="font-bold text-white text-sm uppercase tracking-wider">
                Store Headquarters
              </h3>

              <div className="mt-5 space-y-3.5 text-sm">
                <p className="flex items-center gap-2.5">
                  <MapPin className="w-4 h-4 text-amber-500 shrink-0" /> Your Boutique Store Address
                </p>
                <p className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-amber-500 shrink-0" /> +91 99999 99999
                </p>
                <p className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-amber-500 shrink-0" /> info@bhawanispace.com
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 border-t border-slate-900 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
            <p>© 2026 Bhawani Space. All rights reserved.</p>
            <div className="flex gap-6">
              <span className="hover:text-slate-400 cursor-pointer">Privacy Policy</span>
              <span className="hover:text-slate-400 cursor-pointer">Terms of Service</span>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
