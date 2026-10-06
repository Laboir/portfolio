import React from 'react';
import { motion } from 'framer-motion';
import { Code, TrendingUp, Search, Palette } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Boost your online visibility with comprehensive SEO strategies including on-page, off-page, and technical SEO.',
    features: ['Keyword Research', 'On-Page SEO', 'Technical SEO', 'Link Building'],
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Modern, responsive websites built with cutting-edge technologies like React, Next.js, and TypeScript.',
    features: ['React/Next.js', 'Responsive Design', 'Performance Optimized', 'SEO Friendly'],
    color: 'from-indigo-500 to-purple-500',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Data-driven marketing campaigns that deliver measurable results and ROI for your business.',
    features: ['Meta Ads', 'Content Strategy', 'Analytics', 'Lead Generation'],
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Palette,
    title: 'Content Creation',
    description: 'Engaging content that resonates with your audience and drives conversions across all channels.',
    features: ['Blog Writing', 'Copywriting', 'Social Media', 'Email Marketing'],
    color: 'from-orange-500 to-red-500',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-gray-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
            What I{' '}
            <span className="text-indigo-600">Offer</span>
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto rounded-full" />
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive digital solutions to help your business grow
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-indigo-600 transition-all duration-300 hover:shadow-xl group"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="text-white" size={32} />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-black text-gray-900 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2">
                {service.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
