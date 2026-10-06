import React from 'react';
import { TrendingUp, Users, Award, Target } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    value: '3x',
    label: 'Traffic Growth',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Users,
    value: '12+',
    label: 'Projects Completed',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Award,
    value: '3.5+',
    label: 'Years Experience',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: Target,
    value: '3.1%',
    label: 'Average CTR',
    color: 'from-orange-500 to-red-500',
  },
];

export default function Stats() {
  return (
    <section className="py-16 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="text-white" size={32} />
              </div>
              <div className="text-4xl sm:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-white/80 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
