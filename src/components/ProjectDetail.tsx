import React from 'react';
import { ArrowLeft, ExternalLink, FileSpreadsheet, FileText, CheckCircle, Code, Tag, Briefcase, Activity } from 'lucide-react';
import { Project } from '../data/projects';

type Props = {
  project: Project;
  onBack: () => void;
};

export default function ProjectDetail({ project, onBack }: Props) {
  return (
    <section className="pt-24 pb-20 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back Button */}
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-indigo-500 transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Projects</span>
        </button>

        {/* Hero Section */}
        <div className={`relative rounded-3xl overflow-hidden mb-8 bg-gradient-to-br ${project.color} p-8 sm:p-12`}>
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">{project.emoji}</span>
              <div>
                <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
                  project.status === 'Live' 
                    ? 'bg-green-500/20 text-green-100 border border-green-400/30' 
                    : 'bg-yellow-500/20 text-yellow-100 border border-yellow-400/30'
                }`}>
                  {project.status === 'Live' ? '● Live' : '◐ In Progress'}
                </span>
              </div>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-white/90 text-lg max-w-3xl">
              {project.shortDescription}
            </p>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                <ExternalLink size={18} />
                Visit Live Website
              </a>
            )}
          </div>
        </div>

        {/* Project Meta Info */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2 text-indigo-500 mb-2">
              <Briefcase size={16} />
              <span className="text-xs font-medium uppercase tracking-wide">My Role</span>
            </div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">{project.role}</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2 text-indigo-500 mb-2">
              <Tag size={16} />
              <span className="text-xs font-medium uppercase tracking-wide">Project Type</span>
            </div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">{project.projectType}</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2 text-indigo-500 mb-2">
              <Activity size={16} />
              <span className="text-xs font-medium uppercase tracking-wide">Status</span>
            </div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">{project.status}</p>
          </div>
          {project.technologies && (
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-2 text-indigo-500 mb-2">
                <Code size={16} />
                <span className="text-xs font-medium uppercase tracking-wide">Tech Stack</span>
              </div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">{project.technologies.join(', ')}</p>
            </div>
          )}
        </div>

        {/* Overview */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="w-8 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" />
            Overview
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            {project.overview}
          </p>
        </div>

        {/* What I Did */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" />
            What I Did
          </h2>
          <div className="space-y-4">
            {project.whatIDid.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-500 font-bold text-sm">
                  {index + 1}
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* What It Shows */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" />
            What It Shows
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {project.whatItShows.map((item, index) => (
              <div
                key={index}
                className="flex gap-3 p-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl border border-indigo-100 dark:border-indigo-800/50"
              >
                <CheckCircle className="text-indigo-500 flex-shrink-0 mt-0.5" size={20} />
                <p className="text-gray-700 dark:text-gray-300 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sheets & Reports */}
        {(project.sheets || project.reports) && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" />
              Documents & Sheets
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.sheets?.map((sheet, index) => (
                <a
                  key={index}
                  href={sheet.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-700 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                    <FileSpreadsheet className="text-green-600 dark:text-green-400" size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors truncate">
                      {sheet.label}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Google Sheets →</p>
                  </div>
                </a>
              ))}
              {project.reports?.map((report, index) => (
                <a
                  key={index}
                  href={report.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                    <FileText className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                      {report.label}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Google Docs →</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        {/* Tags */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="w-8 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" />
            Skills Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center pt-8 border-t border-gray-100 dark:border-gray-800">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Interested in working together?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all hover:-translate-y-0.5"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
}
