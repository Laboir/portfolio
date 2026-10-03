import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import TiltCard from './TiltCard';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-stack e-commerce platform with real-time inventory management, payment processing, and an admin dashboard.',
    image: '🛒',
    tags: ['Next.js', 'TypeScript', 'Stripe', 'PostgreSQL'],
    color: 'from-blue-500 to-cyan-500',
    link: '#',
    github: '#',
  },
  {
    title: 'AI Chat Application',
    description: 'An intelligent chat application powered by GPT-4 with context awareness, file uploads, and conversation history.',
    image: '🤖',
    tags: ['React', 'OpenAI', 'Node.js', 'WebSocket'],
    color: 'from-purple-500 to-pink-500',
    link: '#',
    github: '#',
  },
  {
    title: 'Project Management Tool',
    description: 'A collaborative project management tool with Kanban boards, time tracking, and team analytics.',
    image: '📋',
    tags: ['Vue.js', 'GraphQL', 'MongoDB', 'Docker'],
    color: 'from-green-500 to-emerald-500',
    link: '#',
    github: '#',
  },
  {
    title: 'Social Media Dashboard',
    description: 'A comprehensive analytics dashboard for social media managers with real-time data visualization.',
    image: '📊',
    tags: ['React', 'D3.js', 'Python', 'Redis'],
    color: 'from-orange-500 to-red-500',
    link: '#',
    github: '#',
  },
  {
    title: 'Fitness Tracking App',
    description: 'A mobile-first fitness tracking application with workout plans, progress tracking, and social features.',
    image: '💪',
    tags: ['React Native', 'Firebase', 'TypeScript', 'Tailwind'],
    color: 'from-indigo-500 to-blue-500',
    link: '#',
    github: '#',
  },
  {
    title: 'Weather Visualization',
    description: 'An interactive weather application with beautiful data visualizations and 7-day forecasts.',
    image: '🌤️',
    tags: ['Next.js', 'Chart.js', 'Weather API', 'Tailwind'],
    color: 'from-teal-500 to-cyan-500',
    link: '#',
    github: '#',
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);

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
  }, []);

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
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
            Featured{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <TiltCard key={project.title} intensity={12} className="project-card">
              <div className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full">
                {/* Project Image/Icon Area */}
                <div
                  className={`h-56 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}
                >
                  <span className="text-7xl transform group-hover:scale-125 transition-transform duration-500">
                    {project.image}
                  </span>
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={project.link}
                      className="p-4 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform shadow-xl"
                    >
                      <ExternalLink size={24} />
                    </a>
                    <a
                      href={project.github}
                      className="p-4 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform shadow-xl"
                    >
                      <Github size={24} />
                    </a>
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
                  <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-4 py-2 text-sm font-semibold bg-gray-100 text-gray-700 rounded-full hover:bg-purple-100 hover:text-purple-700 transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
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
