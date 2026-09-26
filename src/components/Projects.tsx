import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';

type Project = {
  title: string;
  emoji: string;
  description: string;
  tags: string[];
  color: string;
  category: 'marketing' | 'webdev' | 'content';
  image?: string;
};

const projects: Project[] = [
  {
    title: 'Jai Ambay Etching Process',
    emoji: '📣',
    description: 'Complete digital marketing management including SEO, Google Analytics, social media, website handling, WordPress development, and content writing.',
    tags: ['SEO', 'Google Analytics', 'Social Media', 'WordPress', 'Web Development', 'Content Writing'],
    color: 'from-blue-500 to-cyan-500',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop',
  },
  {
    title: 'Resort Tent Creation',
    emoji: '🎪',
    description: 'Built and managed a resort tent website with SEO optimization, content creation, Google Analytics integration, and ongoing website handling.',
    tags: ['SEO', 'Web Development', 'Website Handling', 'Content Writing', 'Google Analytics'],
    color: 'from-emerald-500 to-teal-500',
    category: 'webdev',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&h=400&fit=crop',
  },
  {
    title: 'Noblekode',
    emoji: '🚀',
    description: 'Full digital marketing and web development for a tech company — SEO, social media management, content writing, Canva designs, and analytics.',
    tags: ['SEO', 'Web Development', 'Social Media', 'Google Analytics', 'Content Writing', 'Canva'],
    color: 'from-purple-500 to-pink-500',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
  },
  {
    title: 'Tbond',
    emoji: '👛',
    description: 'Managed paid ad campaigns, copywriting, SEO, content writing, and website development for an e-commerce brand.',
    tags: ['Paid Ads', 'Copywriting', 'SEO', 'Content Writing', 'Web Development'],
    color: 'from-orange-500 to-red-500',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
  },
  {
    title: 'Ayuvya Ayurveda',
    emoji: '🧃',
    description: 'SEO Executive role managing on-page and off-page SEO, Google Analytics tracking, content writing, and Google Search Console optimization.',
    tags: ['SEO', 'Google Analytics', 'Content Writing', 'GSC'],
    color: 'from-green-500 to-lime-500',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&h=400&fit=crop',
  },
  {
    title: 'Hommy Pvt. Ltd',
    emoji: '🛖',
    description: 'Digital marketing role handling brand campaigns, content writing, website handling, web development, and SEO strategy.',
    tags: ['Brand Campaign', 'Content Writing', 'Web Development', 'SEO'],
    color: 'from-indigo-500 to-blue-500',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
  },
  {
    title: 'Event Decoration',
    emoji: '🌐',
    description: 'Designed and developed a complete website for an event decoration business with modern UI and responsive design.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Web Development'],
    color: 'from-pink-500 to-rose-500',
    category: 'webdev',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop',
  },
  {
    title: 'Ptfe Non Stick Coating',
    emoji: '🚀',
    description: 'Built a professional website for an industrial PTFE non-stick coating company showcasing products and services.',
    tags: ['Next.js', 'React', 'SEO', 'Web Development'],
    color: 'from-teal-500 to-cyan-500',
    category: 'webdev',
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=400&fit=crop',
  },
  {
    title: 'A4 Resorts and Homestay',
    emoji: '🛖',
    description: 'Developed a booking-friendly website for a resort and homestay business with gallery, rooms showcase, and contact integration.',
    tags: ['Next.js', 'React', 'Web Development', 'SEO'],
    color: 'from-amber-500 to-orange-500',
    category: 'webdev',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
  },
  {
    title: 'Nanhi Shop',
    emoji: '📚',
    description: 'E-commerce web development project for a retail shop with product listings, cart functionality, and payment integration.',
    tags: ['Next.js', 'React', 'E-commerce', 'Web Development'],
    color: 'from-violet-500 to-purple-500',
    category: 'webdev',
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&h=400&fit=crop',
  },
  {
    title: 'Blog Writing',
    emoji: '📔',
    description: 'Created SEO-optimized blog content for multiple clients, driving organic traffic and improving search rankings.',
    tags: ['Content Writing', 'SEO', 'Blog', 'Keyword Research'],
    color: 'from-sky-500 to-blue-500',
    category: 'content',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop',
  },
  {
    title: 'Noble Kode Blog',
    emoji: '📘',
    description: 'Featured blog content creation for Noblekode — technical articles, tutorials, and industry insights to boost organic reach.',
    tags: ['Content Writing', 'SEO', 'Technical Writing', 'Blog'],
    color: 'from-fuchsia-500 to-pink-500',
    category: 'content',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop',
  },
];

const categories = [
  { key: 'all', label: 'All Projects' },
  { key: 'marketing', label: '📣 SEO & Marketing' },
  { key: 'webdev', label: '🌐 Web Development' },
  { key: 'content', label: '📝 Content' },
];

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 lg:py-32 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real projects I've worked on — from SEO campaigns to full website builds
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === cat.key
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/20'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.title}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
            >
              {/* Project Image Area */}
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-3 left-4 flex items-center gap-2">
                  <span className="text-2xl">{project.emoji}</span>
                  <span className="text-white font-bold text-lg">{project.title}</span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
