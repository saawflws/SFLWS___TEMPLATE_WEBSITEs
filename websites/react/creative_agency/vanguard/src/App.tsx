import { useState } from 'react';
import { ArrowUpRight, Award, Crown, X } from 'lucide-react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = ['Projects', 'Studio', 'Offerings', 'Inquire'];
  const stats = [
    { value: '250+', label: 'Brands Transformed' },
    { value: '95%', label: 'Client Retention' },
    { value: '10+', label: 'Years in the Game' },
  ];

  const menuItems = [
    { label: 'Projects', href: '#projects' },
    { label: 'Studio', href: '#studio' },
    { label: 'Offerings', href: '#offerings' },
    { label: 'Inquire', href: '#inquire' },
  ];

  return (
    <>
      <video
        className="fixed inset-0 -z-10 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260606_154941_df1a96e1-a06f-450c-bd02-d863414cc1a0.mp4"
      />

      <nav className="fixed top-0 left-0 right-0 z-40 px-6 sm:px-10 lg:px-16 py-5 lg:py-7">
        <div className="flex items-center justify-between">
          <a href="#" className="font-podium font-bold uppercase text-white text-2xl sm:text-3xl tracking-wider">
            VANGUARD
          </a>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <a
                key={link}
                href={`#${link.toLowerCase()}`}
                className="font-inter text-sm text-white/80 tracking-widest uppercase transition-colors hover:text-white"
              >
                {link}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <a
              href="#contact"
              className="hidden md:inline-flex items-center gap-2 border border-white/30 hover:border-white/60 px-6 py-3 text-xs tracking-widest uppercase transition-all hover:bg-white/10"
            >
              GET IN TOUCH
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>

            <button
              className="md:hidden p-2"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
            >
              <div className="w-6 h-0.5 bg-white" />
              <div className="w-6 h-0.5 bg-white mt-1.5" />
              <div className="w-4 h-0.5 bg-white mt-1.5" />
            </button>
          </div>
        </div>
      </nav>

      {menuOpen && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm flex flex-col"
          style={{
            opacity: menuOpen ? 1 : 0,
            visibility: menuOpen ? 'visible' : 'hidden',
            transition: 'all 0.5s ease',
          }}
        >
          <div className="flex items-center justify-between px-6 sm:px-10 lg:px-16 py-5 lg:py-7">
            <span className="font-podium font-bold uppercase text-white text-2xl sm:text-3xl tracking-wider">
              VANGUARD
            </span>
            <button
              onClick={() => setMenuOpen(false)}
              className="p-2"
              aria-label="Close menu"
            >
              <X className="w-6 h-6 text-white" />
            </button>
          </div>

          <div className="flex-1 flex flex-col items-center justify-center px-6">
            <nav className="flex flex-col items-center gap-6 mb-12">
              {menuItems.map((item, i) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  className="font-podium text-4xl sm:text-5xl text-white uppercase"
                  style={{
                    opacity: menuOpen ? 1 : 0,
                    transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                    transition: `all 0.8s ease-out ${i * 80 + 100}ms`,
                  }}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 px-6 py-3 text-xs tracking-widest uppercase transition-all hover:bg-white/10"
              style={{
                opacity: menuOpen ? 1 : 0,
                transform: menuOpen ? 'translateY(0)' : 'translateY(20px)',
                transition: `all 0.8s ease-out ${menuItems.length * 80 + 100}ms`,
              }}
            >
              GET IN TOUCH
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}

      <main className="relative min-h-screen flex items-center px-6 sm:px-10 lg:px-16 pt-20 pb-16">
        <div className="w-full max-w-5xl">
          <div className="animate-fade-up mb-6 lg:mb-8 flex items-center gap-2">
            <Crown className="w-4 h-4 text-white/70" />
            <span className="font-inter text-white/70 text-xs sm:text-sm tracking-[0.3em] uppercase">
              World-Class Digital Collective
            </span>
          </div>

          <h1 className="font-podium text-white uppercase leading-[0.92] tracking-tight animate-fade-up-delay-1">
            <span className="block text-[clamp(2.8rem,8vw,7rem)]">Design.</span>
            <span className="block text-[clamp(2.8rem,8vw,7rem)]">Disrupt.</span>
            <span className="block text-[clamp(2.8rem,8vw,7rem)]">Conquer.</span>
          </h1>

          <p className="font-inter text-white/70 text-sm sm:text-base leading-relaxed max-w-md animate-fade-up-delay-2 mt-6 lg:mt-8">
            We build fierce brand identities<br />
            that don&apos;t just turn heads &mdash; <span className="text-white font-semibold">they lead.</span>
          </p>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 animate-fade-up-delay-3 mt-8 lg:mt-10">
            <a
              href="#work"
              className="group inline-flex items-center gap-2 bg-black hover:bg-neutral-900 px-5 sm:px-7 py-3 sm:py-4 text-[11px] sm:text-xs tracking-widest uppercase transition-colors"
            >
              SEE OUR WORK
              <ArrowUpRight
                className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <div className="hidden sm:flex items-center gap-3">
              <Award className="w-8 h-8 text-white/50" />
              <div className="text-white/60 text-xs tracking-wider uppercase leading-tight">
                <span className="block">Top-Rated</span>
                <span className="block">Brand Studio</span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-6 sm:gap-12 lg:gap-16 animate-fade-up-delay-4 mt-8 sm:mt-10 lg:mt-14">
            {stats.map((stat, i) => (
              <div key={stat.label}>
                <div className="font-inter text-white text-2xl sm:text-4xl lg:text-5xl font-bold tracking-tight">
                  {stat.value}
                </div>
                <div className="text-white/50 text-[9px] sm:text-xs tracking-widest uppercase mt-1">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </>
  );
}

export default App;