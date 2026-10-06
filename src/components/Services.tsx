import React from 'react';
import { motion } from 'framer-motion';
import { Code, TrendingUp, Search, Palette, ArrowRight } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Dominate search rankings with comprehensive SEO strategies that drive organic traffic and qualified leads to your business.',
    features: ['Keyword Research & Strategy', 'On-Page Optimization', 'Technical SEO Audits', 'Link Building Campaigns', 'Local SEO', 'Content Optimization'],
    color: 'from-blue-500 to-cyan-500',
    stats: '300% Traffic Growth',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Modern, high-performance websites built with cutting-edge technologies. Fast, responsive, and optimized for conversions.',
    features: ['React & Next.js', 'Responsive Design', 'Performance Optimization', 'SEO-Friendly Architecture', 'E-commerce Solutions', 'Custom Web Applications'],
    color: 'from-indigo-500 to-purple-500',
    stats: '12+ Projects Delivered',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Data-driven marketing campaigns that deliver measurable ROI. From paid ads to analytics, I handle it all.',
    features: ['Meta & Google Ads', 'Campaign Strategy', 'A/B Testing', 'Analytics & Reporting', 'Conversion Optimization', 'Lead Generation'],
    color: 'from-green-500 to-emerald-500',
    stats: '3.1% Average CTR',
  },
  {
    icon: Palette,
    title: 'Content Strategy',
    description: 'Compelling content that engages your audience, builds authority, and drives conversions across all channels.',
    features: ['Blog & Article Writing', 'SEO Content', 'Copywriting', 'Social Media Content', 'Email Marketing', 'Content Calendar Planning'],
    color: 'from-orange-500 to-red-500',
    stats: '10+ Blog Posts/Month',
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
            Comprehensive digital solutions to help your business grow and succeed online
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
              className="bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-indigo-600 transition-all duration-300 hover:shadow-xl group relative overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />

              <div className="relative z-10">
                {/* Icon and Stats */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <service.icon className="text-white" size={32} />
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500 font-semibold">Results</div>
                    <div className="text-lg font-black text-indigo-600">{service.stats}</div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-black text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-indigo-600" />
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-indigo-600 font-bold group-hover:gap-3 transition-all">
                  <span>Learn More</span>
                  <ArrowRight size={20} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 text-lg mb-6">
            Ready to take your business to the next level?
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:bg-gray-800 transition-all hover:scale-105 cursor-pointer"
          >
            Let's Work Together
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
