import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';

interface HeaderProps {
  darkMode: boolean;
  toggleDarkMode: () => void;
}

export function Header({ darkMode, toggleDarkMode }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 border-b ${
      scrolled ?
      'bg-white/90 dark:bg-neutral-950/90 backdrop-blur-sm' :
      'bg-white dark:bg-neutral-950'} border-gray-200 dark:border-neutral-800`
      }
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}>
      
      <div className="max-w-page mx-auto px-page-x h-16 flex items-center justify-between">
        
        {/* --- LOGO SECTION START --- */}
        <div className="flex items-center gap-3 group cursor-pointer">
          {/* লোগো আইকন: কালো বক্সে সাদা 'TH' */}
          <div className="w-8 h-8 bg-black dark:bg-white flex items-center justify-center transition-colors duration-500">
            <span className="text-white dark:text-black font-bold text-sm tracking-tighter">
              TH
            </span>
          </div>
          {/* নাম অংশ */}
          <div className="flex flex-col leading-none">
            <span className="text-sm font-bold tracking-[0.1em] uppercase text-gray-900 dark:text-white transition-colors">
              Tanvir Haque
            </span>
            <span className="text-[10px] tracking-[0.2em] uppercase text-gray-400 dark:text-neutral-500 transition-colors">
              Junior Architect
            </span>
          </div>
        </div>
        {/* --- LOGO SECTION END --- */}
        
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex space-x-8">
            {['Works', 'Drawings', 'Process', 'About', 'Contact'].map((item) =>
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-label uppercase text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors">
              
                {item}
              </a>
            )}
          </nav>

          <button
            onClick={toggleDarkMode}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-neutral-800 transition-colors"
            aria-label="Toggle Dark Mode">
            
            {darkMode ?
            <Sun size={18} className="text-yellow-400" /> :

            <Moon size={18} className="text-gray-600" />
            }
          </button>
        </div>
      </div>
    </motion.header>);

}
