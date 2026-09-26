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
