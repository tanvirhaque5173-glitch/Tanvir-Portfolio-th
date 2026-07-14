import React from 'react';

export function Footer() {
  return (
    // dark: border ও bg যোগ করা হয়েছে
    <footer className="border-t border-gray-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 transition-colors duration-500">
      <div className="max-w-page mx-auto px-page-x py-12 flex flex-col md:flex-row justify-between items-center text-caption text-gray-500 dark:text-gray-400 space-y-4 md:space-y-0">
        
        <div>© {new Date().getFullYear()} Tanvir Haque</div>
        
        <div className="tracking-widest uppercase">Dhaka, Bangladesh</div>
        
        <div>
          <a
            href="mailto:tanvirhaque5173@gmail.com"
            // হোভারে টেক্সট এবং বর্ডার কালার ডার্ক মোডে সাদা (white) হবে
            className="hover:text-gray-900 dark:hover:text-white transition-colors border-b border-transparent hover:border-gray-900 dark:hover:border-white pb-0.5">
            
            All rights reserved
          </a>
        </div>
      </div>
    </footer>);

}
