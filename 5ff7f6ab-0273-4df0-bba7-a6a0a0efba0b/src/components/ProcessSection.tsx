import React from 'react';
import { motion } from 'framer-motion';

export function ProcessSection() {
  return (
    <section
      id="process"
      // py-20 (mobile) and py-32 (desktop) দিয়ে গ্যাপ বাড়িয়ে দেওয়া হয়েছে
      // mt-20 (mobile) and mt-32 (desktop) অতিরিক্ত মার্জিন যোগ করা হয়েছে
      className="px-page-x max-w-page mx-auto mt-20 md:mt-32 py-20 md:py-32 border-t border-gray-200 dark:border-neutral-800 transition-colors duration-500">
      
      <motion.div
        className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16" // গ্রিড গ্যাপও কিছুটা বাড়ানো হয়েছে
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}>
        
        <div className="md:col-span-5 mb-12 md:mb-0 pr-0 md:pr-8">
          <h2 className="text-4xl md:text-5xl font-light text-gray-900 dark:text-white mb-8 transition-colors uppercase tracking-tighter">
            Process
          </h2>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 mb-10 leading-relaxed transition-colors font-light">
            Every project begins with a deep understanding of site, program, and
            calligraphy of atmosphere. Through iterative cycles of drawing, physical modeling,
            and material exploration, the design evolves from concept to construction.
          </p>
          
          <ul className="space-y-6 text-sm md:text-base text-gray-600 dark:text-gray-300 transition-colors">
            <li className="flex items-start gap-4 group">
              <span className="text-[10px] text-gray-400 dark:text-neutral-500 mt-1 font-bold tracking-widest uppercase">01</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">Site analysis & conceptual sketching</span>
            </li>
            <li className="flex items-start gap-4 group">
              <span className="text-[10px] text-gray-400 dark:text-neutral-500 mt-1 font-bold tracking-widest uppercase">02</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">Physical model studies & spatial testing</span>
            </li>
            <li className="flex items-start gap-4 group">
              <span className="text-[10px] text-gray-400 dark:text-neutral-500 mt-1 font-bold tracking-widest uppercase">03</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">Material research & detail development</span>
            </li>
            <li className="flex items-start gap-4 group">
              <span className="text-[10px] text-gray-400 dark:text-neutral-500 mt-1 font-bold tracking-widest uppercase">04</span>
              <span className="group-hover:translate-x-1 transition-transform duration-300">Technical documentation & construction</span>
            </li>
          </ul>
        </div>

        <div className="md:col-span-7">
          <div className="w-full aspect-[4/3] bg-gray-100 dark:bg-neutral-900 overflow-hidden border border-gray-100 dark:border-neutral-800 transition-all duration-700 group">
            <img
              src="https://i.ibb.co.com/CpRsrv1r/architecture-model-isolated-model-house-sale-real-estate-construction-products-design-housing-archit.jpg"
              alt="Physical model study"
              className="w-full h-full object-cover dark:opacity-80 group-hover:scale-105 transition-transform duration-1000" />
            
          </div>
          <div className="flex justify-between items-center mt-4">
            <p className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-neutral-500">
              Physical model — material exploration
            </p>
            <span className="text-[10px] text-gray-300 dark:text-neutral-700 font-mono italic underline"></span>
          </div>
        </div>
      </motion.div>
    </section>);

}