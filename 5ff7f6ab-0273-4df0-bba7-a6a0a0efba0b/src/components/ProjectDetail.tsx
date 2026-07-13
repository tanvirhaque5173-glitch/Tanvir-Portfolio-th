import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';

interface ProjectDetailProps {
  project: {
    title: string;
    category: string;
    location?: string;
    year?: string;
    status?: string;
    description: string;
    thumbnailUrl: string;
    gallery?: {url: string;caption: string;}[]; // প্রতিটি প্রজেক্টের আলাদা ছবির অ্যারে
  };
  onBack: () => void;
}

export function ProjectDetail({ project, onBack }: ProjectDetailProps) {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // প্রজেক্টের ভেতর গ্যালারি থাকলে সেটি দেখাবে, না থাকলে নিচের ডিফল্ট ছবিগুলো দেখাবে
  const detailImages = project.gallery && project.gallery.length > 0 ?
  project.gallery :
  [
  {
    url: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=800&q=80',
    caption: 'CONCEPTUAL DRAFTING & ANALYSIS'
  },
  {
    url: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=800&q=80',
    caption: 'PHOTOREALISTIC 3D RENDERING'
  }];


  return (
    <motion.div
      className="min-h-screen bg-white dark:bg-neutral-950 pt-24 pb-32 transition-colors duration-500"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}>
      
      <div className="max-w-page mx-auto px-page-x">
        {/* Navigation */}
        <button
          onClick={onBack}
          className="flex items-center space-x-2 text-[10px] uppercase tracking-widest text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors mb-16 group">
          
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </button>

        {/* Header Section */}
        <div className="mb-20">
          <h1 className="text-5xl md:text-7xl font-extralight text-gray-900 dark:text-white mb-12 transition-colors uppercase tracking-tighter">
            {project.title}
          </h1>

          {/* Project Specs */}
          <div className="flex flex-wrap border-t border-b border-gray-200 dark:border-neutral-800 py-8 gap-y-6 transition-colors">
            <div className="w-1/2 md:w-1/4 pr-4 border-r border-gray-200 dark:border-neutral-800">
              <span className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-neutral-500 block mb-2 font-medium">Category</span>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-200">{project.category}</span>
            </div>
            <div className="w-1/2 md:w-1/4 px-4 md:border-r border-gray-200 dark:border-neutral-800">
              <span className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-neutral-500 block mb-2 font-medium">Location</span>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-200">{project.location || 'Dhaka, BD'}</span>
            </div>
            <div className="w-1/2 md:w-1/4 px-4 border-r border-gray-200 dark:border-neutral-800">
              <span className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-neutral-500 block mb-2 font-medium">Year</span>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-200">{project.year || '2024'}</span>
            </div>
            <div className="w-1/2 md:w-1/4 pl-4">
              <span className="text-[10px] uppercase tracking-widest text-gray-400 dark:text-neutral-500 block mb-2 font-medium">Status</span>
              <span className="text-sm font-medium text-gray-900 dark:text-gray-200">{project.status || 'Completed'}</span>
            </div>
          </div>
        </div>

        {/* Description Section */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-32">
          <div className="md:col-start-5 md:col-span-8">
            <p className="text-xl md:text-2xl font-light text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
              {project.description}
            </p>
          </div>
        </div>

        {/* Main Hero Image */}
        <motion.div
          className="w-full aspect-[16/9] md:aspect-[21/9] bg-gray-100 dark:bg-neutral-900 mb-40 overflow-hidden border border-gray-200 dark:border-neutral-800"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}>
          
          <img
            src={project.thumbnailUrl}
            alt={project.title}
            className="w-full h-full object-cover dark:opacity-80 transition-opacity" />
          
        </motion.div>

        {/* --- PROCESS INTRO TEXT SECTION --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 mb-20 border-t border-gray-100 dark:border-neutral-900 pt-20">
          <div className="md:col-span-4">
            <h3 className="text-xs font-bold uppercase tracking-[0.3em] text-gray-900 dark:text-white">
              The Process
            </h3>
          </div>
          <div className="md:col-span-8">
            <p className="text-sm text-gray-500 dark:text-neutral-400 leading-relaxed font-light max-w-xl">
              Exploring the dialogue between architectural form and site context through 
              rigorous technical drafting, light simulation, and material research. 
              Each phase defines the structural integrity and aesthetic clarity of the design.
            </p>
          </div>
        </div>

        {/* Editorial Layout for Detail Images (Dynamic) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-32 relative pt-10">
          <div className="hidden md:block absolute top-0 bottom-0 left-1/2 w-px bg-gray-100 dark:bg-neutral-900 -translate-x-1/2 transition-colors" />

          {detailImages.map((img, idx) =>
          <motion.div
            key={idx}
            className={`flex flex-col ${idx % 2 === 1 ? 'md:mt-56' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}>
            
              <div className="w-full aspect-[4/3] bg-gray-100 dark:bg-neutral-900 mb-8 overflow-hidden border border-gray-100 dark:border-neutral-800 transition-colors group">
                <img
                src={img.url}
                alt={img.caption}
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000 group-hover:scale-105 dark:opacity-80 dark:hover:opacity-100" />
              
              </div>
              <div className="border-t border-gray-100 dark:border-neutral-800 pt-6">
                <span className="text-[9px] font-mono text-gray-400 mb-2 block">Step / 0{idx + 1}</span>
                <p className="text-[10px] uppercase tracking-widest text-gray-900 dark:text-gray-200 font-bold transition-colors">
                  {img.caption}
                </p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>);

}