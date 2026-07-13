import React, { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { ProjectGrid } from './components/ProjectGrid';
import { ProcessSection } from './components/ProcessSection';
import { SelectedDrawings } from './components/SelectedDrawings';
import { ProjectDetail } from './components/ProjectDetail';
import { AboutSection } from './components/AboutSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { projects } from './data';
import { Project } from './types';

export function App() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [darkMode, setDarkMode] = useState(false);

  // থিম চেক করা এবং সেট করা
  useEffect(() => {
    const isDark = localStorage.theme === 'dark' ||
    !('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches;

    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleDarkMode = () => {
    if (darkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.theme = 'light';
      setDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.theme = 'dark';
      setDarkMode(true);
    }
  };

  return (
    // dark: ক্লাসের মাধ্যমে ডার্ক মোড কালার কন্ট্রোল হচ্ছে
    <div className="min-h-screen bg-white dark:bg-neutral-950 font-sans text-gray-900 dark:text-gray-100 selection:bg-gray-900 dark:selection:bg-white dark:selection:text-gray-900 transition-colors duration-500">
      
      {/* Header-এ প্রপস হিসেবে পাঠিয়ে দিচ্ছি যাতে বাটন কাজ করে */}
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

      <AnimatePresence mode="wait">
        {selectedProject ?
        <ProjectDetail
          key="detail"
          project={selectedProject}
          onBack={() => setSelectedProject(null)} /> :


        <main key="home">
            <HeroSection />
            <ProjectGrid
            projects={projects}
            onProjectSelect={(project) => setSelectedProject(project)} />
          
            <ProcessSection />
            <SelectedDrawings />
            <AboutSection />
            <ContactSection />
          </main>
        }
      </AnimatePresence>

      <Footer />
    </div>);

}