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
      // Animate title letters
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

      // Animate subtitle
      if (subtitleRef.current) {
        gsap.from(subtitleRef.current, {
          opacity: 0,
          y: 30,
          duration: 1,
          delay: 1,
          ease: 'power3.out',
        });
      }

      // Parallax effect on scroll
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
      className="min-h-screen flex items-center relative overflow-hidden pt-20"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
    >
      {/* Organic blob shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-20 left-10 w-96 h-96 bg-purple-400/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -90, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-20 right-10 w-[500px] h-[500px] bg-pink-400/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Asymmetric */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="inline-block"
            >
              <span className="px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-semibold border border-white/20">
                ✨ Welcome to my world
              </span>
            </motion.div>

            <h1
              ref={titleRef}
              className="text-6xl sm:text-7xl lg:text-8xl font-black text-white leading-none"
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
              className="text-2xl sm:text-3xl text-white/90 font-light leading-relaxed"
            >
              Digital Marketing Manager crafting{' '}
              <span className="font-bold bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
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
                className="group px-8 py-4 bg-white text-purple-600 rounded-full font-bold hover:shadow-2xl transition-all duration-300 hover:scale-105"
              >
                See My Work
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
              </a>
              <a
                href="#contact"
                className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full font-bold border-2 border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                Let's Chat 💬
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="flex gap-6 pt-4"
            >
              <a
                href="mailto:pankajsengar071@gmail.com"
                className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20"
              >
                <Mail size={20} />
              </a>
              <a
                href="tel:+917557435690"
                className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20"
              >
                <Phone size={20} />
              </a>
              <a
                href="https://linkedin.com/in/pankajsengar071"
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20"
              >
                <Linkedin size={20} />
              </a>
              <a
                href="#resume"
                className="w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20"
              >
                <FileText size={20} />
              </a>
            </motion.div>
          </div>

          {/* Right - 3D Image with Tilt */}
          <div className="flex justify-center lg:justify-end">
            <TiltCard intensity={20} className="relative">
              <div
                ref={imageRef}
                className="relative w-80 h-80 lg:w-96 lg:h-96"
              >
                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-pink-500 rounded-3xl blur-2xl opacity-50 animate-pulse" />
                
                {/* Main image container */}
                <div className="relative w-full h-full bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-xl rounded-3xl border-2 border-white/30 overflow-hidden shadow-2xl">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=800&fit=crop&crop=face"
                    alt="Pankaj"
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-purple-600/40 to-transparent" />
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
                  className="absolute -top-4 -right-4 bg-white rounded-2xl p-4 shadow-2xl"
                  style={{ transform: 'translateZ(80px)' }}
                >
                  <div className="text-center">
                    <div className="text-3xl font-black text-purple-600">3.5+</div>
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
                  className="absolute -bottom-4 -left-4 bg-white rounded-2xl p-4 shadow-2xl"
                  style={{ transform: 'translateZ(80px)' }}
                >
                  <div className="text-center">
                    <div className="text-3xl font-black text-pink-600">12+</div>
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
            <ArrowDown className="text-white/60" size={32} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
