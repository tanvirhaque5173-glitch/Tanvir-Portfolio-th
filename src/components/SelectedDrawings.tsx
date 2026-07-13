import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Maximize2 } from 'lucide-react';

export function SelectedDrawings() {
  const drawings = [
  {
    title: 'Detailed Floor Plan',
    project: 'G+7 Residential Building',
    img: 'https://i.ibb.co.com/vx688Rpq/Screenshot-2025-07-01-120401.png'
  },
  {
    title: 'Structural Part',
    project: 'G+7 Residential Building',
    img: 'https://i.ibb.co.com/Lzhf7g17/Screenshot-2026-04-07-002552.png'
  },
  {
    title: 'Sectional Study',
    project: 'Mosque Complex Design',
    img: 'https://i.ibb.co.com/vx9pmW9X/Mosque-s-f.jpg'
  },
  {
    title: 'Minaret Detail',
    project: 'Mosque Complex Design',
    img: 'https://i.ibb.co.com/bRqvqr2n/Screenshot-2026-04-07-015945.png'
  },
  {
    title: 'Facade Planning',
    project: 'Duplex Residential House',
    img: 'https://i.ibb.co.com/B2pS4XV1/Screenshot-2026-04-07-021850.png'
  },
  {
    title: 'Elevation Layout',
    project: 'Duplex Residential House',
    img: 'https://i.ibb.co.com/6cfWfXMz/Screenshot-2026-04-07-023234.png'
  }];


  return (
    <section
      id="drawings"
      className="px-page-x max-w-page mx-auto py-24 border-t border-gray-200 dark:border-neutral-800 overflow-hidden transition-colors duration-500">
      
      {/* Header Section */}
      <motion.div
        className="flex justify-between items-end mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}>
        
        <div className="flex flex-col gap-2">
          <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium">Drafting Portfolio</span>
          <h2 className="text-3xl md:text-4xl font-light text-gray-900 dark:text-white uppercase tracking-tighter">
             <span className="font-medium">Technical Drawings</span>
          </h2>
        </div>
        
        <div className="flex items-center gap-4 text-gray-400 dark:text-neutral-600 hidden md:flex">
          <span className="text-[10px] uppercase tracking-widest">Shift + Scroll to explore</span>
          <div className="w-16 h-px bg-gray-300 dark:bg-neutral-800"></div>
          <ArrowRight size={14} className="animate-pulse" />
        </div>
      </motion.div>

      {/* Horizontal Scroll Container */}
      <motion.div
        className="flex overflow-x-auto gap-8 pb-10 cursor-grab active:cursor-grabbing [&::-webkit-scrollbar]:h-1 [&::-webkit-scrollbar-track]:bg-transparent [&::-webkit-scrollbar-thumb]:bg-gray-200 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-800"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}>
        
        {drawings.map((drawing, index) => (
        /* এখানে <div> এর বদলে <a> ট্যাগ ব্যবহার করা হয়েছে */
        <a
          key={index}
          href={drawing.img}
          target="_blank"
          rel="noopener noreferrer"
          className="min-w-[320px] w-[320px] flex-shrink-0 group block cursor-pointer">
          
            {/* Drawing Image Card */}
            <div className="relative aspect-[3/4] bg-gray-50 dark:bg-neutral-900 mb-5 border border-gray-200 dark:border-neutral-800 overflow-hidden transition-all duration-500">
              <img
              src={drawing.img}
              alt={drawing.title}
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out opacity-90 group-hover:opacity-100" />
            
              
              {/* Modern Hover Overlay */}
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col items-center justify-center gap-3 backdrop-blur-[2px]">
                 <div className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white scale-50 group-hover:scale-100 transition-transform duration-500">
                    <Maximize2 size={20} />
                 </div>
                 <span className="text-white text-[10px] uppercase tracking-[0.2em] font-light">View Full Sheet</span>
              </div>
            </div>
            
            {/* Info Section */}
            <div className="space-y-1 px-1">
              <h3 className="text-sm font-bold text-gray-900 dark:text-gray-100 uppercase tracking-tight group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {drawing.title}
              </h3>
              <p className="text-[10px] text-gray-400 dark:text-neutral-500 uppercase tracking-widest font-medium">
                {drawing.project}
              </p>
            </div>
          </a>)
        )}
      </motion.div>
    </section>);

}