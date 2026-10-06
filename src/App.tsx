import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Experience from './components/Experience';
import Projects from './components/Projects';
import ProjectDetail from './components/ProjectDetail';
import Testimonials from './components/Testimonials';
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
      <div className="min-h-screen bg-white text-gray-900 transition-colors">
        <Navbar />
        <ProjectDetail project={project} onBack={handleBack} />
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white text-gray-900 transition-colors">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Experience />
        <Projects onProjectClick={handleProjectClick} />
        <Testimonials />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
