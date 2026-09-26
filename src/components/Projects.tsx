import { motion } from 'framer-motion';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

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
  return (
    <section id="projects" className="py-20 lg:py-32 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Featured{' '}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and experience
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300"
            >
              {/* Project Image/Icon Area */}
              <div className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative overflow-hidden`}>
                <span className="text-6xl">{project.image}</span>
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.link}
                    className="p-3 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform"
                  >
                    <ExternalLink size={20} />
                  </a>
                  <a
                    href={project.github}
                    className="p-3 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform"
                  >
                    <Github size={20} />
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-indigo-500 transition-colors">
                    {project.title}
                  </h3>
                  <ArrowUpRight className="text-gray-400 group-hover:text-indigo-500 transition-colors" size={20} />
                </div>
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
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
