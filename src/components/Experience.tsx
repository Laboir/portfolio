import React from 'react';
import { motion } from 'framer-motion';
import Timeline from './Timeline';

const experiences = [
  {
    year: 'Jan 2026 - Present',
    title: 'Digital Marketing Manager + Next.js Developer',
    company: 'Jai Ambay Etching Process',
    description: 'Managing complete digital marketing operations while also developing and maintaining the company website using Next.js.',
    current: true,
  },
  {
    year: 'Jan 2025 - Dec 2025',
    title: 'Digital Marketer',
    company: 'Hommy Pvt. Ltd',
    description: 'Handled brand campaigns, content writing, website management, web development, and SEO strategy.',
    current: false,
  },
  {
    year: 'Apr 2023 - Nov 2024',
    title: 'SEO Executive',
    company: 'Ayuvya Ayurveda',
    description: 'Managed on-page and off-page SEO, Google Analytics tracking, content writing, and Google Search Console optimization.',
    current: false,
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-32 relative overflow-hidden bg-white"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
            Work{' '}
            <span className="text-indigo-600">
              Experience
            </span>
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto rounded-full" />
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            My professional journey so far
          </p>
        </motion.div>

        <Timeline items={experiences} />
      </div>
    </section>
  );
}
