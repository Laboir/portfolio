import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

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
  return (
    <section id="experience" className="py-20 lg:py-32 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work{' '}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            3.5+ years of professional experience in digital marketing and web development
          </p>
        </div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-600 hidden sm:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative flex gap-6 group"
                >
                  {/* Timeline Dot */}
                  <div className="hidden sm:flex flex-shrink-0 w-16 h-16 items-center justify-center">
                    <div className={`w-4 h-4 rounded-full border-4 ${
                      exp.current
                        ? 'bg-green-500 border-green-200 dark:border-green-800'
                        : 'bg-indigo-500 border-indigo-200 dark:border-indigo-800'
                    }`} />
                  </div>

                  {/* Content Card */}
                  <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-300 hover:shadow-lg">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="text-indigo-500 dark:text-indigo-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      {exp.current && (
                        <span className="px-3 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full">
                          Current
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase size={14} />
                        {exp.type}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
