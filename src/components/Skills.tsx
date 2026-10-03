import React from 'react';

const skillCategories = [
  {
    title: 'Digital Marketing',
    color: 'from-blue-500 to-cyan-500',
    skills: [
      { name: 'SEO (On-page / Off-page / Technical)', level: 95 },
      { name: 'Meta Ads', level: 90 },
      { name: 'Content Writing', level: 88 },
      { name: 'Keyword Research', level: 92 },
      { name: 'Link Building', level: 85 },
      { name: 'Google Analytics / GA4', level: 90 },
    ],
  },
  {
    title: 'Tools & Platforms',
    color: 'from-green-500 to-emerald-500',
    skills: [
      { name: 'Semrush', level: 90 },
      { name: 'Keyword Planner', level: 88 },
      { name: 'Screaming Frog', level: 85 },
      { name: 'Google Search Console', level: 92 },
      { name: 'Canva', level: 85 },
      { name: 'Reporting (Excel / Sheets)', level: 88 },
    ],
  },
  {
    title: 'Technical Skills',
    color: 'from-purple-500 to-pink-500',
    skills: [
      { name: 'Next.js / React', level: 85 },
      { name: 'HTML / CSS / JavaScript', level: 92 },
      { name: 'TypeScript', level: 78 },
      { name: 'Tailwind CSS', level: 90 },
      { name: 'Node.js / Express', level: 80 },
      { name: 'MongoDB / MySQL', level: 78 },
    ],
  },
];

const techLogos = [
  'SEO', 'Meta Ads', 'Google Analytics', 'Semrush', 'Next.js',
  'React', 'TypeScript', 'Tailwind', 'Node.js', 'MongoDB',
  'WordPress', 'Canva', 'GSC', 'PHP', 'JavaScript'
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Skills
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            A blend of marketing expertise and technical skills to drive growth
          </p>
        </div>

        {/* Tech Tags */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {techLogos.map((tech) => (
            <span
              key={tech}
              className="px-4 py-2 bg-white dark:bg-gray-700 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 shadow-sm border border-gray-100 dark:border-gray-600 hover:border-indigo-300 dark:hover:border-indigo-500 transition-all duration-300 hover:-translate-y-0.5 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>

        {/* Skill Bars */}
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="group bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${category.color} flex items-center justify-center`}>
                  <div className="w-2 h-2 bg-white rounded-full" />
                </div>
                <h3 className={`text-xl font-bold bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}>
                  {category.title}
                </h3>
              </div>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name} className="group/skill">
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300 group-hover/skill:text-indigo-600 dark:group-hover/skill:text-indigo-400 transition-colors">
                        {skill.name}
                      </span>
                      <span className="text-sm font-semibold text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2.5 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 group-hover/skill:shadow-lg`}
                        style={{ width: `${skill.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
