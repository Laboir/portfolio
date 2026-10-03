import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-900 to-indigo-950 dark:from-gray-950 dark:via-gray-950 dark:to-indigo-950 text-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-indigo-500 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <a href="#home" className="text-3xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Pankaj.
            </a>
            <p className="text-gray-400 mt-3 text-sm max-w-md">
              Digital Marketing Manager & Web Developer — Actively seeking new opportunities 🚀
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a href="#about" className="text-gray-400 hover:text-indigo-400 transition-all duration-300 text-sm hover:-translate-y-1">About</a>
            <a href="#experience" className="text-gray-400 hover:text-indigo-400 transition-all duration-300 text-sm hover:-translate-y-1">Experience</a>
            <a href="#resume" className="text-gray-400 hover:text-indigo-400 transition-all duration-300 text-sm hover:-translate-y-1">Resume</a>
            <a href="#projects" className="text-gray-400 hover:text-indigo-400 transition-all duration-300 text-sm hover:-translate-y-1">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-indigo-400 transition-all duration-300 text-sm hover:-translate-y-1">Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-4 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-full text-white hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-2"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-2">
            © 2026 Pankaj — Actively seeking new opportunities 🚀
          </p>
        </div>
      </div>
    </footer>
  );
}
