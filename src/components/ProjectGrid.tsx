import React from 'react';
import { motion } from 'framer-motion';
import { Project } from '../types';

interface ProjectGridProps {
  projects: Project[];
  onProjectSelect: (project: Project) => void;
}

const colSpanMap: Record<number, string> = {
  5: 'md:col-span-5',
  6: 'md:col-span-6',
  7: 'md:col-span-7'
};

const colStartEndMap: Record<number, string> = {
  5: 'md:col-start-8',
  6: 'md:col-start-7',
  7: 'md:col-start-6'
};

export function ProjectGrid({ projects, onProjectSelect }: ProjectGridProps) {
  return (
    // dark:bg-neutral-950 (optional if App.tsx already covers it)
    <section id="works" className="px-page-x max-w-page mx-auto pb-section-y transition-colors duration-500">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-y-24">
        {projects.map((project, index) => {
          const colSpanClass = colSpanMap[project.colSpan] || 'md:col-span-6';
          const offsetClass =
          index % 2 === 0 ?
          'md:col-start-1' :
          colStartEndMap[project.colSpan] || 'md:col-start-7';
          const aspectClass =
          project.aspectRatio === 'tall' ?
          'aspect-[3/4]' :
          project.aspectRatio === 'wide' ?
          'aspect-[16/9]' :
          'aspect-square';

          return (
            <motion.div
              key={project.id}
              className={`${colSpanClass} ${offsetClass} cursor-pointer group`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{
                duration: 0.8,
                ease: [0.25, 0.1, 0.25, 1],
                delay: index * 0.1
              }}
              onClick={() => onProjectSelect(project)}>
              
              {/* Image Container with dark mode adjustment */}
              <div
                className={`w-full ${aspectClass} overflow-hidden bg-gray-100 dark:bg-neutral-900 mb-4 relative border border-transparent group-hover:border-gray-200 dark:group-hover:border-neutral-700 transition-all duration-500`}>
                
                <motion.img
                  src={project.thumbnailUrl}
                  alt={project.title}
                  // ডার্ক মোডে ইমেজের ব্রাইটনেস সামান্য কমানো
                  className="w-full h-full object-cover dark:opacity-85 transition-opacity duration-500"
                  whileHover={{ scale: 1.02 }}
                  transition={{
                    duration: 0.6,
                    ease: [0.25, 0.1, 0.25, 1]
                  }} />
                
              </div>

              {/* Project Info Section */}
              <div className="flex justify-between items-start transition-colors">
                <div>
                  {/* text-gray-900 -> dark:text-white */}
                  <h3 className="text-body font-normal text-gray-900 dark:text-white mb-1 transition-colors">
                    {project.title}
                  </h3>
                  {/* text-gray-500 -> dark:text-gray-400 */}
                  <p className="text-caption text-gray-500 dark:text-gray-400">
                    {project.category}
                  </p>
                </div>
                <div className="text-right">
                  {/* text-gray-400 -> dark:text-neutral-500 */}
                  <span className="text-label text-gray-400 dark:text-neutral-500 block mb-1">
                    {project.number}
                  </span>
                  <span className="text-caption text-gray-500 dark:text-gray-400">
                    {project.year}
                  </span>
                </div>
              </div>
            </motion.div>);

        })}
      </div>
    </section>);

}