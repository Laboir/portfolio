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
    <div className="relative max-w-5xl mx-auto py-8">
      {items.map((item, index) => {
        const isLeft = index % 2 === 0;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className={`relative mb-16 last:mb-0 ${
              isLeft ? 'md:pr-8' : 'md:pl-8'
            }`}
          >
            <div className={`md:w-1/2 ${isLeft ? 'md:ml-0 md:mr-auto' : 'md:ml-auto md:mr-0'}`}>
              <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 shadow-sm hover:shadow-xl hover:border-indigo-600 transition-all duration-300">
                {/* Year Badge */}
                <div className="inline-block px-4 py-2 bg-gray-100 text-gray-700 text-sm font-bold rounded-full mb-4">
                  {item.year}
                  {item.current && (
                    <span className="ml-2 text-indigo-600">● Current</span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-gray-900 mb-2">
                  {item.title}
                </h3>

                {/* Company */}
                <p className="text-indigo-600 font-bold text-lg mb-4">
                  {item.company}
                </p>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
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
