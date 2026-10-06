import React from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink, FileSpreadsheet, FileText, CheckCircle, Code, Tag, Briefcase, Activity } from 'lucide-react';
import { Project } from '../data/projects';
import TiltCard from './TiltCard';

type Props = {
  project: Project;
  onBack: () => void;
};

export default function ProjectDetail({ project, onBack }: Props) {
  return (
    <section className="pt-32 pb-20 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <motion.button
          onClick={onBack}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 text-gray-600 hover:text-indigo-600 transition-colors mb-8 group font-semibold cursor-pointer"
        >
          <ArrowLeft size={24} className="group-hover:-translate-x-1 transition-transform" />
          <span>Back to Projects</span>
        </motion.button>

        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <TiltCard intensity={4}>
            <div className={`relative rounded-3xl overflow-hidden mb-12 bg-gradient-to-br ${project.color} p-12 shadow-2xl`}>
              <div className="absolute inset-0 bg-black/20" />
              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-7xl">{project.emoji}</span>
                  <div>
                    <span className={`inline-block px-4 py-2 text-sm font-bold rounded-full ${
                      project.status === 'Live' 
                        ? 'bg-green-500/20 text-green-100 border-2 border-green-400/30' 
                        : 'bg-yellow-500/20 text-yellow-100 border-2 border-yellow-400/30'
                    }`}>
                      {project.status === 'Live' ? '● Live' : '◐ In Progress'}
                    </span>
                  </div>
                </div>
                <h1 className="text-5xl sm:text-6xl font-black text-white mb-6">
                  {project.title}
                </h1>
                <p className="text-white/90 text-xl max-w-3xl leading-relaxed">
                  {project.shortDescription}
                </p>
                {project.liveUrl && (
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 mt-8 px-8 py-4 bg-white text-gray-900 rounded-2xl font-bold hover:shadow-2xl transition-all hover:scale-105 text-lg cursor-pointer"
                  >
                    <ExternalLink size={22} />
                    Visit Live Website
                  </a>
                )}
              </div>
            </div>
          </TiltCard>
        </motion.div>

        {/* Project Meta Info */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-2xl p-6 border-2 border-gray-100 shadow-lg"
          >
            <div className="flex items-center gap-3 text-indigo-600 mb-3">
              <Briefcase size={20} />
              <span className="text-xs font-bold uppercase tracking-wide">My Role</span>
            </div>
            <p className="text-lg font-bold text-gray-900">{project.role}</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-2xl p-6 border-2 border-gray-100 shadow-lg"
          >
            <div className="flex items-center gap-3 text-indigo-600 mb-3">
              <Tag size={20} />
              <span className="text-xs font-bold uppercase tracking-wide">Project Type</span>
            </div>
            <p className="text-lg font-bold text-gray-900">{project.projectType}</p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-2xl p-6 border-2 border-gray-100 shadow-lg"
          >
            <div className="flex items-center gap-3 text-indigo-600 mb-3">
              <Activity size={20} />
              <span className="text-xs font-bold uppercase tracking-wide">Status</span>
            </div>
            <p className="text-lg font-bold text-gray-900">{project.status}</p>
          </motion.div>
          
          {project.technologies && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-6 border-2 border-gray-100 shadow-lg"
            >
              <div className="flex items-center gap-3 text-indigo-600 mb-3">
                <Code size={20} />
                <span className="text-xs font-bold uppercase tracking-wide">Tech Stack</span>
              </div>
              <p className="text-lg font-bold text-gray-900">{project.technologies.join(', ')}</p>
            </motion.div>
          )}
        </div>

        {/* Overview */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-black text-gray-900 mb-6 flex items-center gap-4">
            <span className="w-12 h-2 bg-indigo-600 rounded-full" />
            Overview
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            {project.overview}
          </p>
        </motion.div>

        {/* What I Did */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-black text-gray-900 mb-8 flex items-center gap-4">
            <span className="w-12 h-2 bg-indigo-600 rounded-full" />
            What I Did
          </h2>
          <div className="space-y-4">
            {project.whatIDid.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-white rounded-2xl border-2 border-gray-100 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center text-white font-black text-sm">
                  {index + 1}
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* What It Shows */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-black text-gray-900 mb-8 flex items-center gap-4">
            <span className="w-12 h-2 bg-indigo-600 rounded-full" />
            What It Shows
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {project.whatItShows.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex gap-4 p-6 bg-indigo-50 rounded-2xl border-2 border-indigo-100"
              >
                <CheckCircle className="text-indigo-600 flex-shrink-0 mt-1" size={24} />
                <p className="text-lg text-gray-700 font-semibold">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Sheets & Reports */}
        {(project.sheets || project.reports) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-4xl font-black text-gray-900 mb-8 flex items-center gap-4">
              <span className="w-12 h-2 bg-indigo-600 rounded-full" />
              Documents & Sheets
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.sheets?.map((sheet, index) => (
                <a
                  key={index}
                  href={sheet.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-green-300 hover:shadow-xl transition-all group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <FileSpreadsheet className="text-green-600" size={28} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-gray-900 group-hover:text-green-600 transition-colors truncate text-lg">
                      {sheet.label}
                    </p>
                    <p className="text-sm text-gray-500">Google Sheets →</p>
                  </div>
                </a>
              ))}
              {project.reports?.map((report, index) => (
                <a
                  key={index}
                  href={report.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-6 bg-white rounded-2xl border-2 border-gray-100 hover:border-blue-300 hover:shadow-xl transition-all group cursor-pointer"
                >
                  <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <FileText className="text-blue-600" size={28} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-bold text-gray-900 group-hover:text-blue-600 transition-colors truncate text-lg">
                      {report.label}
                    </p>
                    <p className="text-sm text-gray-500">Google Docs →</p>
                  </div>
                </a>
              ))}
            </div>
          </motion.div>
        )}

        {/* Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-black text-gray-900 mb-6 flex items-center gap-4">
            <span className="w-12 h-2 bg-indigo-600 rounded-full" />
            Skills Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-6 py-3 bg-white rounded-full text-base font-bold text-gray-700 border-2 border-gray-200 hover:border-indigo-300 hover:text-indigo-600 transition-colors"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center pt-12 border-t-2 border-gray-100"
        >
          <p className="text-xl text-gray-600 mb-6">
            Interested in working together?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
            className="inline-flex items-center gap-3 px-10 py-5 bg-gray-900 text-white rounded-2xl font-black text-lg hover:bg-gray-800 hover:shadow-2xl transition-all hover:scale-105 cursor-pointer"
          >
            Let's Connect
          </a>
        </motion.div>
      </div>
    </section>
  );
}
