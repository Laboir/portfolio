import React from 'react';
import { FileDown, GraduationCap, Award, Download } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="py-20 lg:py-32 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Resume
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Education, certifications, and downloadable CV
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center">
                <GraduationCap className="text-indigo-500" size={20} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-700">
                <p className="font-semibold text-gray-900 dark:text-white">🎓 Master of Computer Science (MCA)</p>
                <p className="text-sm text-indigo-500 dark:text-indigo-400 mt-1">Mangalayatan University</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Expected 2028</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-700">
                <p className="font-semibold text-gray-900 dark:text-white">🎓 Bachelor of Computer Science (BCA)</p>
                <p className="text-sm text-indigo-500 dark:text-indigo-400 mt-1">Kalinga University</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">2025</p>
              </div>
            </div>
          </div>

          {/* Key Highlights */}
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                <Award className="text-purple-500" size={20} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Highlights</h3>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Experience', value: '3.5+ Years' },
                { label: 'Projects Completed', value: '12+' },
                { label: 'Traffic Growth', value: 'Up to 300%' },
                { label: 'CTR Achieved', value: 'Up to 3.1%' },
                { label: 'CPC Reduction', value: 'Up to 22%' },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-700">
                  <span className="text-sm text-gray-600 dark:text-gray-400">{item.label}</span>
                  <span className="font-bold text-indigo-500">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Download CV */}
          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <FileDown size={20} />
                </div>
                <h3 className="text-xl font-bold">Download CV</h3>
              </div>
              <p className="text-white/80 leading-relaxed mb-6">
                Get my complete resume with all experience, skills, projects, and education details.
              </p>
            </div>
            <a
              href="https://app.notion.com/p/My-Resume-32df39a9b5ef8210927901ddd22e7424"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-white text-indigo-600 rounded-xl font-medium hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <Download size={18} />
              View Full Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
