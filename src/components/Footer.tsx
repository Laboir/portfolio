import React from 'react';
import { motion } from 'framer-motion';
import { Heart, ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-center md:text-left">
            <a href="#home" className="text-4xl font-black bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Pankaj.
            </a>
            <p className="text-gray-400 mt-3 text-lg">
              Digital Marketing Manager & Web Developer
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a href="#about" className="text-gray-400 hover:text-white transition-colors font-semibold">About</a>
            <a href="#skills" className="text-gray-400 hover:text-white transition-colors font-semibold">Skills</a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors font-semibold">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors font-semibold">Contact</a>
          </div>

          <motion.button
            onClick={scrollToTop}
            whileHover={{ y: -5 }}
            className="p-4 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full text-white hover:shadow-2xl transition-shadow"
          >
            <ArrowUp size={24} />
          </motion.button>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p className="text-gray-400 text-lg flex items-center justify-center gap-2">
            © 2024 Pankaj. Made with <Heart size={20} className="text-red-500 fill-red-500" /> and lots of coffee
          </p>
        </div>
      </div>
    </footer>
  );
}
