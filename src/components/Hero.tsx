import React from 'react';
import { ArrowDown, Mail, Phone, Linkedin, FileText, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Enhanced Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950" />
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-200/40 dark:bg-indigo-500/20 rounded-full blur-3xl animate-float-1" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-200/40 dark:bg-purple-500/20 rounded-full blur-3xl animate-float-2" />
        <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-pink-200/30 dark:bg-pink-500/15 rounded-full blur-3xl animate-float-3" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-indigo-100 to-purple-100 dark:from-indigo-900/50 dark:to-purple-900/50 text-indigo-600 dark:text-indigo-300 text-sm font-semibold shadow-sm">
                <Sparkles size={16} className="animate-pulse" />
                Welcome to my portfolio
              </span>
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up leading-tight"
              style={{ animationDelay: '0.3s' }}
            >
              Hi, I'm{' '}
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-gradient">
                Pankaj
              </span>
            </h1>

            <p
              className="text-2xl sm:text-3xl text-gray-700 dark:text-gray-200 mb-4 font-semibold animate-fade-in-up"
              style={{ animationDelay: '0.5s' }}
            >
              Digital Marketing Manager
            </p>

            <p
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 animate-fade-in-up leading-relaxed"
              style={{ animationDelay: '0.6s' }}
            >
              Digital Marketing Specialist with <span className="font-semibold text-indigo-600 dark:text-indigo-400">3.5+ years</span> of experience in SEO, Meta Ads, 
              social media, content, and lead generation. Also builds websites using Next.js, 
              HTML, CSS, JavaScript, and PHP.
            </p>

            <div
              className="flex flex-col sm:flex-row items-center lg:items-start justify-center lg:justify-start gap-4 mb-8 animate-fade-in-up"
              style={{ animationDelay: '0.7s' }}
            >
              <a
                href="#projects"
                className="px-8 py-3.5 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-semibold hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-1"
              >
                View My Work
              </a>
              <a
                href="#resume"
                className="px-8 py-3.5 border-2 border-indigo-500 text-indigo-500 dark:text-indigo-400 rounded-full font-semibold hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300 hover:-translate-y-1"
              >
                📄 My Resume
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1"
              >
                Get In Touch
              </a>
            </div>

            <div
              className="flex items-center justify-center lg:justify-start space-x-6 animate-fade-in"
              style={{ animationDelay: '0.9s' }}
            >
              <a
                href="mailto:pankajsengar071@gmail.com"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition-all duration-300 hover:scale-110"
                title="Email"
              >
                <Mail size={24} />
              </a>
              <a
                href="tel:+917557435690"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition-all duration-300 hover:scale-110"
                title="Phone"
              >
                <Phone size={24} />
              </a>
              <a
                href="https://linkedin.com/in/pankajsengar071"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition-all duration-300 hover:scale-110"
                title="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="#resume"
                className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition-all duration-300 hover:scale-110"
                title="Resume"
              >
                <FileText size={24} />
              </a>
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="flex justify-center lg:justify-end animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <div className="relative">
              {/* Decorative rings */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 blur-2xl opacity-30 animate-pulse" />
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-20 animate-spin-slow" />
              
              {/* Profile image container */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl">
                <img
                  src="https://image.qwenlm.ai/generated-images/16a16c3a-3da2-4a14-88d2-1eb71ffba4d0/_result.png"
                  alt="Pankaj - Digital Marketing Manager"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Floating badges */}
              <div className="absolute -top-4 -right-4 bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-xl animate-bounce-slow">
                <div className="flex items-center gap-2">
                  <span className="text-2xl">🚀</span>
                  <div>
                    <p className="text-xs font-bold text-gray-900 dark:text-white">3.5+ Years</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Experience</p>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 rounded-2xl p-3 shadow-xl animate-bounce-slow" style={{ animationDelay: '0.5s' }}>
                <div className="flex items-center gap-2">
                  <span className="text-2xl">💼</span>
                  <div>
                    <p className="text-xs font-bold text-gray-900 dark:text-white">12+ Projects</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Completed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <ArrowDown className="text-gray-400" size={24} />
        </div>
      </div>
    </section>
  );
}
