import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TiltCard from './TiltCard';
import { Mail, Phone, Linkedin, FileText, ArrowDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (titleRef.current) {
        const letters = titleRef.current.querySelectorAll('.letter');
        gsap.from(letters, {
          opacity: 0,
          y: 50,
          rotationX: -90,
          stagger: 0.05,
          duration: 0.8,
          ease: 'back.out(1.7)',
          delay: 0.3,
        });
      }

      if (subtitleRef.current) {
        gsap.from(subtitleRef.current, {
          opacity: 0,
          y: 30,
          duration: 1,
          delay: 1,
          ease: 'power3.out',
        });
      }

      if (imageRef.current) {
        gsap.to(imageRef.current, {
          y: -100,
          scrollTrigger: {
            trigger: containerRef.current,
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const titleText = "Hi, I'm Pankaj";

  return (
    <section
      ref={containerRef}
      id="home"
      className="min-h-screen flex items-center relative overflow-hidden pt-20 bg-white"
    >
      {/* Subtle background shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 45, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.1, 1, 1.1],
            rotate: [0, -45, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-indigo-50 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block"
            >
              <span className="px-6 py-3 bg-gray-100 rounded-full text-gray-700 text-sm font-semibold">
                ✨ Welcome to my portfolio
              </span>
            </motion.div>

            <h1
              ref={titleRef}
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 leading-none"
              style={{ perspective: '1000px' }}
            >
              {titleText.split('').map((char, i) => (
                <span
                  key={i}
                  className="letter inline-block"
                  style={{ display: char === ' ' ? 'inline' : 'inline-block' }}
                >
                  {char === ' ' ? '\u00A0' : char}
                </span>
              ))}
            </h1>

            <p
              ref={subtitleRef}
              className="text-xl sm:text-2xl text-gray-600 font-light leading-relaxed"
            >
              Digital Marketing Manager crafting{' '}
              <span className="font-bold text-indigo-600">
                unique digital experiences
              </span>{' '}
              with 3.5+ years of magic ✨
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="#projects"
                className="group px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-800 transition-all duration-300 hover:scale-105"
              >
                See My Work
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white text-gray-900 rounded-full font-bold border-2 border-gray-200 hover:border-gray-900 transition-all duration-300 hover:scale-105"
              >
                Let's Chat 💬
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="flex gap-4 pt-4"
            >
              <a
                href="mailto:pankajsengar071@gmail.com"
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:scale-110 transition-all duration-300"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:+917557435690"
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:scale-110 transition-all duration-300"
              >
                <Phone size={20} />
              </a>
              <a
                href="https://linkedin.com/in/pankajsengar071"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:scale-110 transition-all duration-300"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#resume"
                className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center text-gray-700 hover:bg-gray-200 hover:scale-110 transition-all duration-300"
              >
                <FileText size={20} />
              </a>
            </motion.div>
          </div>

          {/* Right - 3D Image with Tilt */}
          <div className="flex justify-center lg:justify-end">
            <TiltCard intensity={8} className="relative">
              <div
                ref={imageRef}
                className="relative w-80 h-80 lg:w-96 lg:h-96"
              >
                {/* Subtle background */}
                <div className="absolute inset-0 bg-gray-100 rounded-3xl blur-2xl" />
                
                {/* Main image container */}
                <div className="relative w-full h-full bg-white rounded-3xl border-2 border-gray-200 overflow-hidden shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&crop=face"
                    alt="Pankaj"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Floating badges */}
                <motion.div
                  animate={{
                    y: [0, -10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                  }}
                  className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-xl border-2 border-gray-100"
                  style={{ transform: 'translateZ(80px)' }}
                >
                  <div className="text-center">
                    <div className="text-3xl font-black text-gray-900">3.5+</div>
                    <div className="text-xs text-gray-600 font-semibold">Years Exp</div>
                  </div>
                </motion.div>

                <motion.div
                  animate={{
                    y: [0, 10, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: 1,
                  }}
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-xl border-2 border-gray-100"
                  style={{ transform: 'translateZ(80px)' }}
                >
                  <div className="text-center">
                    <div className="text-3xl font-black text-gray-900">12+</div>
                    <div className="text-xs text-gray-600 font-semibold">Projects</div>
                  </div>
                </motion.div>
              </div>
            </TiltCard>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <ArrowDown className="text-gray-400" size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
