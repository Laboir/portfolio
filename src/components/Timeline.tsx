import React from 'react';
import { motion } from 'framer-motion';

interface TimelineItem {
  year: string;
  title: string;
  company: string;
  description: string;
  current?: boolean;
}

interface TimelineProps {
  items: TimelineItem[];
}

export default function Timeline({ items }: TimelineProps) {
  return (
    <div className="relative max-w-4xl mx-auto py-8">
      {/* Vertical Line */}
      <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-300 transform md:-translate-x-1/2" />

      {items.map((item, index) => {
        const isLeft = index % 2 === 0;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative mb-12 last:mb-0 flex ${
              isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
            }`}
          >
            {/* Timeline Dot */}
            <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-white border-4 border-indigo-600 rounded-full transform -translate-x-1/2 z-10">
              {item.current && (
                <div className="absolute inset-0 bg-indigo-600 rounded-full animate-ping opacity-75" />
              )}
            </div>

            {/* Content Card */}
            <div className={`ml-16 md:ml-0 md:w-1/2 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
              <div className="bg-white p-6 rounded-2xl border-2 border-gray-200 shadow-sm hover:shadow-xl hover:border-indigo-600 transition-all duration-300">
                {/* Year Badge */}
                <div className="inline-block px-4 py-2 bg-gray-100 text-gray-700 text-sm font-bold rounded-full mb-3">
                  {item.year}
                  {item.current && (
                    <span className="ml-2 text-indigo-600">● Current</span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-xl font-black text-gray-900 mb-2">
                  {item.title}
                </h3>

                {/* Company */}
                <p className="text-indigo-600 font-bold text-lg mb-3">
                  {item.company}
                </p>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}
