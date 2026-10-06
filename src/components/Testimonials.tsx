import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'A4 Resort',
    role: 'Hospitality & Tourism',
    content: 'Pankaj ne hamare resort ke liye ek professional website banayi jo booking aur customer engagement ko significantly improve ki. Uski SEO skills ne hamari online visibility ko next level pe le gaya.',
    rating: 5,
    initials: 'A4',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Resort Tent Creation',
    role: 'Luxury Glamping Solutions',
    content: 'Pankaj ki technical expertise aur marketing knowledge ka combination outstanding hai. Usne hamare liye modern, responsive website develop ki aur SEO strategy implement ki jo results de rahi hai.',
    rating: 5,
    initials: 'RT',
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Jai Ambay Etching Process',
    role: 'Industrial Manufacturing',
    content: 'Hamare industrial business ke liye Pankaj ne complete digital presence create ki. Website development se lekar SEO tak, sab kuch professionally handle kiya. Traffic aur leads dono me significant growth dekhi.',
    rating: 5,
    initials: 'JA',
    color: 'from-orange-500 to-red-500',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
            Client{' '}
            <span className="text-indigo-600">Testimonials</span>
          </h2>
          <div className="w-24 h-1 bg-gray-900 mx-auto rounded-full" />
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            What my clients say about working with me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 rounded-3xl p-8 border-2 border-gray-200 hover:border-indigo-600 transition-all duration-300 hover:shadow-xl"
            >
              {/* Quote Icon */}
              <div className="mb-6">
                <Quote className="text-indigo-600" size={40} />
              </div>

              {/* Content */}
              <p className="text-gray-700 text-lg leading-relaxed mb-8">
                "{testimonial.content}"
              </p>

              {/* Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-2xl">★</span>
                ))}
              </div>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${testimonial.color} flex items-center justify-center text-white font-black text-lg`}>
                  {testimonial.initials}
                </div>
                <div>
                  <h4 className="font-bold text-gray-900 text-lg">{testimonial.name}</h4>
                  <p className="text-gray-600 text-sm">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
