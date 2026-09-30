import React, { useState } from 'react';
import JSZip from 'jszip';
import { saveAs } from 'file-saver';
import { Download, Loader2 } from 'lucide-react';

// All source files content
const sourceFiles: Record<string, string> = {
  'package.json': `{
  "name": "pankaj-portfolio",
  "private": true,
  "version": "1.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "typecheck": "tsc --noEmit"
  },
  "dependencies": {
    "file-saver": "^2.0.5",
    "jszip": "^3.10.1",
    "lucide-react": "^0.294.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0"
  },
  "devDependencies": {
    "@tailwindcss/vite": "^4.1.7",
    "@types/file-saver": "^2.0.7",
    "@types/react": "^18.2.0",
    "@types/react-dom": "^18.2.0",
    "@vitejs/plugin-react": "^4.3.4",
    "tailwindcss": "^4.1.7",
    "typescript": "^5.7.0",
    "vite": "^6.3.5"
  }
}`,

  'vite.config.js': `import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    host: "0.0.0.0",
    port: 3000,
    strictPort: true,
  },
});
`,

  'tsconfig.json': `{
  "compilerOptions": {
    "target": "ES2020",
    "module": "ESNext",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "react",
    "moduleResolution": "bundler",
    "strict": true,
    "skipLibCheck": true,
    "esModuleInterop": true,
    "isolatedModules": true,
    "noEmit": true,
    "allowImportingTsExtensions": true
  },
  "include": ["src"]
}
`,

  'index.html': `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Pankaj | Digital Marketing Manager & Web Developer</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.tsx"></script>
  </body>
</html>
`,

  'src/main.tsx': `import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
`,

  'src/App.tsx': `import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { projects } from './data/projects';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<string | null>(null);

  const project = projects.find((p) => p.id === selectedProject);

  const handleProjectClick = (id: string) => {
    setSelectedProject(id);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleBack = () => {
    setSelectedProject(null);
    setTimeout(() => {
      document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  if (project) {
    return (
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
        <Navbar />
        <ProjectDetail project={project} onBack={handleBack} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Resume />
        <Projects onProjectClick={handleProjectClick} />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
`,

  'src/index.css': `@import "tailwindcss";

@layer base {
  html {
    scroll-behavior: smooth;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  ::selection {
    background-color: rgba(99, 102, 241, 0.3);
    color: inherit;
  }
}

@layer utilities {
  .animate-fade-in {
    animation: fadeIn 0.6s ease-out forwards;
    opacity: 0;
  }

  .animate-fade-in-up {
    animation: fadeInUp 0.6s ease-out forwards;
    opacity: 0;
  }

  .animate-slide-down {
    animation: slideDown 0.4s ease-out forwards;
  }

  .animate-float-1 {
    animation: float1 20s linear infinite;
  }

  .animate-float-2 {
    animation: float2 25s linear infinite;
  }

  .animate-float-3 {
    animation: float3 18s linear infinite;
  }

  .animate-bounce-slow {
    animation: bounceSlow 2s ease-in-out infinite;
  }
}

@keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}

@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes slideDown {
  from { transform: translateY(-100%); }
  to { transform: translateY(0); }
}

@keyframes float1 {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(100px, -50px); }
  50% { transform: translate(0, 0); }
  75% { transform: translate(-50px, 50px); }
}

@keyframes float2 {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(-80px, 60px); }
  50% { transform: translate(0, 0); }
  75% { transform: translate(60px, -40px); }
}

@keyframes float3 {
  0%, 100% { transform: translate(0, 0); }
  25% { transform: translate(50px, 80px); }
  50% { transform: translate(0, 0); }
  75% { transform: translate(-70px, -30px); }
}

@keyframes bounceSlow {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(10px); }
}
`,

  'README.md': `# Pankaj Portfolio

Digital Marketing Manager & Web Developer Portfolio built with React, Vite, and Tailwind CSS.

## Features

- 🎨 Modern, responsive design
- 📱 Mobile-first approach
- 🚀 Fast performance with Vite
- 🎯 Project case studies with detailed information
- 📄 Resume section with education and highlights
- 📊 Skills visualization
- 💼 Work experience timeline
- 📬 Contact form
- 🌙 Dark mode support
- 📥 Download source code as ZIP

## Tech Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4
- **Icons**: Lucide React
- **Deployment**: Ready for Netlify/Vercel

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

\`\`\`bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
\`\`\`

## Project Structure

\`\`\`
src/
├── components/
│   ├── About.tsx
│   ├── Contact.tsx
│   ├── Experience.tsx
│   ├── Footer.tsx
│   ├── Hero.tsx
│   ├── Navbar.tsx
│   ├── ProjectDetail.tsx
│   ├── Projects.tsx
│   ├── Resume.tsx
│   └── Skills.tsx
├── data/
│   └── projects.ts
├── App.tsx
├── main.tsx
└── index.css
\`\`\`

## Contact

- **Email**: pankajsengar071@gmail.com
- **Phone**: +91-7557435690
- **LinkedIn**: linkedin.com/in/pankajsengar071

## License

MIT © 2026 Pankaj
`,

  'src/components/Navbar.tsx': `import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Experience', href: '#experience' },
  { name: 'Resume', href: '#resume' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={\`fixed top-0 left-0 right-0 z-50 transition-all duration-300 animate-slide-down \${
        scrolled
          ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }\`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a
            href="#home"
            className="text-2xl font-bold bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent hover:scale-105 transition-transform"
          >
            P.
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link, index) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-700 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors font-medium hover:-translate-y-0.5 transform"
                style={{ animationDelay: \`\${index * 0.1}s\` }}
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700 dark:text-gray-300"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md animate-fade-in">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="block text-gray-700 dark:text-gray-300 hover:text-indigo-500 font-medium py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
`,

  'src/components/Hero.tsx': `import React from 'react';
import { ArrowDown, Mail, Phone, Linkedin, FileText } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-950" />
      
      {/* Animated Background Shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-indigo-200/30 dark:bg-indigo-500/10 rounded-full blur-3xl animate-float-1" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-200/30 dark:bg-purple-500/10 rounded-full blur-3xl animate-float-2" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-200/20 dark:bg-pink-500/10 rounded-full blur-3xl animate-float-3" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
          <span className="inline-block px-4 py-2 rounded-full bg-indigo-100 dark:bg-indigo-900/50 text-indigo-600 dark:text-indigo-300 text-sm font-medium">
            👋 Welcome to my portfolio
          </span>
        </div>

        <h1
          className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6 animate-fade-in-up"
          style={{ animationDelay: '0.3s' }}
        >
          Hi, I'm{' '}
          <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            Pankaj
          </span>
        </h1>

        <p
          className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 mb-4 max-w-3xl mx-auto animate-fade-in-up"
          style={{ animationDelay: '0.5s' }}
        >
          Digital Marketing Manager · Open to Work ✅
        </p>

        <p
          className="text-lg text-gray-500 dark:text-gray-400 mb-8 max-w-3xl mx-auto animate-fade-in-up"
          style={{ animationDelay: '0.6s' }}
        >
          Digital Marketing Specialist with 3.5+ years of experience in SEO, Meta Ads, 
          social media, content, and lead generation. Also builds websites using Next.js, 
          HTML, CSS, JavaScript, and PHP.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 animate-fade-in-up"
          style={{ animationDelay: '0.7s' }}
        >
          <a
            href="#projects"
            className="px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-1"
          >
            View My Work
          </a>
          <a
            href="#resume"
            className="px-8 py-3 border-2 border-indigo-500 text-indigo-500 dark:text-indigo-400 rounded-full font-medium hover:bg-indigo-50 dark:hover:bg-indigo-900/20 transition-all duration-300 hover:-translate-y-1"
          >
            📄 My Resume
          </a>
          <a
            href="#contact"
            className="px-8 py-3 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-full font-medium hover:bg-gray-50 dark:hover:bg-gray-800 transition-all duration-300 hover:-translate-y-1"
          >
            Get In Touch
          </a>
        </div>

        <div
          className="flex items-center justify-center space-x-6 animate-fade-in"
          style={{ animationDelay: '0.9s' }}
        >
          <a
            href="mailto:pankajsengar071@gmail.com"
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition-colors"
            title="Email"
          >
            <Mail size={24} />
          </a>
          <a
            href="tel:+917557435690"
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition-colors"
            title="Phone"
          >
            <Phone size={24} />
          </a>
          <a
            href="https://linkedin.com/in/pankajsengar071"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition-colors"
            title="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="#resume"
            className="text-gray-600 dark:text-gray-400 hover:text-indigo-500 transition-colors"
            title="Resume"
          >
            <FileText size={24} />
          </a>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <ArrowDown className="text-gray-400" size={24} />
        </div>
      </div>
    </section>
  );
}
`,

  'src/components/About.tsx': `import React from 'react';
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
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-indigo-100 dark:bg-indigo-900/30 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-purple-100 dark:bg-purple-900/30 rounded-full blur-xl" />
            </div>
          </div>

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
                  style={{ animationDelay: \`\${0.6 + index * 0.1}s\` }}
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
`,

  'src/components/Skills.tsx': `import React from 'react';

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

        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category) => (
            <div
              key={category.title}
              className="bg-white dark:bg-gray-900 rounded-2xl p-6 shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className={\`text-xl font-bold mb-6 bg-gradient-to-r \${category.color} bg-clip-text text-transparent\`}>
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className={\`h-full bg-gradient-to-r \${category.color} rounded-full transition-all duration-1000\`}
                        style={{ width: \`\${skill.level}%\` }}
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
`,

  'src/components/Experience.tsx': `import React from 'react';
import { Briefcase, Calendar } from 'lucide-react';

const experiences = [
  {
    title: 'Digital Marketing Manager + Next.js Developer',
    company: 'Jai Ambay Etching Process',
    type: 'Full-time',
    period: 'January 2026 — Present',
    current: true,
    description: 'Managing complete digital marketing operations while also developing and maintaining the company website using Next.js.',
  },
  {
    title: 'Digital Marketer',
    company: 'Hommy Pvt. Ltd',
    type: 'Full-time',
    period: 'January 2025 — December 2025',
    current: false,
    description: 'Handled brand campaigns, content writing, website management, web development, and SEO strategy.',
  },
  {
    title: 'SEO Executive',
    company: 'Ayuvya Ayurveda',
    type: 'Full-time',
    period: 'April 2023 — November 2024',
    current: false,
    description: 'Managed on-page and off-page SEO, Google Analytics tracking, content writing, and Google Search Console optimization.',
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 lg:py-32 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Work{' '}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Experience
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            3.5+ years of professional experience in digital marketing and web development
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-indigo-500 to-purple-600 hidden sm:block" />

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="relative flex gap-6 group"
                >
                  <div className="hidden sm:flex flex-shrink-0 w-16 h-16 items-center justify-center">
                    <div className={\`w-4 h-4 rounded-full border-4 \${
                      exp.current
                        ? 'bg-green-500 border-green-200 dark:border-green-800'
                        : 'bg-indigo-500 border-indigo-200 dark:border-indigo-800'
                    }\`} />
                  </div>

                  <div className="flex-1 bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700 hover:border-indigo-200 dark:hover:border-indigo-800 transition-all duration-300 hover:shadow-lg">
                    <div className="flex flex-wrap items-start justify-between gap-2 mb-3">
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                          {exp.title}
                        </h3>
                        <p className="text-indigo-500 dark:text-indigo-400 font-medium">
                          {exp.company}
                        </p>
                      </div>
                      {exp.current && (
                        <span className="px-3 py-1 text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 rounded-full">
                          Current
                        </span>
                      )}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 mb-3 text-sm text-gray-500 dark:text-gray-400">
                      <span className="flex items-center gap-1">
                        <Calendar size={14} />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1">
                        <Briefcase size={14} />
                        {exp.type}
                      </span>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
`,

  'src/components/Projects.tsx': `import React, { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { projects } from '../data/projects';

type Props = {
  onProjectClick: (id: string) => void;
};

const categories = [
  { key: 'all', label: 'All Projects' },
  { key: 'marketing', label: '📣 SEO & Marketing' },
  { key: 'webdev', label: '🌐 Web Development' },
  { key: 'content', label: '📝 Content' },
];

export default function Projects({ onProjectClick }: Props) {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="projects" className="py-20 lg:py-32 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Real projects I've worked on — click any project to see the full case study
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={\`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 \${
                activeCategory === cat.key
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-600 text-white shadow-lg shadow-indigo-500/20'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }\`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <button
              key={project.id}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                onProjectClick(project.id);
              }}
              className="group bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm border border-gray-100 dark:border-gray-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 cursor-pointer relative text-left w-full"
            >
              <div className={\`h-48 bg-gradient-to-br \${project.color} flex items-center justify-center relative overflow-hidden\`}>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-30 transition-all duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                
                <div className="absolute inset-0 flex flex-col justify-end p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{project.emoji}</span>
                      <span className="text-white font-bold text-lg">{project.title}</span>
                    </div>
                    <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 space-y-1">
                      <p className="text-white/90 text-xs">
                        <span className="font-semibold">Role:</span> {project.role}
                      </p>
                      <p className="text-white/90 text-xs">
                        <span className="font-semibold">Type:</span> {project.projectType}
                      </p>
                      {project.technologies && (
                        <p className="text-white/90 text-xs">
                          <span className="font-semibold">Tech:</span> {project.technologies.slice(0, 3).join(', ')}
                        </p>
                      )}
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-white text-sm font-medium">View Full Case Study →</span>
                      <ArrowUpRight className="text-white" size={20} />
                    </div>
                  </div>
                </div>

                <div className="absolute top-3 right-3">
                  <span className={\`px-2 py-1 text-xs font-medium rounded-full \${
                    project.status === 'Live' 
                      ? 'bg-green-500/90 text-white' 
                      : 'bg-yellow-500/90 text-white'
                  }\`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed line-clamp-2">
                  {project.shortDescription}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                  {project.tags.length > 4 && (
                    <span className="px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-500 dark:text-gray-400 rounded-full">
                      +{project.tags.length - 4}
                    </span>
                  )}
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-gray-100 dark:border-gray-700">
                  <span className="text-sm font-medium text-indigo-500 group-hover:text-indigo-600 transition-colors">
                    View Case Study →
                  </span>
                  <ArrowUpRight className="text-gray-400 group-hover:text-indigo-500 transition-colors" size={18} />
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
`,

  'src/components/Contact.tsx': `import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

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
    const mailtoLink = \`mailto:pankajsengar071@gmail.com?subject=\${encodeURIComponent(formData.subject)}&body=\${encodeURIComponent(
      \`Name: \${formData.name}\\nEmail: \${formData.email}\\n\\n\${formData.message}\`
    )}\`;
    window.location.href = mailtoLink;
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-20 lg:py-32 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Let's Work{' '}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Together
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Hiring for a marketing role? I'd love to chat about how I can help your brand grow.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                Get in touch
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                I'm actively seeking new opportunities. Whether you need a digital marketing 
                specialist, a web developer, or both — let's connect!
              </p>
            </div>

            <div className="space-y-6">
              <a href="mailto:pankajsengar071@gmail.com" className="flex items-center gap-4 hover:translate-x-1 transition-transform">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center">
                  <Mail className="text-indigo-500" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Email</p>
                  <p className="text-gray-900 dark:text-white font-medium">pankajsengar071@gmail.com</p>
                </div>
              </a>

              <a href="tel:+917557435690" className="flex items-center gap-4 hover:translate-x-1 transition-transform">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center">
                  <Phone className="text-indigo-500" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Phone</p>
                  <p className="text-gray-900 dark:text-white font-medium">+91-7557435690</p>
                </div>
              </a>

              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center">
                  <MapPin className="text-indigo-500" size={20} />
                </div>
                <div>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Location</p>
                  <p className="text-gray-900 dark:text-white font-medium">India</p>
                </div>
              </div>
            </div>

            <div className="p-4 rounded-xl bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <p className="text-green-700 dark:text-green-400 font-medium text-sm">
                  ✅ Actively seeking new opportunities
                </p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-sm border border-gray-100 dark:border-gray-700">
              <div className="grid sm:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Your Email</label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Subject</label>
                <input
                  type="text"
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all"
                  placeholder="Job Opportunity / Project Inquiry"
                  required
                />
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Message</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-white focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none transition-all resize-none"
                  placeholder="Tell me about the opportunity..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-6 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-xl font-medium flex items-center justify-center gap-2 hover:shadow-lg hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
              >
                {submitted ? (<><span>✓</span> Opening Email...</>) : (<><Send size={18} /> Send Message</>)}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
`,

  'src/components/Footer.tsx': `import React from 'react';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-gray-950 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <a href="#home" className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
              Pankaj.
            </a>
            <p className="text-gray-400 mt-2 text-sm">
              Digital Marketing Manager & Web Developer — Actively seeking new opportunities 🚀
            </p>
          </div>

          <div className="flex items-center gap-8">
            <a href="#about" className="text-gray-400 hover:text-white transition-colors text-sm">About</a>
            <a href="#experience" className="text-gray-400 hover:text-white transition-colors text-sm">Experience</a>
            <a href="#resume" className="text-gray-400 hover:text-white transition-colors text-sm">Resume</a>
            <a href="#projects" className="text-gray-400 hover:text-white transition-colors text-sm">Projects</a>
            <a href="#contact" className="text-gray-400 hover:text-white transition-colors text-sm">Contact</a>
          </div>

          <button
            onClick={scrollToTop}
            className="p-3 bg-indigo-500/20 rounded-full text-indigo-400 hover:bg-indigo-500/30 transition-colors hover:-translate-y-1 transform duration-300"
          >
            <ArrowUp size={20} />
          </button>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2026 Pankaj — Actively seeking new opportunities 🚀
          </p>
        </div>
      </div>
    </footer>
  );
}
`,

  'src/components/Resume.tsx': `import React from 'react';
import { FileDown, GraduationCap, Award, Download } from 'lucide-react';

export default function Resume() {
  return (
    <section id="resume" className="py-20 lg:py-32 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            My{' '}
            <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent">
              Resume
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 mx-auto rounded-full" />
          <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Education, certifications, and downloadable CV
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center">
                <GraduationCap className="text-indigo-500" size={20} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Education</h3>
            </div>
            <div className="space-y-4">
              <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-700">
                <p className="font-semibold text-gray-900 dark:text-white">🎓 Master of Computer Science (MCA)</p>
                <p className="text-sm text-indigo-500 dark:text-indigo-400 mt-1">Mangalayatan University</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">Expected 2028</p>
              </div>
              <div className="p-4 bg-white dark:bg-gray-900 rounded-xl border border-gray-100 dark:border-gray-700">
                <p className="font-semibold text-gray-900 dark:text-white">🎓 Bachelor of Computer Science (BCA)</p>
                <p className="text-sm text-indigo-500 dark:text-indigo-400 mt-1">Kalinga University</p>
                <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">2025</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-50 dark:bg-gray-800 rounded-2xl p-6 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-purple-100 dark:bg-purple-900/50 flex items-center justify-center">
                <Award className="text-purple-500" size={20} />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">Highlights</h3>
            </div>
            <div className="space-y-3">
              {[
                { label: 'Experience', value: '3.5+ Years' },
                { label: 'Projects Completed', value: '12+' },
                { label: 'Traffic Growth', value: 'Up to 300%' },
                { label: 'CTR Achieved', value: 'Up to 3.1%' },
                { label: 'CPC Reduction', value: 'Up to 22%' },
              ].map((item) => (
                <div key={item.label} className="flex items-center justify-between p-3 bg-white dark:bg-gray-900 rounded-lg border border-gray-100 dark:border-gray-700">
                  <span className="text-sm text-gray-600 dark:text-gray-400">{item.label}</span>
                  <span className="font-bold text-indigo-500">{item.value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-2xl p-6 text-white flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                  <FileDown size={20} />
                </div>
                <h3 className="text-xl font-bold">Download CV</h3>
              </div>
              <p className="text-white/80 leading-relaxed mb-6">
                Get my complete resume with all experience, skills, projects, and education details.
              </p>
            </div>
            <a
              href="https://app.notion.com/p/My-Resume-32df39a9b5ef8210927901ddd22e7424"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 bg-white text-indigo-600 rounded-xl font-medium hover:shadow-lg transition-all hover:-translate-y-0.5"
            >
              <Download size={18} />
              View Full Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
`,

  'src/components/ProjectDetail.tsx': `import React from 'react';
import { ArrowLeft, ExternalLink, FileSpreadsheet, FileText, CheckCircle, Code, Tag, Briefcase, Activity } from 'lucide-react';
import { Project } from '../data/projects';

type Props = {
  project: Project;
  onBack: () => void;
};

export default function ProjectDetail({ project, onBack }: Props) {
  return (
    <section className="pt-24 pb-20 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          onClick={onBack}
          className="flex items-center gap-2 text-gray-600 dark:text-gray-300 hover:text-indigo-500 transition-colors mb-8 group"
        >
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="font-medium">Back to Projects</span>
        </button>

        <div className={\`relative rounded-3xl overflow-hidden mb-8 bg-gradient-to-br \${project.color} p-8 sm:p-12\`}>
          <div className="absolute inset-0 bg-black/20" />
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-4">
              <span className="text-5xl">{project.emoji}</span>
              <div>
                <span className={\`inline-block px-3 py-1 text-xs font-medium rounded-full \${
                  project.status === 'Live' 
                    ? 'bg-green-500/20 text-green-100 border border-green-400/30' 
                    : 'bg-yellow-500/20 text-yellow-100 border border-yellow-400/30'
                }\`}>
                  {project.status === 'Live' ? '● Live' : '◐ In Progress'}
                </span>
              </div>
            </div>
            <h1 className="text-3xl sm:text-5xl font-bold text-white mb-4">
              {project.title}
            </h1>
            <p className="text-white/90 text-lg max-w-3xl">
              {project.shortDescription}
            </p>
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-white text-gray-900 rounded-full font-medium hover:shadow-lg transition-all hover:-translate-y-0.5"
              >
                <ExternalLink size={18} />
                Visit Live Website
              </a>
            )}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2 text-indigo-500 mb-2">
              <Briefcase size={16} />
              <span className="text-xs font-medium uppercase tracking-wide">My Role</span>
            </div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">{project.role}</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2 text-indigo-500 mb-2">
              <Tag size={16} />
              <span className="text-xs font-medium uppercase tracking-wide">Project Type</span>
            </div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">{project.projectType}</p>
          </div>
          <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
            <div className="flex items-center gap-2 text-indigo-500 mb-2">
              <Activity size={16} />
              <span className="text-xs font-medium uppercase tracking-wide">Status</span>
            </div>
            <p className="text-sm font-medium text-gray-900 dark:text-white">{project.status}</p>
          </div>
          {project.technologies && (
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-4 border border-gray-100 dark:border-gray-700">
              <div className="flex items-center gap-2 text-indigo-500 mb-2">
                <Code size={16} />
                <span className="text-xs font-medium uppercase tracking-wide">Tech Stack</span>
              </div>
              <p className="text-sm font-medium text-gray-900 dark:text-white">{project.technologies.join(', ')}</p>
            </div>
          )}
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="w-8 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" />
            Overview
          </h2>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg">
            {project.overview}
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" />
            What I Did
          </h2>
          <div className="space-y-4">
            {project.whatIDid.map((item, index) => (
              <div
                key={index}
                className="flex gap-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/50 flex items-center justify-center text-indigo-500 font-bold text-sm">
                  {index + 1}
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
            <span className="w-8 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" />
            What It Shows
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {project.whatItShows.map((item, index) => (
              <div
                key={index}
                className="flex gap-3 p-4 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 rounded-xl border border-indigo-100 dark:border-indigo-800/50"
              >
                <CheckCircle className="text-indigo-500 flex-shrink-0 mt-0.5" size={20} />
                <p className="text-gray-700 dark:text-gray-300 font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {(project.sheets || project.reports) && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" />
              Documents & Sheets
            </h2>
            <div className="grid sm:grid-cols-2 gap-4">
              {project.sheets?.map((sheet, index) => (
                <a
                  key={index}
                  href={sheet.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-green-300 dark:hover:border-green-700 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0">
                    <FileSpreadsheet className="text-green-600 dark:text-green-400" size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 dark:text-white group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors truncate">
                      {sheet.label}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Google Sheets →</p>
                  </div>
                </a>
              ))}
              {project.reports?.map((report, index) => (
                <a
                  key={index}
                  href={report.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-100 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700 hover:shadow-md transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center flex-shrink-0">
                    <FileText className="text-blue-600 dark:text-blue-400" size={24} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors truncate">
                      {report.label}
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">Google Docs →</p>
                  </div>
                </a>
              ))}
            </div>
          </div>
        )}

        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
            <span className="w-8 h-1 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full" />
            Skills Used
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-4 py-2 bg-white dark:bg-gray-800 rounded-full text-sm font-medium text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="text-center pt-8 border-t border-gray-100 dark:border-gray-800">
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Interested in working together?
          </p>
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              onBack();
            }}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-medium hover:shadow-lg hover:shadow-indigo-500/30 transition-all hover:-translate-y-0.5"
          >
            Let's Connect
          </a>
        </div>
      </div>
    </section>
  );
}
`,

  'src/data/projects.ts': `export type Project = {
  id: string;
  title: string;
  emoji: string;
  shortDescription: string;
  tags: string[];
  color: string;
  category: 'marketing' | 'webdev' | 'content';
  image: string;
  liveUrl?: string;
  role: string;
  projectType: string;
  status: string;
  overview: string;
  whatIDid: string[];
  whatItShows: string[];
  technologies?: string[];
  sheets?: { label: string; url: string }[];
  reports?: { label: string; url: string }[];
};

export const projects: Project[] = [
  {
    id: 'jai-ambay',
    title: 'Jai Ambay Etching Process',
    emoji: '📣',
    shortDescription: 'SEO-focused growth project — on-page + technical SEO, content optimization, and performance improvements to boost organic visibility.',
    tags: ['SEO', 'Google Analytics', 'Social Media', 'WordPress', 'Web Development', 'Content Writing'],
    color: 'from-blue-500 to-cyan-500',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=600&h=400&fit=crop',
    liveUrl: 'https://jaiambayetchingprocess.in/',
    role: 'Digital Marketing Manager',
    projectType: 'SEO',
    status: 'Live',
    overview: 'An SEO, AEO, and GEO-focused content project for Jai Ambay Etching Process, focused on increasing organic traffic, improving AI search visibility, and achieving stronger rankings for high-intent industrial service keywords.',
    whatIDid: [
      'Keyword & Intent Analysis: Conducted high-intent keyword research and search intent analysis across core industrial services.',
      'Core Service Page Optimization: Created SEO-focused content for service offerings, including 5 Axis Laser Texturing, Mould Texturing, Mould Polishing, Chemical Etching, and PTFE Non-Stick Coating.',
      'Thought Leadership & Blog Content Strategy: Authored 10+ SEO, AEO, and GEO-optimized blog posts to capture long-tail search queries, build domain authority, and answer conversational AI search prompts.',
      'Search Visibility & Optimization: Optimized website content for traditional Google search as well as AI-powered search platforms (Perplexity, ChatGPT, Google SGE/AI Overviews).',
      'Content Structuring: Structured content logically around services, applications, technical processes, benefits, and structured FAQs.',
      'Technical Communication: Developed clear, technically accurate content to simplify complex industrial manufacturing processes.',
    ],
    whatItShows: [
      '300% Increase in organic traffic.',
      '60+ Keywords ranking across target industrial categories.',
      '10+ Keywords ranking in the Top 10 SERP positions.',
      'Enhanced AI & Generative Search Visibility across AI-powered search engines.',
    ],
    sheets: [
      { label: 'Master Sheet', url: 'https://docs.google.com/spreadsheets/d/141Y4fW2TWjjbUY9E8Fk9EuGGzS1SpGK4WTCFUfMbEao/edit?gid=207721917#gid=207721917' },
      { label: 'Backlink & Keyword Sheet', url: 'https://docs.google.com/spreadsheets/d/1n1z7rzfHTWGb-RhfckamH_3lUIfQRc6Vyn11_XiXmd8/edit?usp=sharing' },
    ],
    reports: [
      { label: 'Website Audit Report', url: 'https://docs.google.com/document/d/1fmhhNo-foAGdZ7dwTuIbQtJFV0Alb09ODpAXKGoUuqs/edit?usp=sharing' },
      { label: 'Technical SEO Report', url: 'https://docs.google.com/document/d/1_4j-4ytBXQEvibSDoXKGPPzRGSwnHSqfsdL3uUPIJeM/edit?usp=sharing' },
    ],
  },
  {
    id: 'resort-tent',
    title: 'Resort Tent Creation',
    emoji: '🎪',
    shortDescription: 'Full-stack website + SEO project — built Next.js + Node/Express platform, implemented technical SEO (SSR, sitemaps, schema).',
    tags: ['SEO', 'Web Development', 'Website Handling', 'Content Writing', 'Google Analytics'],
    color: 'from-emerald-500 to-teal-500',
    category: 'webdev',
    image: 'https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=600&h=400&fit=crop',
    liveUrl: 'https://resorttentcreation.com/',
    role: 'Full-Stack Developer + SEO Specialist',
    projectType: 'SEO + Web Development',
    status: 'Live',
    overview: 'A full-stack web development, SEO, AEO, and GEO-focused project for Resort Tent Creation, centered on engineering a high-speed digital platform, driving qualified B2B leads, and scaling search authority across Google and AI answer engines.',
    whatIDid: [
      'Full-Stack Engineering: Developed a fast, modern web application using Next.js and Tailwind CSS on the frontend, supported by a scalable Node.js and Express.js backend.',
      'API & Lead Automation: Integrated the Resend Mail API to handle contact requests with real-time, zero-latency email notifications.',
      'Advanced SEO Implementation: Built custom dynamic XML sitemaps, structured semantic HTML layouts, optimized meta tags, and utilized Next.js SSR for fast indexing.',
      'AEO & GEO Strategy: Implemented rich JSON-LD schema (Product, Organization, LocalBusiness), programmatic location/city landing pages, and conversational Q&A formats.',
      'Targeted Content Optimization: Created technically detailed, search-optimized copy covering commercial tent specifications, structural durability, materials, and custom resort solutions.',
    ],
    whatItShows: [
      '150% Increase in organic search traffic within target B2B hospitality categories.',
      'Enhanced AI Search Visibility: Consistent citations in generative AI engines for luxury tent and glamping queries.',
      'Optimized Conversion Flow: Reduced page loading times and created streamlined inquiry pathways.',
    ],
    technologies: ['Next.js', 'Node.js', 'Express.js', 'Tailwind CSS', 'Resend API'],
  },
  {
    id: 'noblekode',
    title: 'Noblekode',
    emoji: '🚀',
    shortDescription: 'End-to-end website + SEO project for NobleKode — built Next.js frontend, improved technical/on-page SEO, created optimized content.',
    tags: ['SEO', 'Web Development', 'Social Media', 'Google Analytics', 'Content Writing', 'Canva'],
    color: 'from-purple-500 to-pink-500',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    liveUrl: 'https://www.noblekode.com/',
    role: 'Digital Marketing Specialist + Next.js Developer',
    projectType: 'SEO + Web Development',
    status: 'Live',
    overview: 'A web development, SEO, AEO, and GEO-focused digital project for Noble Kode aimed at building a modern frontend web presence, driving organic traffic, and establishing authority across traditional search engines and AI answer engines.',
    whatIDid: [
      'Frontend Development: Designed and built a responsive frontend using Next.js and shadcn/ui components for optimized page load speed, accessibility, and modern UI/UX design.',
      'Search Optimization (SEO, AEO & GEO): Engineered the website structure and content strategy for high discoverability across traditional search engines (Google), AI engines (Perplexity, ChatGPT), and location-aware spatial search algorithms.',
      'Content & Blog Strategy: Authored 5+ targeted, SEO-, AEO-, and GEO-optimized blog posts focusing on web development, modern frontend frameworks, and digital transformation topics.',
      'Technical On-Page Optimization: Implemented structural schema markup, metadata optimization, semantic HTML tags, and dynamic rendering workflows.',
      'User Experience & Conversion Focus: Built clean component architecture with explicit CTAs to guide user journeys.',
    ],
    whatItShows: [
      'High-Performance Architecture: Fast rendering and optimized site metrics driven by Next.js and Tailwind/shadcn components.',
      'Cross-Engine Search Visibility: Improved organic reach across traditional SERP positions alongside direct answer visibility in AI engines.',
      'Thought Leadership & Organic Reach: Expanded keyword coverage and domain authority through high-intent blog content strategies.',
    ],
    sheets: [
      { label: 'Keyword & Backlink Sheet', url: 'https://docs.google.com/spreadsheets/d/1ViHZD4lN3Nvsh9cwGIJerJJlwgId2GVj4GNexwTm19A/edit?usp=sharing' },
      { label: 'SEO Tracking Sheet', url: 'https://docs.google.com/spreadsheets/d/1YAOYHnQSVLRgM9zAP-vASzMZom1KW8Zv8xXAsOAjuZU/edit?gid=366162538#gid=366162538' },
    ],
  },
  {
    id: 'tbond',
    title: 'Tbond',
    emoji: '👛',
    shortDescription: 'Lead generation campaigns — achieved 3.1% CTR, reduced CPC by 22%, increased store inquiries by ~40% in Delhi NCR.',
    tags: ['Paid Ads', 'Copywriting', 'SEO', 'Content Writing', 'Web Development'],
    color: 'from-orange-500 to-red-500',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop',
    liveUrl: 'https://tbond.in/',
    role: 'Digital Marketer (Lead Generation + SEO)',
    projectType: 'Paid Ads',
    status: 'Live',
    overview: 'A lead generation + SEO support project for Tbond, focused on generating qualified inquiries in Delhi NCR for tile adhesives, epoxy, and 3D room design services through Meta Ads, audience targeting, and conversion-focused creatives.',
    whatIDid: [
      'Lead Gen Campaign Setup: Planned and executed Meta Ads lead generation campaigns aligned to business goals.',
      'Audience Strategy: Built custom audiences, lookalikes, and retargeting to improve lead quality and reduce waste.',
      'Creative & Copy: Created and tested multiple ad creatives and copies to improve CTR and conversion intent.',
      'A/B Testing: Ran A/B tests across creatives, hooks, and placements to reduce CPC and improve performance.',
      'SEO Support: Supported on-page, off-page, and technical SEO improvements to strengthen organic visibility alongside paid growth.',
      'Tracking & Reporting: Monitored results and optimized based on CTR, CPC, and lead quality.',
    ],
    whatItShows: [
      '3.1% CTR (above the industry average of ~1–1.5%).',
      '22% lower CPC through custom audiences and iterative testing.',
      '~40% increase in store inquiries in the Delhi NCR region.',
    ],
  },
  {
    id: 'ayuvya',
    title: 'Ayuvya Ayurveda',
    emoji: '🧃',
    shortDescription: 'Led SEO efforts — improved organic traffic by ~45% through on-page, off-page, and technical SEO.',
    tags: ['SEO', 'Google Analytics', 'Content Writing', 'GSC'],
    color: 'from-green-500 to-lime-500',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?w=600&h=400&fit=crop',
    liveUrl: 'https://ayuvya.com/',
    role: 'SEO (On-page/Off-page/Technical)',
    projectType: 'SEO',
    status: 'Live',
    overview: 'An SEO growth project for Ayuvya Ayurveda focused on increasing organic traffic, improving keyword rankings, and strengthening site health through on-page, off-page, and technical SEO.',
    whatIDid: [
      'On-Page SEO: Optimized key pages with improved title tags, meta descriptions, headings, internal linking, and keyword mapping.',
      'Technical SEO: Identified and fixed crawl/indexing and performance issues; improved site structure and overall SEO health.',
      'Content Optimization: Updated and optimized content to better match search intent and improve engagement.',
      'Keyword Research & Competitor Analysis: Researched high-intent keywords and analyzed competitors to find growth opportunities.',
      'Off-Page SEO: Built quality backlinks to improve domain authority and keyword visibility.',
      'Tracking & Reporting: Monitored performance using GA4 and Google Search Console and shared actionable insights.',
    ],
    whatItShows: [
      '~45% increase in organic traffic.',
      'Improved keyword rankings across target Ayurveda-related searches.',
      'Stronger site performance and technical SEO health through ongoing fixes and optimization.',
    ],
  },
  {
    id: 'hommy',
    title: 'Hommy Pvt. Ltd',
    emoji: '🛖',
    shortDescription: 'Brand awareness campaigns — achieved 2.7% CTR, reduced CPC by 18%, increased website traffic by ~55% in first month.',
    tags: ['Brand Campaign', 'Content Writing', 'Web Development', 'SEO'],
    color: 'from-indigo-500 to-blue-500',
    category: 'marketing',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600&h=400&fit=crop',
    liveUrl: 'https://hommy.design/',
    role: 'Digital Marketer (Meta Ads + SEO)',
    projectType: 'Brand Campaign',
    status: 'Live',
    overview: 'A performance marketing + brand awareness project for Hommy focused on driving qualified traffic and increasing engagement for free tile samples and 3D visualization services through Meta Ads and creative testing.',
    whatIDid: [
      'Campaign Strategy: Planned and executed brand awareness + engagement campaigns aligned to top-of-funnel objectives.',
      'Targeting & Audiences: Built and optimized audiences (interests, lookalikes, retargeting) to improve reach and relevance.',
      'Creative & Copy: Wrote ad copy and iterated creatives to improve CTR.',
      'A/B Testing: Tested multiple creatives, hooks, and placements to reduce CPC and improve performance.',
      'Optimization & Reporting: Optimized budgets, placements, and messaging based on results and reporting.',
    ],
    whatItShows: [
      '2.7% CTR achieved through targeting + creative optimization.',
      '18% lower CPC after iterative testing and refinements.',
      '~55% increase in website traffic within the first month.',
    ],
  },
  {
    id: 'event-decoration',
    title: 'Event Decoration',
    emoji: '🌐',
    shortDescription: 'Designed and developed a complete website for an event decoration business with modern UI and responsive design.',
    tags: ['Next.js', 'React', 'Tailwind CSS', 'Web Development'],
    color: 'from-pink-500 to-rose-500',
    category: 'webdev',
    image: 'https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=600&h=400&fit=crop',
    liveUrl: 'https://decoration-event.netlify.app/',
    role: 'Full-Stack Developer',
    projectType: 'Web Development',
    status: 'Live',
    overview: 'A landing page website built for an event decoration business, showcasing services, gallery, and contact options with a modern, responsive design.',
    whatIDid: [
      'Designed and developed a complete landing page using Next.js and Tailwind CSS.',
      'Built responsive layouts optimized for mobile, tablet, and desktop devices.',
      'Implemented smooth animations and modern UI components for better user engagement.',
      'Optimized for fast loading speeds and SEO best practices.',
    ],
    whatItShows: [
      'Strong frontend development skills with Next.js and Tailwind CSS.',
      'Ability to deliver complete, production-ready websites.',
      'Focus on responsive design and user experience.',
    ],
    technologies: ['Next.js', 'Tailwind CSS', 'React', 'Netlify'],
  },
  {
    id: 'ptfe',
    title: 'Ptfe Non Stick Coating',
    emoji: '🚀',
    shortDescription: 'Built a professional website for an industrial PTFE non-stick coating company showcasing products and services.',
    tags: ['HTML', 'CSS', 'JavaScript', 'PHP', 'SEO'],
    color: 'from-teal-500 to-cyan-500',
    category: 'webdev',
    image: 'https://images.unsplash.com/photo-1565793298595-6a879b1d9492?w=600&h=400&fit=crop',
    liveUrl: 'https://ptfenonstickcoating.com/',
    role: 'Digital Marketer + Full Stack Developer',
    projectType: 'Web Development',
    status: 'Live',
    overview: 'A complete website built for a PTFE non-stick coating company, showcasing industrial products, services, and technical capabilities.',
    whatIDid: [
      'Built the complete website using HTML, CSS, JavaScript, and PHP.',
      'Designed product pages showcasing PTFE coating services and applications.',
      'Implemented SEO-friendly structure and metadata optimization.',
      'Created contact forms and inquiry management system.',
    ],
    whatItShows: [
      'Full-stack development capability with PHP and frontend technologies.',
      'Ability to build industrial/business websites from scratch.',
      'Integration of marketing and technical skills.',
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'PHP'],
  },
  {
    id: 'a4-resorts',
    title: 'A4 Resorts and Homestay',
    emoji: '🛖',
    shortDescription: 'Developed a booking-friendly website for a resort and homestay business with gallery, rooms showcase, and contact integration.',
    tags: ['WordPress', 'Web Development', 'SEO'],
    color: 'from-amber-500 to-orange-500',
    category: 'webdev',
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600&h=400&fit=crop',
    liveUrl: 'https://a4resorts.com/',
    role: 'Freelancer',
    projectType: 'Web Development',
    status: 'Live',
    overview: 'A WordPress-based website for A4 Resorts and Homestay, designed to showcase rooms, amenities, and facilitate bookings.',
    whatIDid: [
      'Developed the complete website using WordPress.',
      'Designed room showcase pages with gallery and booking integration.',
      'Implemented SEO-friendly structure and local SEO optimization.',
      'Created contact and inquiry forms for direct bookings.',
    ],
    whatItShows: [
      'WordPress development expertise.',
      'Ability to deliver hospitality/travel websites.',
      'Focus on user experience and conversion optimization.',
    ],
    technologies: ['WordPress', 'PHP', 'CSS', 'JavaScript'],
  },
  {
    id: 'nanhi-shop',
    title: 'Nanhi Shop',
    emoji: '📚',
    shortDescription: 'E-commerce web development project for a retail shop with product listings, cart functionality, and payment integration.',
    tags: ['Next.js', 'React', 'E-commerce', 'Web Development'],
    color: 'from-violet-500 to-purple-500',
    category: 'webdev',
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?w=600&h=400&fit=crop',
    liveUrl: 'https://nanhi-shop.netlify.app/',
    role: 'Full Stack Web Developer',
    projectType: 'E-commerce',
    status: 'In Progress',
    overview: 'An e-commerce web development project for a retail shop featuring product listings, shopping cart functionality, and payment integration.',
    whatIDid: [
      'Built the e-commerce platform using Next.js and React.',
      'Implemented product listing pages with filtering and search.',
      'Developed shopping cart and checkout flow.',
      'Integrated payment gateway for seamless transactions.',
    ],
    whatItShows: [
      'E-commerce development capabilities.',
      'Full-stack skills with modern frameworks.',
      'Focus on user experience and conversion optimization.',
    ],
    technologies: ['Next.js', 'React', 'Netlify'],
  },
  {
    id: 'blog-writing',
    title: 'Blog Writing',
    emoji: '📔',
    shortDescription: 'Writing and publishing SEO, AEO, and GEO based blog content for Jai Ambay Etching Process to improve visibility.',
    tags: ['Content Writing', 'SEO', 'Blog', 'Keyword Research'],
    color: 'from-sky-500 to-blue-500',
    category: 'content',
    image: 'https://images.unsplash.com/photo-1455390582262-044cdead277a?w=600&h=400&fit=crop',
    liveUrl: 'https://jaiambayetchingprocess.in/',
    role: 'Blog Writer (SEO + AEO + GEO)',
    projectType: 'Content Writing',
    status: 'Live',
    overview: 'A blog writing + publishing project for Jai Ambay Etching Process, where I create SEO, AEO (Answer Engine Optimization), and GEO (Generative Engine Optimization) content to improve organic visibility across Google and AI-driven search experiences.',
    whatIDid: [
      'Wrote and published blog posts for Jai Ambay Etching Process.',
      'Planned topics based on search intent and high-intent industrial service keywords.',
      'Optimized articles with on-page SEO best practices (headings, internal linking, metadata, and readability).',
      'Structured content for AEO/GEO with clear sections, concise answers, and FAQs so AI systems can extract key information.',
      'Coordinated publishing and updates to keep the blog consistent and up to date.',
    ],
    whatItShows: [
      'Strong SEO-first content writing and publishing skills.',
      'Ability to create content that performs in both traditional search (SEO) and AI answer engines (AEO/GEO).',
      'End-to-end ownership of the content workflow (research → writing → optimization → publishing).',
    ],
  },
  {
    id: 'noble-kode-blog',
    title: 'Noble Kode Blog',
    emoji: '📘',
    shortDescription: 'Featured blog content creation for Noblekode — technical articles, tutorials, and industry insights to boost organic reach.',
    tags: ['Content Writing', 'SEO', 'Technical Writing', 'Blog'],
    color: 'from-fuchsia-500 to-pink-500',
    category: 'content',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=600&h=400&fit=crop',
    liveUrl: 'https://www.noblekode.com/',
    role: 'Content Writer & SEO Specialist',
    projectType: 'Content Writing',
    status: 'Live',
    overview: 'Featured blog content creation for Noblekode, focusing on technical articles, tutorials, and industry insights to boost organic reach and establish thought leadership.',
    whatIDid: [
      'Researched and planned blog topics based on target audience and keyword opportunities.',
      'Wrote in-depth technical articles on web development, frontend frameworks, and digital transformation.',
      'Optimized all content for SEO with proper headings, metadata, and internal linking.',
      'Structured content for AI search engines (AEO/GEO) with clear answers and FAQs.',
    ],
    whatItShows: [
      'Technical writing skills in the web development domain.',
      'SEO content strategy and execution.',
      'Ability to create content for both humans and AI search engines.',
    ],
  },
];
`,
};

export default function DownloadButton() {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    
    try {
      const zip = new JSZip();
      
      // Add all source files
      Object.entries(sourceFiles).forEach(([path, content]) => {
        zip.file(path, content);
      });

      // Generate ZIP file
      const blob = await zip.generateAsync({ type: 'blob' });
      
      // Save the file
      saveAs(blob, 'pankaj-portfolio.zip');
    } catch (error) {
      console.error('Error creating ZIP:', error);
      alert('Error downloading file. Please try again.');
    } finally {
      setIsDownloading(false);
    }
  };

  return (
    <button
      onClick={handleDownload}
      disabled={isDownloading}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-5 py-3 bg-gradient-to-r from-indigo-500 to-purple-600 text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:shadow-indigo-500/30 transition-all duration-300 hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed"
      title="Download Source Code"
    >
      {isDownloading ? (
        <>
          <Loader2 size={18} className="animate-spin" />
          <span>Downloading...</span>
        </>
      ) : (
        <>
          <Download size={18} />
          <span>Download Code</span>
        </>
      )}
    </button>
  );
}
