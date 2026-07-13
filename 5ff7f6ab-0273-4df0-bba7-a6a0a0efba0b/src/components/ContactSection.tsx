import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

export function ContactSection() {
  const [message, setMessage] = useState('');

  // হোয়াটসঅ্যাপে মেসেজ পাঠানোর ফাংশন
  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();
    const phoneNumber = "8801909101002"; // আপনার নম্বর
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section
      id="contact"
      className="px-page-x max-w-page mx-auto py-section-y border-t border-gray-200 dark:border-neutral-800 transition-colors duration-500">
      
      <motion.div
        className="grid grid-cols-1 md:grid-cols-12 gap-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}>
        
        {/* Left Column - Contact Details */}
        <div className="md:col-span-5 pr-8">
          <h2 className="text-h1 font-light text-gray-900 dark:text-white mb-6 transition-colors leading-tight">
             <span className="font-medium">Let's discuss your project</span>
          </h2>
          <p className="text-body text-gray-600 dark:text-gray-400 mb-12 transition-colors">
            Open for commissions, architectural visualization, and design collaborations.
          </p>

          <div className="flex flex-col">
            {/* Studio Info */}
            <div className="border-t border-gray-200 dark:border-neutral-800 py-6 flex flex-col md:flex-row gap-2 transition-colors">
              <div className="w-full md:w-1/3 text-label text-gray-400 dark:text-neutral-500 uppercase tracking-widest text-[10px]">Studio</div>
              <div className="w-full md:w-2/3 text-body text-gray-900 dark:text-gray-200">Tanvir Haque</div>
            </div>

            {/* Email Info */}
            <div className="border-t border-gray-200 dark:border-neutral-800 py-6 flex flex-col md:flex-row gap-2 transition-colors">
              <div className="w-full md:w-1/3 text-label text-gray-400 dark:text-neutral-500 uppercase tracking-widest text-[10px]">Email</div>
              <div className="w-full md:w-2/3 text-body text-gray-900 dark:text-gray-200">
                <a href="mailto:tanvirhaque5173@gmail.com" className="hover:opacity-60 transition-opacity">tanvirhaque5173@gmail.com</a>
              </div>
            </div>

            {/* Social Links */}
            <div className="border-t border-b border-gray-200 dark:border-neutral-800 py-6 flex flex-col md:flex-row gap-2 transition-colors">
              <div className="w-full md:w-1/3 text-label text-gray-400 dark:text-neutral-500 uppercase tracking-widest text-[10px]">Social</div>
              <div className="w-full md:w-2/3 text-body text-gray-900 dark:text-gray-200 flex space-x-4">
                <a href="https://www.instagram.com/tanvir_haque73/" target="_blank" className="hover:opacity-60 transition-opacity">Instagram</a>
                <span className="text-gray-300 dark:text-neutral-800">/</span>
                <a href="https://www.linkedin.com/in/tanvir-haque-053b41371/" target="_blank" className="hover:opacity-60 transition-opacity">LinkedIn</a>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Direct Message Form (WhatsApp Integration) */}
        <div className="md:col-span-7 mt-8 md:mt-0">
          <div className="bg-gray-50 dark:bg-neutral-900/40 p-8 border border-gray-100 dark:border-neutral-900">
            <h3 className="text-sm uppercase tracking-[0.2em] text-gray-900 dark:text-white mb-8 font-medium">Quick Message</h3>
            
            <form onSubmit={handleWhatsAppSend} className="space-y-6">
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-widest text--400">Your Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project or just say hi..."
                  rows={5}
                  className="w-full bg-white dark:bg-neutral-950 border border-gray-200 dark:border-neutral-800 p-4 focus:outline-none focus:border-black dark:focus:border-white transition-colors text-gray-900 dark:text-white resize-none"
                  required />
                
              </div>

              <button
                type="submit"
                className="group flex items-center justify-between w-full bg-black dark:bg-white text-white dark:text-black px-6 py-4 transition-all hover:bg-neutral-800 dark:hover:bg-neutral-200">
                
                <span className="text-xs uppercase tracking-[0.2em] font-medium">Send via WhatsApp</span>
                <Send size={14} className="group-hover:translate-x-1 transition-transform" />
              </button>
            </form>
            <p className="mt-4 text-[10px] text-gray-400 italic font-light">
              * Clicking send will open WhatsApp with your message.
            </p>
          </div>
        </div>
      </motion.div>
    </section>);

}