import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              AC.
            </a>
            <p className="text-gray-400 mt-2 text-sm">
              Building digital experiences that matter.
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">About</a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 bg-indigo-500/20 rounded-full text-indigo-400 hover:bg-indigo-500/30 transition-colors hover:-translate-y-1 transform duration-300"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm flex items-center justify-center gap-1">
            © 2024 Alex Chen. Made with <Heart size={14} className="text-red-400 fill-red-400" /> and lots of coffee.
          </p>
        </div>
      </div>
    </footer>
  );
}
