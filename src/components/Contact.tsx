import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import TiltCard from './TiltCard';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const mailtoLink = `mailto:pankajsengar071@gmail.com?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`
    )}`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl sm:text-6xl font-black text-gray-900 mb-6">
            Let's Work{' '}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <div className="w-24 h-2 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full" />
          <p className="mt-6 text-xl text-gray-600 max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together!
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-5 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-2 space-y-6">
            <TiltCard intensity={8}>
              <div className="bg-gradient-to-br from-purple-600 to-pink-600 rounded-3xl p-8 text-white shadow-2xl">
                <h3 className="text-3xl font-black mb-6">Get in touch</h3>
                <p className="text-white/90 leading-relaxed mb-8 text-lg">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>

                <div className="space-y-6">
                  <a
                    href="mailto:pankajsengar071@gmail.com"
                    className="flex items-center gap-4 hover:translate-x-2 transition-transform"
                  >
                    <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                      <Mail size={24} />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Email</p>
                      <p className="font-bold text-lg">pankajsengar071@gmail.com</p>
                    </div>
                  </a>

                  <a
                    href="tel:+917557435690"
                    className="flex items-center gap-4 hover:translate-x-2 transition-transform"
                  >
                    <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                      <Phone size={24} />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Phone</p>
                      <p className="font-bold text-lg">+91-7557435690</p>
                    </div>
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <p className="text-white/70 text-sm">Location</p>
                      <p className="font-bold text-lg">India</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-white/10 rounded-2xl border-2 border-white/20">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
                    <p className="font-bold">Available for new opportunities</p>
                  </div>
                </div>
              </div>
            </TiltCard>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3">
            <TiltCard intensity={5}>
              <form
                onSubmit={handleSubmit}
                className="bg-white rounded-3xl p-8 shadow-xl border-2 border-gray-100"
              >
                <div className="grid sm:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Your Name</label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
                      placeholder="John Doe"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-2">Your Email</label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
                      placeholder="john@example.com"
                      required
                    />
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Subject</label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all"
                    placeholder="Project Inquiry"
                    required
                  />
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={6}
                    className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 focus:border-purple-500 focus:ring-4 focus:ring-purple-100 outline-none transition-all resize-none"
                    placeholder="Tell me about your project..."
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 px-6 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-black text-lg flex items-center justify-center gap-2 hover:shadow-2xl transition-shadow"
                >
                  {submitted ? (
                    <>
                      <span>✓</span> Message Sent!
                    </>
                  ) : (
                    <>
                      <Send size={20} /> Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </TiltCard>
          </div>
        </div>
      </div>
    </section>
  );
}
