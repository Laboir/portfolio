import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TiltCard from './TiltCard';
import { Briefcase, Calendar } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    title: 'Digital Marketing Manager + Next.js Developer',
    company: 'Jai Ambay Etching Process',
    type: 'Full-time',
    period: 'January 2026 — Present',
    current: true,
    description: 'Managing complete digital marketing operations while also developing and maintaining the company website using Next.js.',
  },
  {
    title: 'Digital Marketer',
    company: 'Hommy Pvt. Ltd',
    type: 'Full-time',
    period: 'January 2025 — December 2025',
    current: false,
    description: 'Handled brand campaigns, content writing, website management, web development, and SEO strategy.',
  },
  {
    title: 'SEO Executive',
    company: 'Ayuvya Ayurveda',
    type: 'Full-time',
    period: 'April 2023 — November 2024',
    current: false,
    description: 'Managed on-page and off-page SEO, Google Analytics tracking, content writing, and Google Search Console optimization.',
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.exp-card').forEach((card: any, i: number) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          x: i % 2 === 0 ? -100 : 100,
          rotationY: i % 2 === 0 ? -20 : 20,
          duration: 0.8,
          ease: 'power3.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="py-32 relative overflow-hidden bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
            Work{' '}
            <span className="text-indigo-600">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto rounded-full" />
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey so far
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => (
            <TiltCard key={index} intensity={5} className="exp-card">
              <div className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border-2 border-gray-200 hover:border-gray-900">
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div>
                    <h3 className="text-2xl font-black text-gray-900 mb-2">{exp.title}</h3>
                    <p className="text-xl font-bold text-indigo-600">
                      {exp.company}
                    </p>
                  </div>
                  {exp.current && (
                    <span className="px-4 py-2 text-sm font-bold bg-green-100 text-green-700 rounded-full border-2 border-green-200">
                      ● Current
                    </span>
                  )}
                </div>

                <div className="flex flex-wrap items-center gap-6 mb-4 text-gray-500">
                  <span className="flex items-center gap-2">
                    <Calendar size={18} />
                    {exp.period}
                  </span>
                  <span className="flex items-center gap-2">
                    <Briefcase size={18} />
                    {exp.type}
                  </span>
                </div>

                <p className="text-lg text-gray-600 leading-relaxed">{exp.description}</p>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
