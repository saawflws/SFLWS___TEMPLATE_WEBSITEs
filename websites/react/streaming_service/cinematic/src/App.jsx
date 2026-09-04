import React, { useState } from 'react';
import {
  Star,
  Clock,
  Calendar,
  Play,
  ChevronLeft,
  ChevronRight,
  Search,
  User,
  Menu,
  X,
  Volume2,
  VolumeX,
  Info
} from 'lucide-react';

const NAV_LINKS = [
  { name: 'Movies', href: '#movies' },
  { name: 'TV Series', href: '#tv-series' },
  { name: "Editor's Pick", href: '#editors-pick' },
  { name: 'Interviews', href: '#interviews' },
  { name: 'User Reviews', href: '#reviews' },
];

const SLIDES = [
  {
    id: 1,
    rating: '8.7/10 IMDB',
    duration: '132 min',
    date: 'April, 2025',
    title: 'Step Through. Work Smarter.',
    description: 'A voyage through forgotten realms, where past and future intertwine.',
  },
  {
    id: 2,
    rating: '9.3/10 IMDB',
    duration: '154 min',
    date: 'Summer, 2025',
    title: 'Echoes of the Cosmos',
    description: 'In the silence of deep space, a single signal changes the fate of human civilization forever.',
  },
  {
    id: 3,
    rating: '8.9/10 IMDB',
    duration: '118 min',
    date: 'Autumn, 2025',
    title: 'The Silent Horizon',
    description: 'Amidst shifting shadows and synthetic dreams, humanity searches for its lost origin.',
  },
];

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isTrailerModalOpen, setIsTrailerModalOpen] = useState(false);
  const [isLearnMoreOpen, setIsLearnMoreOpen] = useState(false);

  const currentSlide = SLIDES[currentSlideIndex];

  const handleNextSlide = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % SLIDES.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + SLIDES.length) % SLIDES.length);
  };

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-black text-white font-sans flex flex-col select-none">
      {/* 1. BACKGROUND VIDEO (Fixed, z-0, autoplay, loop, muted, object-cover) */}
      <video
        autoPlay
        loop
        muted={isMuted}
        playsInline
        className="fixed inset-0 w-full h-full object-cover z-0 pointer-events-none"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260406_094145_4a271a6c-3869-4f1c-8aa7-aeb0cb227994.mp4"
      />

      {/* 2. BOTTOM BLUR OVERLAY (No gradient darkening, only backdrop-blur-xl with mask) */}
      <div className="fixed inset-0 backdrop-blur-xl pointer-events-none z-[1] bottom-blur-overlay" />

      {/* Audio Mute/Unmute Toggle (Subtle utility control at top right overlay) */}
      <button
        type="button"
        onClick={() => setIsMuted(!isMuted)}
        title={isMuted ? "Unmute audio" : "Mute audio"}
        className="fixed bottom-6 right-6 z-30 hidden md:flex items-center justify-center w-10 h-10 rounded-full liquid-glass text-white/70 hover:text-white transition-all duration-300 cursor-pointer"
      >
        {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
      </button>

      {/* 3. NAVBAR (z-50, relative positioned) */}
      <header className="relative z-50 flex items-center justify-between px-4 sm:px-6 md:px-12 py-4 md:py-6 w-full">
        {/* Left: Text Logo */}
        <div
          className="h-8 md:h-10 flex items-center animate-blur-fade-up"
          style={{ animationDelay: '0ms' }}
        >
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-xl md:text-2xl font-bold tracking-[0.2em] text-white group-hover:text-gray-200 transition-colors">
              CINEMATIC
            </span>
          </a>
        </div>

        {/* Center: Desktop Navigation Links (lg and up) */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-white hover:text-gray-300 transition-colors animate-blur-fade-up"
              style={{ animationDelay: `${100 + idx * 50}ms` }}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Right: Search, Profile & Mobile Hamburger */}
        <div className="flex items-center gap-3">
          {/* Search Button (sm and up) */}
          <button
            type="button"
            className="hidden sm:flex items-center gap-2 rounded-full liquid-glass px-4 md:px-6 py-2 text-sm font-medium text-white hover:bg-white/10 transition-all duration-300 cursor-pointer animate-blur-fade-up active:scale-95"
            style={{ animationDelay: '350ms' }}
            onClick={() => setIsSearchOpen(true)}
          >
            <Search size={18} className="text-white" />
            <span>Search</span>
          </button>

          {/* User Profile Button (sm and up) */}
          <button
            type="button"
            aria-label="User Profile"
            className="hidden sm:flex items-center justify-center w-10 h-10 rounded-full liquid-glass text-white hover:bg-white/10 transition-all duration-300 cursor-pointer animate-blur-fade-up active:scale-95"
            style={{ animationDelay: '400ms' }}
            onClick={() => setIsProfileOpen(true)}
          >
            <User size={18} className="text-white" />
          </button>

          {/* Hamburger Menu Button (below lg) */}
          <button
            type="button"
            aria-label="Toggle menu"
            className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full liquid-glass transition-all duration-300 cursor-pointer animate-blur-fade-up z-50 active:scale-95"
            style={{ animationDelay: '350ms' }}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative w-[18px] h-[18px] flex items-center justify-center">
              <Menu
                size={18}
                className={`absolute inset-0 transition-all duration-500 ease-out ${
                  isMobileMenuOpen
                    ? 'rotate-180 opacity-0 scale-50'
                    : 'rotate-0 opacity-100 scale-100'
                }`}
              />
              <X
                size={18}
                className={`absolute inset-0 transition-all duration-500 ease-out ${
                  isMobileMenuOpen
                    ? 'rotate-0 opacity-100 scale-100'
                    : '-rotate-180 opacity-0 scale-50'
                }`}
              />
            </div>
          </button>
        </div>
      </header>

      {/* 4. MOBILE MENU DROPDOWN (below lg breakpoint) */}
      <div
        className={`absolute left-0 right-0 top-[72px] md:top-[88px] z-40 lg:hidden bg-gray-900/95 backdrop-blur-lg border-t border-b border-gray-800 shadow-2xl px-4 sm:px-6 py-4 transition-all duration-500 ease-out ${
          isMobileMenuOpen
            ? 'translate-y-0 opacity-100 pointer-events-auto'
            : '-translate-y-4 opacity-0 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-1">
          {NAV_LINKS.map((link, idx) => (
            <a
              key={link.name}
              href={link.href}
              className={`py-3 px-3 rounded-lg text-sm font-medium text-white/90 hover:bg-gray-800/50 hover:text-white transition-all duration-300 transform ${
                isMobileMenuOpen
                  ? 'translate-x-0 opacity-100'
                  : '-translate-x-4 opacity-0'
              }`}
              style={{
                transitionDelay: isMobileMenuOpen ? `${idx * 50}ms` : '0ms',
              }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Below sm search/profile buttons */}
        <div className="sm:hidden border-t border-gray-800/80 pt-4 mt-3 flex flex-col gap-2.5">
          <button
            type="button"
            className="flex items-center justify-center gap-2 w-full rounded-full liquid-glass py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-all cursor-pointer"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsSearchOpen(true);
            }}
          >
            <Search size={18} className="text-white" />
            <span>Search Catalog</span>
          </button>
          <button
            type="button"
            className="flex items-center justify-center gap-2 w-full rounded-full liquid-glass py-2.5 text-sm font-medium text-white hover:bg-white/10 transition-all cursor-pointer"
            onClick={() => {
              setIsMobileMenuOpen(false);
              setIsProfileOpen(true);
            }}
          >
            <User size={18} className="text-white" />
            <span>User Profile</span>
          </button>
        </div>
      </div>

      {/* 5. HERO CONTENT (bottom of viewport, flex-1 flex flex-col justify-end) */}
      <main className="flex-1 flex flex-col justify-end px-4 sm:px-6 md:px-12 pb-8 md:pb-16 relative z-10 w-full pointer-events-auto">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-8 w-full">
          {/* Left Side: Metadata, Title, Description, CTAs */}
          <div className="flex-1 max-w-4xl">
            {/* Metadata Row (blur-fade-up at 300ms) */}
            <div
              key={`meta-${currentSlide.id}`}
              className="flex flex-wrap items-center gap-3 sm:gap-6 mb-6 md:mb-8 text-xs sm:text-sm animate-blur-fade-up"
              style={{ animationDelay: '300ms' }}
            >
              <div className="flex items-center gap-1.5 text-white">
                <Star
                  size={16}
                  className="w-4 h-4 sm:w-5 sm:h-5 fill-white text-white"
                />
                <span className="font-medium">{currentSlide.rating}</span>
              </div>

              <div className="w-1 h-1 rounded-full bg-white/40" />

              <div className="flex items-center gap-1.5 text-gray-300">
                <Clock size={16} className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{currentSlide.duration}</span>
              </div>

              <div className="w-1 h-1 rounded-full bg-white/40" />

              <div className="flex items-center gap-1.5 text-gray-300">
                <Calendar size={16} className="w-4 h-4 sm:w-5 sm:h-5" />
                <span>{currentSlide.date}</span>
              </div>
            </div>

            {/* Title (blur-fade-up at 400ms) */}
            <h1
              key={`title-${currentSlide.id}`}
              className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-[-0.04em] mb-4 md:mb-6 leading-[1.05] text-white animate-blur-fade-up"
              style={{ animationDelay: '400ms' }}
            >
              {currentSlide.title}
            </h1>

            {/* Description (blur-fade-up at 500ms) */}
            <p
              key={`desc-${currentSlide.id}`}
              className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 md:mb-12 max-w-2xl leading-relaxed animate-blur-fade-up"
              style={{ animationDelay: '500ms' }}
            >
              {currentSlide.description}
            </p>

            {/* CTA Buttons Row */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              {/* Watch Now Button (blur-fade-up at 600ms) */}
              <button
                type="button"
                className="bg-white text-black rounded-full font-medium px-6 sm:px-8 py-2.5 sm:py-3 flex items-center gap-2 hover:bg-gray-200 transition-all duration-300 cursor-pointer shadow-lg hover:scale-105 active:scale-95 animate-blur-fade-up"
                style={{ animationDelay: '600ms' }}
                onClick={() => setIsTrailerModalOpen(true)}
              >
                <Play size={18} className="fill-black text-black" />
                <span>Watch Now</span>
              </button>

              {/* Learn More Button (blur-fade-up at 700ms) */}
              <button
                type="button"
                className="rounded-full font-medium liquid-glass px-6 sm:px-8 py-2.5 sm:py-3 text-white hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 animate-blur-fade-up"
                style={{ animationDelay: '700ms' }}
                onClick={() => setIsLearnMoreOpen(true)}
              >
                <span>Learn More</span>
              </button>
            </div>
          </div>

          {/* Right Side: Navigation Arrows (md:w-auto, aligned right on desktop, left on mobile) */}
          <div className="flex items-center gap-3 md:w-auto self-start md:self-end">
            {/* Previous Button (blur-fade-up at 800ms) */}
            <button
              type="button"
              aria-label="Previous slide"
              className="rounded-full liquid-glass px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-center gap-1.5 text-white hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 animate-blur-fade-up"
              style={{ animationDelay: '800ms' }}
              onClick={handlePrevSlide}
            >
              <ChevronLeft size={18} />
              <span className="hidden sm:inline text-sm font-medium">Previous</span>
            </button>

            {/* Next Button (blur-fade-up at 900ms) */}
            <button
              type="button"
              aria-label="Next slide"
              className="rounded-full liquid-glass px-4 sm:px-6 py-2.5 sm:py-3 flex items-center justify-center gap-1.5 text-white hover:bg-white/10 transition-all duration-300 cursor-pointer hover:scale-105 active:scale-95 animate-blur-fade-up"
              style={{ animationDelay: '900ms' }}
              onClick={handleNextSlide}
            >
              <span className="hidden sm:inline text-sm font-medium">Next</span>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </main>

      {/* --- INTERACTIVE MODALS / OVERLAYS --- */}

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4 animate-fadeIn">
          <div className="relative w-full max-w-lg liquid-glass rounded-2xl p-6 border border-white/20 shadow-2xl">
            <button
              type="button"
              onClick={() => setIsSearchOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white cursor-pointer"
            >
              <X size={20} />
            </button>
            <h3 className="text-lg font-semibold mb-4 text-white">Search Titles & Categories</h3>
            <div className="relative mb-4">
              <Search size={18} className="absolute left-3.5 top-3.5 text-gray-400" />
              <input
                type="text"
                placeholder="Search movies, TV series, actors..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white/5 border border-white/10 rounded-xl pl-10 pr-4 py-2.5 text-white placeholder-gray-500 focus:outline-none focus:border-white/40 transition-colors"
                autoFocus
              />
            </div>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="text-xs uppercase tracking-wider text-gray-500 font-semibold mb-2">Trending Searches</p>
              <div className="flex flex-wrap gap-2">
                {['Sci-Fi Masterpieces', 'Interstellar 2', 'Cyberpunk Realms', 'IMDB 9+ Movies'].map((tag) => (
                  <button
                    key={tag}
                    type="button"
                    onClick={() => setSearchQuery(tag)}
                    className="px-3 py-1 rounded-full text-xs liquid-glass hover:bg-white/10 text-gray-300 hover:text-white transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* User Profile Modal */}
      {isProfileOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="relative w-full max-w-md liquid-glass rounded-2xl p-6 border border-white/20 shadow-2xl">
            <button
              type="button"
              onClick={() => setIsProfileOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white cursor-pointer"
            >
              <X size={20} />
            </button>
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-500 to-indigo-500 flex items-center justify-center text-xl font-bold">
                JD
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">John Doe</h3>
                <p className="text-sm text-gray-400">Premium Cinema Member</p>
              </div>
            </div>
            <div className="space-y-3">
              <button
                type="button"
                className="w-full text-left py-2.5 px-4 rounded-xl liquid-glass hover:bg-white/10 text-sm font-medium text-white transition-colors"
              >
                Watchlist & Favorites
              </button>
              <button
                type="button"
                className="w-full text-left py-2.5 px-4 rounded-xl liquid-glass hover:bg-white/10 text-sm font-medium text-white transition-colors"
              >
                Account Settings
              </button>
              <button
                type="button"
                className="w-full text-left py-2.5 px-4 rounded-xl liquid-glass hover:bg-white/10 text-sm font-medium text-white transition-colors"
              >
                Streaming Quality (4K HDR)
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Watch Now / Trailer Modal */}
      {isTrailerModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8">
          <div className="relative w-full max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden border border-white/20 shadow-2xl">
            <button
              type="button"
              onClick={() => setIsTrailerModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 flex items-center justify-center text-white cursor-pointer transition-colors"
            >
              <X size={20} />
            </button>
            <iframe
              className="w-full h-full"
              src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1"
              title="Trailer Preview"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

      {/* Learn More Modal */}
      {isLearnMoreOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-md p-4">
          <div className="relative w-full max-w-lg liquid-glass rounded-2xl p-6 border border-white/20 shadow-2xl">
            <button
              type="button"
              onClick={() => setIsLearnMoreOpen(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-white cursor-pointer"
            >
              <X size={20} />
            </button>
            <div className="flex items-center gap-2 mb-4">
              <Info className="text-white" size={22} />
              <h3 className="text-xl font-semibold text-white">{currentSlide.title}</h3>
            </div>
            <div className="space-y-4 text-sm text-gray-300 leading-relaxed">
              <p>
                {currentSlide.description} Directed by visionary filmmakers, this feature production pushes the boundaries of visual storytelling with IMAX camera technology and real-time raytraced audio design.
              </p>
              <div className="grid grid-cols-2 gap-4 pt-2 border-t border-white/10 text-xs">
                <div>
                  <span className="text-gray-500 block">Rating</span>
                  <span className="font-semibold text-white">{currentSlide.rating}</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Duration</span>
                  <span className="font-semibold text-white">{currentSlide.duration}</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Release Date</span>
                  <span className="font-semibold text-white">{currentSlide.date}</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Format</span>
                  <span className="font-semibold text-white">4K Dolby Vision</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
