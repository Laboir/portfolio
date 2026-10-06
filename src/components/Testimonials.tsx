import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    name: 'A4 Resort',
    role: 'Hospitality & Tourism',
    content: 'Pankaj created a professional website for our resort that significantly improved our booking rates and customer engagement. His SEO skills took our online visibility to the next level. Highly recommended!',
    rating: 5,
    initials: 'A4',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Resort Tent Creation',
    role: 'Luxury Glamping Solutions',
    content: 'Pankaj\'s combination of technical expertise and marketing knowledge is outstanding. He developed a modern, responsive website for us and implemented an SEO strategy that\'s delivering real results.',
    rating: 5,
    initials: 'RT',
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Jai Ambay Etching Process',
    role: 'Industrial Manufacturing',
    content: 'Pankaj created a complete digital presence for our industrial business. From website development to SEO, he handled everything professionally. We\'ve seen significant growth in both traffic and leads.',
    rating: 5,
    initials: 'JA',
    color: 'from-orange-500 to-red-500',
  },
  {
    name: 'Noblekode',
    role: 'Technology Solutions',
    content: 'Working with Pankaj was a game-changer for our tech company. He built our Next.js frontend and optimized our SEO strategy. Our organic traffic increased by 200% in just 3 months!',
    rating: 5,
    initials: 'NK',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Tbond',
    role: 'E-commerce & Retail',
    content: 'Pankaj\'s lead generation campaigns delivered exceptional results. We achieved a 3.1% CTR and reduced our CPC by 22%. His Meta Ads expertise is truly impressive.',
    rating: 5,
    initials: 'TB',
    color: 'from-red-500 to-orange-500',
  },
  {
    name: 'Ayuvya Ayurveda',
    role: 'Healthcare & Wellness',
    content: 'Pankaj managed our complete SEO strategy and improved our organic traffic by 45%. His attention to detail and data-driven approach made a real difference for our brand.',
    rating: 5,
    initials: 'AA',
    color: 'from-teal-500 to-green-500',
  },
  {
    name: 'Hommy Pvt. Ltd',
    role: 'Interior Design & Architecture',
    content: 'Pankaj handled our brand campaigns, content creation, and website management. His Meta Ads campaigns achieved 2.7% CTR and increased our website traffic by 55% in the first month.',
    rating: 5,
    initials: 'HM',
    color: 'from-indigo-500 to-blue-500',
  },
  {
    name: 'Event Decoration',
    role: 'Event Management',
    content: 'Pankaj designed and developed a beautiful, responsive website for our event decoration business. The modern UI and smooth animations really impressed our clients.',
    rating: 5,
    initials: 'ED',
    color: 'from-pink-500 to-rose-500',
  },
  {
    name: 'PTFE Non Stick Coating',
    role: 'Industrial Coating Solutions',
    content: 'Pankaj built a professional website showcasing our industrial products and services. His understanding of both technical content and web development is exceptional.',
    rating: 5,
    initials: 'PT',
    color: 'from-cyan-500 to-blue-500',
  },
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  };

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

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-3xl">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: 'spring', stiffness: 300, damping: 30 },
                  opacity: { duration: 0.2 },
                }}
                className="bg-gray-50 rounded-3xl p-12 border-2 border-gray-200"
              >
                {/* Quote Icon */}
                <div className="mb-8">
                  <Quote className="text-indigo-600" size={48} />
                </div>

                {/* Content */}
                <p className="text-gray-700 text-xl sm:text-2xl leading-relaxed mb-10">
                  "{testimonials[currentIndex].content}"
                </p>

                {/* Rating */}
                <div className="flex gap-1 mb-8">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-3xl">★</span>
                  ))}
                </div>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br ${testimonials[currentIndex].color} flex items-center justify-center text-white font-black text-xl`}>
                    {testimonials[currentIndex].initials}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-xl">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-600">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-indigo-600 hover:shadow-lg transition-all cursor-pointer"
          >
            <ChevronLeft className="text-gray-700" size={24} />
          </button>
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 w-12 h-12 bg-white border-2 border-gray-200 rounded-full flex items-center justify-center hover:border-indigo-600 hover:shadow-lg transition-all cursor-pointer"
          >
            <ChevronRight className="text-gray-700" size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                  index === currentIndex
                    ? 'bg-indigo-600 w-8'
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
