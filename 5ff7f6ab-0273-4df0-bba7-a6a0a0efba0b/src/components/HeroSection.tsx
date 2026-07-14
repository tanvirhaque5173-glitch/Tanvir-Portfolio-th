import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

export function HeroSection() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 150]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: [0.25, 0.1, 0.25, 1] }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-6 md:px-12 lg:px-20 mb-32 md:mb-56 transition-colors duration-500">
      
      {/* Background Image with Parallax */}
      <motion.div style={{ y }} className="absolute inset-0 z-0">
        <img
          src="https://i.ibb.co.com/6cFhgp0X/myarchitectai-m7avsyhe5-sd.png"
          alt="Architectural Render"
          className="w-full h-[120%] object-cover" />
        
        <div className="absolute inset-0 bg-black/50 dark:bg-black/70 transition-colors duration-500" />
      </motion.div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-6xl mx-auto text-white">
        
        <motion.div variants={itemVariants} className="mb-10">
          <span className="text-xs tracking-widest uppercase opacity-80 font-medium">
            Architecture & Interior Design
          </span>
        </motion.div>

        <motion.div variants={itemVariants} className="mb-6">
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-2 uppercase tracking-tighter">
            Tanvir Haque
          </h1>
          <span className="text-sm tracking-[0.3em] uppercase opacity-70 font-light block">
            Junior Architect | Dhaka, Bangladesh
          </span>
        </motion.div>

        <motion.p
          variants={itemVariants}
          className="text-lg md:text-2xl font-light max-w-2xl mb-10 leading-relaxed opacity-90">
          
          Enthusiastic diploma architecture graduate specializing in 2D drafting and 3D visualization.
        </motion.p>

        <motion.div variants={itemVariants} className="mb-20">
          <a
            href="https://drive.google.com/uc?export=download&id=1_JcnB_NSMADg0dKvoX1p0owEN6NIK31d"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-3 px-8 py-4 border border-white text-white hover:bg-white hover:text-black transition-all duration-300 text-xs tracking-[0.2em] uppercase font-bold">
            
            <span>Download CV</span>
            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>

        {/* --- লাইনগুলো (Bottom Divider) এখান থেকে রিমুভ করে দেওয়া হয়েছে --- */}
        
      </motion.div>
    </section>);

}
