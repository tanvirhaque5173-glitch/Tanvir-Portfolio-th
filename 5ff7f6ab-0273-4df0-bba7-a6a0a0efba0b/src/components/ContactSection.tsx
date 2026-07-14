import React, { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";

export function ContactSection() {
  const [message, setMessage] = useState("");

  const handleWhatsAppSend = (e: React.FormEvent) => {
    e.preventDefault();

    if (!message.trim()) return;

    const phoneNumber = "8801909101002";
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;

    window.open(url, "_blank");
  };

  return (
    <section
      id="contact"
      className="px-page-x max-w-page mx-auto py-section-y border-t border-gray-200 dark:border-neutral-800 transition-colors duration-500"
    >
      <motion.div
        className="grid grid-cols-1 md:grid-cols-12 gap-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
      >
        {/* Left Side */}
        <div className="md:col-span-5 pr-8">
          <h2 className="text-h1 font-light text-gray-900 dark:text-white mb-6">
            Let's discuss your{" "}
            <span className="font-medium">project</span>
          </h2>

          <p className="text-body text-gray-600 dark:text-gray-400 mb-12">
            Open for commissions, architectural visualization and design
            collaborations.
          </p>

          <div>

            {/* Studio */}
            <div className="border-t border-gray-200 dark:border-neutral-800 py-6 flex flex-col md:flex-row gap-2">
              <div className="w-full md:w-1/3 text-[10px] uppercase tracking-widest text-gray-400">
                Studio
              </div>

              <div className="w-full md:w-2/3 text-gray-900 dark:text-gray-200">
                Tanvir Haque
              </div>
            </div>

            {/* Email */}
            <div className="border-t border-gray-200 dark:border-neutral-800 py-6 flex flex-col md:flex-row gap-2">
              <div className="w-full md:w-1/3 text-[10px] uppercase tracking-widest text-gray-400">
                Email
              </div>

              <div className="w-full md:w-2/3">
                <a
                  href="mailto:tanvirhaque5173@gmail.com"
                  className="hover:opacity-60 transition-opacity"
                >
                  tanvirhaque5173@gmail.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="border-t border-gray-200 dark:border-neutral-800 py-6 flex flex-col md:flex-row gap-2">
              <div className="w-full md:w-1/3 text-[10px] uppercase tracking-widest text-gray-400">
                Phone
              </div>

              <div className="w-full md:w-2/3">
                <a
                  href="tel:+8801909101002"
                  className="hover:opacity-60 transition-opacity"
                >
                  +8801909101002
                </a>
              </div>
            </div>

            {/* Social */}
            <div className="border-t border-b border-gray-200 dark:border-neutral-800 py-6 flex flex-col md:flex-row gap-2">
              <div className="w-full md:w-1/3 text-[10px] uppercase tracking-widest text-gray-400">
                Social
              </div>

              <div className="w-full md:w-2/3 flex flex-wrap items-center gap-3">

                <a
                  href="https://github.com/tanvirhaque5173-glitch"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-60 transition-opacity"
                >
                  GitHub
                </a>

                <span>/</span>

                <a
                  href="https://www.linkedin.com/in/tanvir-haque-053b41371/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-60 transition-opacity"
                >
                  LinkedIn
                </a>

                <span>/</span>

                <a
                  href="https://www.instagram.com/tanvir_haque73/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:opacity-60 transition-opacity"
                >
                  Instagram
                </a>

              </div>
            </div>

          </div>
        </div>

        {/* Right Side */}
        <div className="md:col-span-7">
          <div className="bg-gray-50 dark:bg-neutral-900/40 p-8 border border-gray-100 dark:border-neutral-900">

            <h3 className="text-sm uppercase tracking-[0.2em] font-medium mb-8">
              Quick Message
            </h3>

            <form
              onSubmit={handleWhatsAppSend}
              className="space-y-6"
            >
              <div>

                <label className="text-[10px] uppercase tracking-widest text-gray-400">
                  Your Message
                </label>

                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell me about your project or just say hi..."
                  rows={5}
                  required
                  className="w-full mt-2 bg-white dark:bg-neutral-950 border border-gray-200 dark:border-neutral-800 p-4 resize-none focus:outline-none focus:border-black dark:focus:border-white transition-colors"
                />

              </div>

              <button
                type="submit"
                className="group flex items-center justify-between w-full bg-black dark:bg-white text-white dark:text-black px-6 py-4 hover:bg-neutral-800 dark:hover:bg-neutral-200 transition-all"
              >
                <span className="text-xs uppercase tracking-[0.2em]">
                  Send via WhatsApp
                </span>

                <Send
                  size={15}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

            </form>

            <p className="mt-5 text-xs text-gray-500 dark:text-gray-400">
              Clicking the button will open WhatsApp with your message.
            </p>

          </div>
        </div>

      </motion.div>
    </section>
  );
}
