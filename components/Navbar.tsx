import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    
    // Initial theme check
    const storedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (storedTheme === 'dark' || (!storedTheme && systemPrefersDark)) {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDark(false);
      document.documentElement.classList.remove('dark');
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [location]);

  const toggleTheme = () => {
    if (isDark) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDark(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDark(true);
    }
  };

  const navItems = [
    { name: 'Inicio', path: '/' },
    { name: 'Servicios', path: '/services' },
    { name: 'Entrenadores', path: '/team' },
    { name: 'Planes', path: '/pricing' },
    { name: 'Instalaciones', path: '/facilities' },
  ];

  const isHome = location.pathname === '/';

  // Modern Floating Navbar Logic
  // FORCED LIGHT MODE: Removed dark: classes to keep navbar always light/white
  const navbarContainerClasses = isScrolled
    ? "fixed top-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-6xl z-50 rounded-2xl bg-white/90 backdrop-blur-xl border border-gray-200 shadow-2xl transition-all duration-500 ease-in-out py-3 px-6"
    : `fixed top-0 left-0 right-0 z-50 py-6 px-6 transition-all duration-500 ease-in-out ${
        isHome 
          ? 'bg-transparent' 
          : 'bg-white/90 backdrop-blur-md border-b border-gray-200'
      }`;

  // Text Color Logic
  const shouldUseDarkText = isScrolled || !isHome;

  // FORCED LIGHT MODE: Logo text always black when scrolled/not home
  const logoClasses = shouldUseDarkText
    ? "text-black"
    : "text-white drop-shadow-md";

  // Logo "STUDIO" part color
  const logoSpanClass = shouldUseDarkText
    ? "text-primary" 
    : "text-primary";

  const linkClasses = (path: string) => {
    const isActive = location.pathname === path;
    
    // FORCED LIGHT MODE: Text colors always optimized for white background when scrolled
    const baseColor = shouldUseDarkText
      ? "text-gray-800 hover:text-black"
      : "text-gray-200 hover:text-white drop-shadow-sm";
    
    const activeColor = shouldUseDarkText
      ? "text-black font-extrabold"
      : "text-white font-extrabold";

    return `relative text-base font-bold transition-all duration-300 ${isActive ? activeColor : baseColor} group`;
  };

  // FORCED LIGHT MODE: Icon buttons always dark on white background
  const iconButtonClasses = shouldUseDarkText
    ? "text-black hover:bg-gray-100"
    : "text-white hover:bg-white/10";

  return (
    <header className={navbarContainerClasses}>
      <div className={isScrolled ? "w-full" : "container mx-auto lg:px-4"}>
        <nav className="flex items-center justify-between">
          
          {/* Logo */}
          <Link to="/" className={`text-2xl font-black tracking-tighter flex items-center gap-1 ${logoClasses}`}>
            MOVE <span className={logoSpanClass}>STUDIO</span>
            {/* Small brand dot to ensure color presence in light mode */}
            {shouldUseDarkText && <span className="w-2 h-2 rounded-full bg-primary ml-1"></span>}
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link key={item.name} to={item.path} className={`px-4 py-2 rounded-full ${linkClasses(item.path)}`}>
                {item.name}
                {/* REMOVED THE DOT INDICATOR HERE */}
                
                {/* Hover Underline Effect: Only active item gets persistent line, others get hover effect */}
                <span className={`absolute bottom-2 left-1/2 -translate-x-1/2 h-[2px] bg-primary transition-all duration-300 ${
                  location.pathname === item.path
                    ? "w-1/2 opacity-100" 
                    : "w-0 group-hover:w-1/2 opacity-0 group-hover:opacity-100"
                }`}></span>
              </Link>
            ))}
          </div>

          {/* Right Actions */}
          <div className="hidden md:flex items-center space-x-3">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${iconButtonClasses}`}
              aria-label="Toggle theme"
            >
              <span className="material-icons text-2xl">{isDark ? 'light_mode' : 'dark_mode'}</span>
            </button>

             <Link 
              to="/pricing" 
              className="px-6 py-3 text-base font-bold bg-primary text-black rounded-full hover:bg-primary-hover hover:shadow-[0_0_15px_rgba(130,253,20,0.4)] transition-all transform hover:-translate-y-0.5"
            >
              Únete Ahora
            </Link>
          </div>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-full transition-colors ${iconButtonClasses}`}
            >
              <span className="material-icons text-2xl">{isDark ? 'light_mode' : 'dark_mode'}</span>
            </button>

            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`p-2 rounded-full transition-colors ${iconButtonClasses}`}
              aria-label="Toggle menu"
            >
              <span className="material-icons text-3xl">{mobileMenuOpen ? 'close' : 'menu'}</span>
            </button>
          </div>
        </nav>

        {/* Mobile Menu Dropdown */}
        {/* FORCED LIGHT MODE: Always white background */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4 p-4 rounded-2xl bg-white border border-gray-100 shadow-2xl flex flex-col space-y-2 animate-fade-in-down origin-top">
            {navItems.map((item) => (
              <Link 
                key={item.name}
                to={item.path} 
                className={`text-lg font-bold px-4 py-3 rounded-xl transition-colors ${
                  location.pathname === item.path 
                    ? 'bg-primary text-black' 
                    : 'text-gray-800 hover:bg-gray-100'
                }`}
              >
                {item.name}
              </Link>
            ))}
            <div className="pt-2 border-t border-gray-100 mt-2">
              <Link to="/pricing" className="block w-full text-center px-5 py-4 text-lg font-bold bg-black text-white rounded-xl hover:opacity-90 transition-colors">
                Únete Ahora
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;