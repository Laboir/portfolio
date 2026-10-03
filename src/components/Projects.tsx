import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TiltCard from './TiltCard';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';

gsap.registerPlugin(ScrollTrigger);

const categories = [
  { key: 'all', label: 'All Projects' },
  { key: 'marketing', label: '📣 SEO & Marketing' },
  { key: 'webdev', label: '🌐 Web Development' },
  { key: 'content', label: '📝 Content' },
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
      // Animate project cards on scroll
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
      className="py-32 relative overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #ffffff 0%, #f1f5f9 100%)',
      }}
    >
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl" />
      </div>

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
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
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
                  ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-xl shadow-purple-500/30'
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
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full cursor-pointer"
              >
                {/* Project Image/Icon Area */}
                <div
                  className={`h-56 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}
                >
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
                    <h3 className="text-2xl font-black text-gray-900 group-hover:text-purple-600 transition-colors">
                      {project.title}
                    </h3>
                    <ArrowUpRight
                      className="text-gray-400 group-hover:text-purple-600 transition-colors transform group-hover:translate-x-1 group-hover:-translate-y-1"
                      size={24}
                    />
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.shortDescription}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.slice(0, 4).map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 text-sm font-semibold bg-gray-100 text-gray-700 rounded-full hover:bg-purple-100 hover:text-purple-700 transition-colors cursor-default"
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
