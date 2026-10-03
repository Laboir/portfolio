import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TiltCard from './TiltCard';

gsap.registerPlugin(ScrollTrigger);

const skillCategories = [
  {
    title: 'Frontend',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'React', level: 95 },
      { name: 'TypeScript', level: 90 },
      { name: 'Next.js', level: 88 },
      { name: 'Tailwind CSS', level: 92 },
      { name: 'Vue.js', level: 75 },
    ],
  },
  {
    title: 'Backend',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Node.js', level: 90 },
      { name: 'Python', level: 85 },
      { name: 'PostgreSQL', level: 82 },
      { name: 'GraphQL', level: 78 },
      { name: 'Docker', level: 80 },
    ],
  },
  {
    title: 'Tools & Others',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Git', level: 92 },
      { name: 'AWS', level: 78 },
      { name: 'Figma', level: 70 },
      { name: 'CI/CD', level: 82 },
      { name: 'Testing', level: 85 },
    ],
  },
];

const techLogos = [
  'React', 'TypeScript', 'Node.js', 'Python', 'Next.js',
  'Tailwind', 'PostgreSQL', 'Docker', 'AWS', 'Git',
  'GraphQL', 'Redis', 'MongoDB', 'Figma', 'Vercel'
];

export default function Skills() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate skill cards on scroll
      gsap.utils.toArray('.skill-card').forEach((card: any, i: number) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 80,
          rotationY: -30,
          duration: 0.8,
          delay: i * 0.15,
          ease: 'power3.out',
        });
      });

      // Animate tech tags
      gsap.utils.toArray('.tech-tag').forEach((tag: any, i: number) => {
        gsap.from(tag, {
          scrollTrigger: {
            trigger: tag,
            start: 'top 90%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          scale: 0.5,
          rotation: Math.random() * 20 - 10,
          duration: 0.6,
          delay: i * 0.05,
          ease: 'back.out(1.7)',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-32 relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [0, -180, 0],
          }}
          transition={{
            duration: 35,
            repeat: Infinity,
            ease: 'linear',
          }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-white/10 rounded-full blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-black text-white mb-6">
            My{' '}
            <span className="bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-yellow-300 to-pink-300 mx-auto rounded-full" />
          <p className="mt-6 text-xl text-white/90 max-w-2xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        {/* Tech Tags */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-20"
        >
          {techLogos.map((tech) => (
            <div
              key={tech}
              className="tech-tag px-6 py-3 bg-white/10 backdrop-blur-md rounded-full text-white font-semibold border-2 border-white/20 hover:bg-white/20 hover:scale-110 transition-all duration-300 cursor-default shadow-lg"
            >
              {tech}
            </div>
          ))}
        </motion.div>

        {/* Skill Bars */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <TiltCard key={category.title} intensity={10} className="skill-card">
              <div className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border-2 border-white/20 shadow-2xl h-full">
                <h3
                  className={`text-3xl font-black mb-8 bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                >
                  {category.title}
                </h3>
                <div className="space-y-6">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-lg font-semibold text-white">{skill.name}</span>
                        <span className="text-lg font-bold text-white/80">{skill.level}%</span>
                      </div>
                      <div className="w-full h-3 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1.5, ease: 'easeOut' }}
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full shadow-lg`}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
