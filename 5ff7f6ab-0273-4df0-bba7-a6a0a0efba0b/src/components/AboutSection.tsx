import React from 'react';
import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <section
      id="about"
      className="px-page-x max-w-page mx-auto py-24 border-t border-gray-200 dark:border-neutral-800 transition-colors duration-500">
      
      <motion.div
        className="grid grid-cols-1 md:grid-cols-12 gap-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}>
        
        {/* Left Column - Portrait & Methodology */}
        <div className="col-span-5 space-y-12">
          <div className="w-full aspect-[3/4] bg-gray-100 dark:bg-neutral-900 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <img
              src="https://i.ibb.co.com/KYpgPcd/TH-IMAGE-remini-enhanced.jpg"
              alt="Tanvir Haque"
              className="w-full h-full object-cover opacity-90 dark:opacity-80 transition-opacity" />
            
          </div>

          {/* Design Process - Methodology (Now visible on all screens) */}
          <div className="pt-4">
            <div className="border-b border-gray-200 dark:border-neutral-800 pb-2 mb-6">
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">Methodology</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-8">
              {[
              { step: '01', title: 'Conceptualization', desc: 'Site analysis and spatial planning.' },
              { step: '02', title: 'Drafting', desc: 'Precise 2D documentation in AutoCAD.' },
              { step: '03', title: 'Visualization', desc: '3D modeling and light simulation.' }].
              map((m, i) =>
              <div key={i} className="flex gap-4">
                  <span className="text-[10px] font-mono text-gray-400 pt-1">{m.step}</span>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 dark:text-gray-100 uppercase tracking-tight">{m.title}</h4>
                    <p className="text-[11px] text-gray-500 dark:text-neutral-500 leading-tight mt-1">{m.desc}</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Column - Bio & Credentials */}
  <h2 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-[-0.04em] leading-[1.05] text-gray-900 dark:text-white mb-8">
  Tanvir Haque is a{" "}
  <span className="font-medium italic">Diploma Architect</span> and{" "}
  <span className="font-medium italic">Interior Designer</span> based in
  Dhaka, exploring the intersection of{" "}
  <span className="font-medium">tectonic logic</span> and{" "}
  <span className="font-medium">atmospheric space</span>.
</h2>

<p className="text-lg md:text-xl font-light text-gray-600 dark:text-gray-400 leading-relaxed mb-16">
  The practice explores the subtle dialogue between site context and autonomous
  architectural form. Through an iterative process of technical drafting,
  physical modeling, and meticulous material research, each project is defined
  by a rigorous commitment to structural integrity and aesthetic clarity.
</p>

          <div className="space-y-16">
            {/* Expertise / Services */}
            <div>
              <div className="border-b border-gray-200 dark:border-neutral-800 pb-2 mb-6">
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">Core Expertise</span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm text-gray-900 dark:text-gray-200">
                {['2D Architectural Drawing', '3D Modeling & Visualization', 'Interior & Exterior Space Design', 'Urban Planning & Strategy'].map((service) =>
                <div key={service} className="flex items-center gap-3 italic font-light">
                    <span className="w-1.5 h-1.5 bg-gray-300 dark:bg-neutral-700 rounded-full" />
                    {service}
                  </div>
                )}
              </div>
            </div>

            {/* Software Toolkit */}
            <div>
              <div className="border-b border-gray-200 dark:border-neutral-800 pb-2 mb-6">
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">Software Toolkit</span>
              </div>
              <div className="flex flex-wrap gap-x-12 gap-y-8">
                {[
                { name: 'AutoCAD 2D', level: 'Expert' },
                { name: 'SketchUp', level: 'Expert' },
                { name: 'V-Ray', level: 'Advanced' },
                { name: 'Enscape', level: 'Advanced' },
                { name: 'Lumion', level: 'Advanced' }].
                map((skill, index) =>
                <div key={index} className="flex flex-col">
                    <span className="text-sm text-gray-900 dark:text-gray-200 font-medium">{skill.name}</span>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-gray-400 dark:text-neutral-600">
                      {skill.level}
                    </span>
                  </div>
                )}
              </div>
            </div>

            {/* Education & Awards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-4">
               {/* Education */}
               <div className="space-y-4">
                  <div className="border-b border-gray-200 dark:border-neutral-800 pb-2 mb-4">
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">Education</span>
                  </div>
                  <div className="space-y-6 text-xs">
                    <div>
                      <p className="text-gray-900 dark:text-gray-200 font-bold uppercase tracking-tight">Dhaka Polytechnic Institute</p>
                      <p className="text-gray-500 dark:text-neutral-500 mt-1">Diploma in Engineering (Architecture Technology)</p>
                    </div>
                    <div>
                      <p className="text-gray-900 dark:text-gray-200 font-bold uppercase tracking-tight">Nasirabad Collegiate School</p>
                      <p className="text-gray-500 dark:text-neutral-500 mt-1">Secondary School Certificate (Science)</p>
                    </div>
                  </div>
               </div>

               {/* Awards */}
               <div className="space-y-4">
                  <div className="border-b border-gray-200 dark:border-neutral-800 pb-2 mb-4">
                    <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">Selected Awards</span>
                  </div>
                  <div className="space-y-4 text-xs">
                    <div className="flex justify-between border-b border-gray-50 dark:border-neutral-900 pb-2">
                      <span className="text-gray-900 dark:text-gray-200 uppercase tracking-tight font-medium">Visualization Excellence</span>
                      <span className="text-gray-400">2025</span>
                    </div>
                    <div className="flex justify-between border-b border-gray-50 dark:border-neutral-900 pb-2">
                      <span className="text-gray-900 dark:text-gray-200 uppercase tracking-tight font-medium">Best Conceptual Design</span>
                      <span className="text-gray-400">2025</span>
                    </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>);

}
