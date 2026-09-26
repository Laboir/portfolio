import React from 'react';
import { TrendingUp, Code, Search, Target } from 'lucide-react';

const highlights = [
  {
    icon: Search,
    title: 'SEO Expert',
    description: 'On-page, Off-page & Technical SEO mastery',
  },
  {
    icon: TrendingUp,
    title: 'Meta Ads',
    description: 'Running profitable ad campaigns for brands',
  },
  {
    icon: Code,
    title: 'Web Developer',
    description: 'Building websites with Next.js, React & more',
  },
  {
    icon: Target,
    title: 'Lead Generation',
    description: 'Driving quality leads and business growth',
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            About{' '}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Me
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left - Image/Visual */}
          <div className="relative animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <div className="relative w-full max-w-md mx-auto">
              <div className="aspect-square rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 p-1">
                <div className="w-full h-full rounded-2xl bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden">
                  <div className="text-center p-8">
                    <div className="text-8xl mb-4">👨🏻‍💻</div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-center gap-2">
                        <div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-yellow-400" />
                        <div className="w-3 h-3 rounded-full bg-green-400" />
                      </div>
                      <div className="font-mono text-sm text-gray-500 dark:text-gray-400 mt-4 space-y-1 text-left">
                        <p><span className="text-purple-500">const</span> <span className="text-blue-500">pankaj</span> = {'{'}</p>
                        <p className="pl-4"><span className="text-green-500">role</span>: <span className="text-orange-500">"Digital Marketing Manager"</span>,</p>
                        <p className="pl-4"><span className="text-green-500">experience</span>: <span className="text-purple-500">3.5</span>+ years,</p>
                        <p className="pl-4"><span className="text-green-500">skills</span>: [<span className="text-orange-500">"SEO"</span>, <span className="text-orange-500">"Meta Ads"</span>],</p>
                        <p className="pl-4"><span className="text-green-500">also</span>: <span className="text-orange-500">"Next.js Developer"</span>,</p>
                        <p className="pl-4"><span className="text-green-500">status</span>: <span className="text-green-400">"Open to Work"</span> ✅</p>
                        <p>{'}'}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-100 dark:bg-indigo-900/30 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-100 dark:bg-purple-900/30 rounded-full blur-xl" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Digital Marketing Specialist & Web Developer
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
              I'm a Digital Marketing Specialist with 3.5+ years of experience in SEO, Meta Ads, 
              social media, content, and lead generation. I also build websites using Next.js, 
              HTML, CSS, JavaScript, and PHP.
            </p>
            <p className="text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              I'm currently looking for a full-time opportunity where I can use my marketing 
              and coding skills, take ownership of projects, and help a business grow.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <div
                  key={item.title}
                  className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-800 transition-colors hover:-translate-y-1 transform duration-300"
                  style={{ animationDelay: `${0.6 + index * 0.1}s` }}
                >
                  <item.icon className="text-indigo-500 mb-2" size={24} />
                  <h4 className="font-semibold text-gray-900 dark:text-white text-sm">
                    {item.title}
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
