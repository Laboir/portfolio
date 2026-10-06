import React from 'react';
import { motion } from 'framer-motion';
import { Code, TrendingUp, Search, Palette, ArrowRight, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: Search,
    title: 'SEO Optimization',
    description: 'Dominate search rankings with comprehensive SEO strategies that drive organic traffic and qualified leads to your business.',
    features: ['Keyword Research & Strategy', 'On-Page Optimization', 'Technical SEO Audits', 'Link Building Campaigns', 'Local SEO', 'Content Optimization'],
    color: 'from-blue-500 to-cyan-500',
    stats: '3x Traffic Growth',
    bgColor: 'bg-blue-50',
  },
  {
    icon: Code,
    title: 'Web Development',
    description: 'Modern, high-performance websites built with cutting-edge technologies. Fast, responsive, and optimized for conversions.',
    features: ['React & Next.js', 'Responsive Design', 'Performance Optimization', 'SEO-Friendly Architecture', 'E-commerce Solutions', 'Custom Web Applications'],
    color: 'from-indigo-500 to-purple-500',
    stats: '12+ Projects Delivered',
    bgColor: 'bg-indigo-50',
  },
  {
    icon: TrendingUp,
    title: 'Digital Marketing',
    description: 'Data-driven marketing campaigns that deliver measurable ROI. From paid ads to analytics, I handle it all.',
    features: ['Meta & Google Ads', 'Campaign Strategy', 'A/B Testing', 'Analytics & Reporting', 'Conversion Optimization', 'Lead Generation'],
    color: 'from-green-500 to-emerald-500',
    stats: '3.1% Average CTR',
    bgColor: 'bg-green-50',
  },
  {
    icon: Palette,
    title: 'Content Strategy',
    description: 'Compelling content that engages your audience, builds authority, and drives conversions across all channels.',
    features: ['Blog & Article Writing', 'SEO Content', 'Copywriting', 'Social Media Content', 'Email Marketing', 'Content Calendar Planning'],
    color: 'from-orange-500 to-red-500',
    stats: '10+ Blog Posts/Month',
    bgColor: 'bg-orange-50',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-32 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-500 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
            Services I{' '}
            <span className="text-indigo-600">Provide</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto rounded-full" />
          <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            End-to-end digital solutions tailored to your business needs. From strategy to execution, I deliver results that matter.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 border-2 border-gray-200 hover:border-indigo-600 transition-all duration-300 hover:shadow-2xl group relative overflow-hidden"
            >
              {/* Background Gradient on Hover */}
              <div className={`absolute inset-0 ${service.bgColor} opacity-0 group-hover:opacity-30 transition-opacity duration-300`} />

              <div className="relative z-10">
                {/* Icon and Stats */}
                <div className="flex items-start justify-between mb-6">
                  <div className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-300 shadow-lg`}>
                    <service.icon className="text-white" size={36} />
                  </div>
                  <div className="text-right bg-gray-50 px-4 py-2 rounded-xl">
                    <div className="text-xs text-gray-500 font-semibold uppercase tracking-wide">Proven Results</div>
                    <div className="text-xl font-black text-indigo-600 mt-1">{service.stats}</div>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-3xl font-black text-gray-900 mb-4 group-hover:text-indigo-600 transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-lg leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {service.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2">
                      <CheckCircle className="text-indigo-600 flex-shrink-0" size={18} />
                      <span className="text-gray-700 font-medium text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-2 text-indigo-600 font-bold group-hover:gap-3 transition-all pt-4 border-t border-gray-100">
                  <span>Get Started</span>
                  <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
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
          className="text-center bg-gradient-to-r from-indigo-600 to-purple-600 rounded-3xl p-12 text-white"
        >
          <h3 className="text-3xl font-black mb-4">Ready to Transform Your Business?</h3>
          <p className="text-lg text-indigo-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how I can help you achieve your digital goals and drive real results.
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-indigo-600 rounded-full font-bold hover:bg-gray-100 transition-all hover:scale-105 cursor-pointer shadow-xl"
          >
            Let's Work Together
            <ArrowRight size={20} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
