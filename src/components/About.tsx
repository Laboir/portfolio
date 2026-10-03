import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TiltCard from './TiltCard';
import { Code2, Palette, Zap, Target } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.about-card').forEach((card: any, i: number) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 100,
          rotationY: 45,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power3.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable code with best practices',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive and beautiful user interfaces',
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing for speed and exceptional user experience',
    },
    {
      icon: Target,
      title: 'Results-Driven',
      description: 'Focused on delivering measurable business outcomes',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-32 relative overflow-hidden bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
            About{' '}
            <span className="text-indigo-600">
              Me
            </span>
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image with 3D effect */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <TiltCard intensity={10} className="relative">
              <div className="relative">
                {/* Main image container */}
                <div className="relative bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-200">
                  <div className="aspect-square rounded-2xl bg-gray-100 flex items-center justify-center overflow-hidden">
                    <div className="text-center p-8">
                      <div className="text-9xl mb-6">👨‍💻</div>
                      <div className="space-y-3">
                        <div className="flex items-center justify-center gap-2">
                          <div className="w-3 h-3 rounded-full bg-red-500" />
                          <div className="w-3 h-3 rounded-full bg-yellow-500" />
                          <div className="w-3 h-3 rounded-full bg-green-500" />
                        </div>
                        <div className="font-mono text-sm text-gray-600 mt-6 space-y-2 text-left">
                          <p>
                            <span className="text-indigo-600 font-semibold">const</span>{' '}
                            <span className="text-blue-600 font-semibold">developer</span> = {'{'}
                          </p>
                          <p className="pl-4">
                            <span className="text-green-600 font-semibold">name</span>:{' '}
                            <span className="text-orange-600">"Pankaj"</span>,
                          </p>
                          <p className="pl-4">
                            <span className="text-green-600 font-semibold">role</span>:{' '}
                            <span className="text-orange-600">"Digital Marketing Manager"</span>,
                          </p>
                          <p className="pl-4">
                            <span className="text-green-600 font-semibold">experience</span>:{' '}
                            <span className="text-indigo-600">3.5</span>,
                          </p>
                          <p className="pl-4">
                            <span className="text-green-600 font-semibold">passion</span>:{' '}
                            <span className="text-orange-600">"Building things"</span>
                          </p>
                          <p>{'}'}</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Floating stats */}
                  <div className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border-2 border-gray-100">
                    <div className="text-center">
                      <div className="text-2xl font-black text-gray-900">300%</div>
                      <div className="text-xs text-gray-600 font-semibold">Traffic Growth</div>
                    </div>
                  </div>

                  <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl border-2 border-gray-100">
                    <div className="text-center">
                      <div className="text-2xl font-black text-gray-900">3.1%</div>
                      <div className="text-xs text-gray-600 font-semibold">Avg CTR</div>
                    </div>
                  </div>
                </div>
              </div>
            </TiltCard>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-4xl font-black text-gray-900 mb-6 leading-tight">
              A passionate developer based in{' '}
              <span className="text-indigo-600">
                India
              </span>
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              With over 3.5 years of experience in web development, I specialize in building modern,
              responsive applications using cutting-edge technologies. I'm passionate about creating
              seamless user experiences and writing clean, efficient code.
            </p>
            <p className="text-lg text-gray-600 mb-10 leading-relaxed">
              When I'm not coding, you can find me exploring new technologies, contributing to
              open-source projects, or sharing knowledge through blog posts and tech talks. I believe
              in continuous learning and pushing the boundaries of what's possible on the web.
            </p>

            <div className="grid grid-cols-2 gap-6">
              {highlights.map((item, index) => (
                <TiltCard key={item.title} intensity={8} className="about-card">
                  <div
                    className="p-6 rounded-2xl bg-white border-2 border-gray-200 hover:border-gray-900 transition-all duration-300 group"
                  >
                    <div
                      className="w-14 h-14 rounded-xl bg-gray-100 flex items-center justify-center mb-4 group-hover:bg-gray-900 transition-colors duration-300"
                    >
                      <item.icon className="text-gray-700 group-hover:text-white" size={28} />
                    </div>
                    <h4 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-gray-600">{item.description}</p>
                  </div>
                </TiltCard>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
