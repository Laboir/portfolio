import React, { useState } from 'react';
import { ExternalLink, ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';

type Props = {
  onProjectClick: (id: string) => void;
};

const categories = [
  { key: 'all', label: 'All Projects' },
  { key: 'marketing', label: '📣 SEO & Marketing' },
  { key: 'webdev', label: '🌐 Web Development' },
  { key: 'content', label: '📝 Content' },
];

export default function Projects({ onProjectClick }: Props) {
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
            Real projects I've worked on — click any project to see the full case study with sheets, reports & more
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
            <button
              key={project.id}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onProjectClick(project.id);
              }}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-3 cursor-pointer relative text-left w-full"
            >
              {/* Project Image Area */}
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-30 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                {/* Hover Overlay with Project Details */}
                <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{project.emoji}</span>
                      <span className="text-white font-bold text-lg">{project.title}</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 space-y-1">
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
                      <span className="text-white text-sm font-medium">View Full Case Study →</span>
                      <ArrowUpRight className="text-white" size={20} />
                    </div>
                  </div>
                </div>

                {/* Status Badge - Always Visible */}
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${
                    project.status === 'Live' 
                      ? 'bg-green-500/90 text-white' 
                      : 'bg-yellow-500/90 text-white'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed line-clamp-2">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                  <span className="text-sm font-medium text-indigo-500 group-hover:text-indigo-600 transition-colors">
                    View Case Study →
                  </span>
                  <ArrowUpRight className="text-gray-400 group-hover:text-indigo-500 transition-colors" size={18} />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
