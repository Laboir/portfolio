import React, { useState } from 'react';
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
import DownloadButton from './components/DownloadButton';
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
        <DownloadButton />
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
      <DownloadButton />
    </div>
  );
}
