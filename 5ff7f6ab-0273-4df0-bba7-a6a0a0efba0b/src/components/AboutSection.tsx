import React from 'react';
import { motion } from 'framer-motion';

export function AboutSection() {
  return (
    <section
      id="about"
      className="px-page-x max-w-page mx-auto py-24 border-t border-gray-200 dark:border-neutral-800 transition-colors duration-500"
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-12 gap-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      >
        {/* Left Column - Portrait & Methodology */}
        <div className="col-span-5 space-y-12">
          <div className="w-full aspect-[3/4] bg-gray-100 dark:bg-neutral-900 overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
            <img
              src="https://i.ibb.co.com/KYpgPcd/TH-IMAGE-remini-enhanced.jpg"
              alt="Tanvir Haque"
              className="w-full h-full object-cover opacity-90 dark:opacity-80 transition-opacity"
            />
          </div>

          {/* Design Process - Methodology */}
          <div className="pt-4">
            <div className="border-b border-gray-200 dark:border-neutral-800 pb-2 mb-6">
              <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">
                Methodology
              </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-8">
              {[
                { step: '01', title: 'Conceptualization', desc: 'Site analysis and spatial planning.' },
                { step: '02', title: 'Drafting', desc: 'Precise 2D documentation in AutoCAD.' },
                { step: '03', title: 'Visualization', desc: '3D modeling and light simulation.' }
              ].map((m, i) => (
                <div key={i} className="flex gap-4">
                  <span className="text-[10px] font-mono text-gray-400 pt-1">{m.step}</span>
                  <div>
                    <h4 className="text-xs font-bold text-gray-900 dark:text-gray-100 uppercase tracking-tight">
                      {m.title}
                    </h4>
                    <p className="text-[11px] text-gray-500 dark:text-neutral-500 leading-tight mt-1">
                      {m.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Column - Bio & Credentials */}
        <div className="md:col-span-7 flex flex-col justify-center mt-12 md:mt-0">
          
          {/* Main Headline */}
          <h2 className="text-2xl md:text-4xl font-sans font-medium text-gray-900 dark:text-gray-100 mb-8 leading-snug tracking-tight">
            Tanvir Haque is a Diploma Architect and Interior Designer based in Dhaka, 
            exploring the intersection of tectonic logic and atmospheric space.
          </h2>

          {/* Bio Description */}
          <p className="text-base md:text-lg font-normal text-gray-600 dark:text-neutral-400 leading-relaxed mb-16">
            Enthusiastic architecture graduate seeking an entry-level position in a professional 
            architectural firm to apply skills in architectural design, 2D drafting, and 3D visualization 
            while contributing to innovative projects.
          </p>

          <div className="space-y-16">
            {/* Expertise / Services */}
            <div>
              <div className="border-b border-gray-200 dark:border-neutral-800 pb-2 mb-6">
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">
                  Core Expertise
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-4 gap-x-8 text-sm text-gray-900 dark:text-gray-200">
                {[
                  '2D Architectural Drawing',
                  '3D Modeling & Visualization',
                  'Interior & Exterior Space Design',
                  'Facade & Structural Planning'
                ].map((service) => (
                  <div key={service} className="flex items-center gap-3 font-light">
                    <span className="w-1.5 h-1.5 bg-gray-300 dark:bg-neutral-700 rounded-full" />
                    {service}
                  </div>
                ))}
              </div>
            </div>

            {/* Software Toolkit */}
            <div>
              <div className="border-b border-gray-200 dark:border-neutral-800 pb-2 mb-6">
                <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">
                  Software Toolkit
                </span>
              </div>
              <div className="flex flex-wrap gap-x-12 gap-y-8">
                {[
                  { name: 'AutoCAD 2D', level: 'Expert' },
                  { name: 'SketchUp', level: 'Expert' },
                  { name: 'V-Ray', level: 'Proficient' },
                  { name: 'MS Office & Canva', level: 'Tools' }
                ].map((skill, index) => (
                  <div key={index} className="flex flex-col">
                    <span className="text-sm text-gray-900 dark:text-gray-200 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-[9px] uppercase tracking-[0.2em] text-gray-400 dark:text-neutral-600">
                      {skill.level}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Education & Certifications Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12 pt-4">
              {/* Education */}
              <div className="space-y-4">
                <div className="border-b border-gray-200 dark:border-neutral-800 pb-2 mb-4">
                  <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">
                    Education
                  </span>
                </div>
                <div className="space-y-6 text-xs">
                  <div>
                    <p className="text-gray-900 dark:text-gray-200 font-bold uppercase tracking-tight">
                      Dhaka Government Polytechnic Institute
                    </p>
                    <p className="text-gray-500 dark:text-neutral-500 mt-1">
                      Diploma in Architecture Technology (Running 7th Semester)[cite: 1]
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-gray-200 font-bold uppercase tracking-tight">
                      Nasirabad Collegiate School, Mymensingh
                    </p>
                    <p className="text-gray-500 dark:text-neutral-500 mt-1">
                      Secondary School Certificate — Science (GPA: 4.67)[cite: 1]
                    </p>
                  </div>
                </div>
              </div>

              {/* Certifications */}
              <div className="space-y-4">
                <div className="border-b border-gray-200 dark:border-neutral-800 pb-2 mb-4">
                  <span className="text-[10px] uppercase tracking-widest text-gray-400 font-medium">
                    Certifications
                  </span>
                </div>
                <div className="space-y-6 text-xs">
                  <div>
                    <p className="text-gray-900 dark:text-gray-200 font-bold uppercase tracking-tight">
                      Professional AutoCAD 2D Course[cite: 1]
                    </p>
                    <p className="text-gray-500 dark:text-neutral-500 mt-1">
                      Reno-Arch Academy[cite: 1]
                    </p>
                  </div>
                  <div>
                    <p className="text-gray-900 dark:text-gray-200 font-bold uppercase tracking-tight">
                      Professional Exterior & Interior 3D Course[cite: 1]
                    </p>
                    <p className="text-gray-500 dark:text-neutral-500 mt-1">
                      Reno-Arch Academy[cite: 1]
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}
