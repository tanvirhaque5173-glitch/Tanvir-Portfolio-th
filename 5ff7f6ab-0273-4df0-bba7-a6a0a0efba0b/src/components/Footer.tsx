import React from 'react';

export function Footer() {
  return (
    <footer className="border-t border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 transition-colors duration-500">
      <div className="max-w-page mx-auto px-page-x py-12 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 dark:text-neutral-400 gap-6 md:gap-0 font-mono">
        
        {/* Copyright */}
        <div className="flex items-center gap-3 tracking-wider">
          <span className="font-sans font-medium text-gray-900 dark:text-gray-200 uppercase">
            © {new Date().getFullYear()} Tanvir Haque
          </span>
          <span className="text-neutral-300 dark:text-neutral-700">|</span>
          <span className="text-[11px] text-gray-400 dark:text-neutral-500">
            All Rights Reserved
          </span>
        </div>

        {/* Location / Status */}
        <div className="tracking-widest uppercase text-[11px] text-gray-400 dark:text-neutral-500">
          Dhaka, Bangladesh
        </div>

        {/* Portfolio / Back to top link */}
        <div>
          <a
            href="#about"
            className="hover:text-gray-900 dark:hover:text-white transition-colors border-b border-transparent hover:border-gray-900 dark:hover:border-white pb-0.5 text-[11px] tracking-widest uppercase"
          >
            Diploma Architect & Interior Designer
          </a>
        </div>

      </div>
    </footer>
  );
}
