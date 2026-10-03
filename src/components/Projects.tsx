import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TiltCard from './TiltCard';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { key: 'all', label: 'All Projects' },
  { key: 'marketing', label: 'SEO & Marketing' },
  { key: 'webdev', label: 'Web Development' },
  { key: 'content', label: 'Content' },
];

type Props = {
  onProjectClick: (id: string) => void;
};

export default function Projects({ onProjectClick }: Props) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.project-card').forEach((card: any, i: number) => {
        gsap.from(card, {
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none reverse',
          },
          opacity: 0,
          y: 100,
          rotationX: 30,
          duration: 0.8,
          delay: i * 0.1,
          ease: 'power3.out',
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [activeCategory]);

  return (
    <section
      ref={sectionRef}
      id="projects"
      className="py-32 relative overflow-hidden bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
            Featured{' '}
            <span className="text-indigo-600">
              Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto rounded-full" />
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            Real projects I've worked on — click any project to see the full case study
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 ${
                activeCategory === cat.key
                  ? 'bg-gray-900 text-white shadow-lg'
                  : 'bg-white text-gray-700 hover:bg-gray-100 border-2 border-gray-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <TiltCard key={project.id} intensity={12} className="project-card">
              <div 
                onClick={() => onProjectClick(project.id)}
                className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 h-full cursor-pointer border-2 border-gray-200 hover:border-gray-900"
              >
                {/* Project Image/Icon Area */}
                <div className="h-56 bg-gray-100 flex items-center justify-center relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover opacity-80 group-hover:opacity-30 group-hover:scale-110 transition-all duration-500"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                  
                  {/* Hover Overlay with Project Details */}
                  <div className="absolute inset-0 flex flex-col justify-end p-5 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="text-3xl">{project.emoji}</span>
                        <span className="text-white font-bold text-xl">{project.title}</span>
                      </div>
                      <div className="bg-white/10 backdrop-blur-md rounded-xl p-3 space-y-1 border border-white/20">
                        <p className="text-white/90 text-xs">
                          <span className="font-semibold">Role:</span> {project.role}
                        </p>
                        <p className="text-white/90 text-xs">
                          <span className="font-semibold">Type:</span> {project.projectType}
                        </p>
                        {project.technologies && (
                          <p className="text-white/90 text-xs">
                            <span className="font-semibold">Tech:</span> {project.technologies.slice(0, 3).join(', ')}
                          </p>
                        )}
                      </div>
                      <div className="flex items-center justify-between pt-2">
                        <span className="text-white text-sm font-semibold">View Full Case Study →</span>
                        <ArrowUpRight className="text-white" size={20} />
                      </div>
                    </div>
                  </div>

                  {/* Status Badge - Always Visible */}
                  <div className="absolute top-3 right-3">
                    <span className={`px-3 py-1.5 text-xs font-semibold rounded-full shadow-lg ${
                      project.status === 'Live' 
                        ? 'bg-green-500 text-white' 
                        : 'bg-yellow-500 text-white'
                    }`}>
                      {project.status === 'Live' ? '● Live' : '◐ In Progress'}
                    </span>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-2xl font-black text-gray-900 group-hover:text-indigo-600 transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      className="text-gray-400 group-hover:text-indigo-600 transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      size={24}
                    />
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.shortDescription}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 text-sm font-semibold bg-gray-100 text-gray-700 rounded-full hover:bg-gray-900 hover:text-white transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="px-4 py-2 text-sm font-semibold bg-gray-100 text-gray-500 rounded-full">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            </TiltCard>
          ))}
        </div>
      </div>
    </section>
  );
}
