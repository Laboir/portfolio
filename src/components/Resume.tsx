import React from 'react';
import { motion } from 'framer-motion';
import { FileDown, GraduationCap, Award, Download } from 'lucide-react';
import TiltCard from './TiltCard';

export default function Resume() {
  return (
    <section id="resume" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
            My{' '}
            <span className="text-indigo-600">
              Resume
            </span>
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto rounded-full" />
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            Education, certifications, and downloadable CV
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Education */}
          <TiltCard intensity={4}>
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 h-full shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                  <GraduationCap className="text-gray-700" size={24} />
                </div>
                <h3 className="text-2xl font-black text-gray-900">Education</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-gray-50 rounded-2xl border-2 border-gray-100">
                  <p className="font-bold text-gray-900">🎓 Master of Computer Science (MCA)</p>
                  <p className="text-indigo-600 font-semibold mt-1">Mangalayatan University</p>
                  <p className="text-sm text-gray-500 mt-1">Expected 2028</p>
                </div>
                <div className="p-4 bg-gray-50 rounded-2xl border-2 border-gray-100">
                  <p className="font-bold text-gray-900">🎓 Bachelor of Computer Science (BCA)</p>
                  <p className="text-indigo-600 font-semibold mt-1">Kalinga University</p>
                  <p className="text-sm text-gray-500 mt-1">2025</p>
                </div>
              </div>
            </div>
          </TiltCard>

          {/* Key Highlights */}
          <TiltCard intensity={4}>
            <div className="bg-white rounded-3xl p-8 border-2 border-gray-200 h-full shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-gray-100 flex items-center justify-center">
                  <Award className="text-gray-700" size={24} />
                </div>
                <h3 className="text-2xl font-black text-gray-900">Highlights</h3>
              </div>
              <div className="space-y-3">
                {[
                  { label: 'Experience', value: '3.5+ Years' },
                  { label: 'Projects Completed', value: '12+' },
                  { label: 'Traffic Growth', value: 'Up to 300%' },
                  { label: 'CTR Achieved', value: 'Up to 3.1%' },
                  { label: 'CPC Reduction', value: 'Up to 22%' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl border-2 border-gray-100">
                    <span className="text-gray-600 font-medium">{item.label}</span>
                    <span className="font-black text-gray-900">{item.value}</span>
                  </div>
                ))}
              </div>
            </div>
          </TiltCard>

          {/* Download CV */}
          <TiltCard intensity={4}>
            <div className="bg-gray-900 rounded-3xl p-8 text-white h-full flex flex-col justify-between shadow-xl">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <FileDown size={24} />
                  </div>
                  <h3 className="text-2xl font-black">Download CV</h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-6 text-lg">
                  Get my complete resume with all experience, skills, projects, and education details.
                </p>
              </div>
              <a
                href="https://app.notion.com/p/My-Resume-32df39a9b5ef8210927901ddd22e7424"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 w-full py-4 bg-white text-gray-900 rounded-2xl font-black hover:bg-gray-100 transition-all hover:scale-105 text-lg"
              >
                <Download size={20} />
                View Full Resume
              </a>
            </div>
          </TiltCard>
        </div>
      </div>
    </section>
  );
}
