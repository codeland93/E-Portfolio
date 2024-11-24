import React, { useState } from 'react';
import { Github, Mail, Linkedin } from 'lucide-react';
import CustomCursor from './component/CustomCursor';
import Card from './component/Card';
import Alert from './component/Alert';
import Terminal from './component/Terminal';
import TypingEffect from './component/TypingEffect';

const RetroPortfolio = () => {
  const [isHovering, setIsHovering] = useState(false);

  const projects = [
    {
      title: 'Project Alpha',
      description: 'Full-stack web application with real-time updates',
      tech: ['React', 'Node.js', 'Socket.io', 'MongoDB'],
      preview: '/api/placeholder/300/200',
    },
    {
      title: 'Project Beta',
      description: 'E-commerce platform with payment integration',
      tech: ['Next.js', 'Express', 'PostgreSQL', 'Stripe'],
      preview: '/api/placeholder/300/200',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-green-400 font-mono relative overflow-x-hidden">
      {/* Custom Cursor */}
      <CustomCursor />

      {/* Header */}
      <header className="p-8 border-b border-green-400">
        <h1 className="text-4xl mb-4 animate-pulse">ERIC_FREELAND.exe</h1>
        <p className="text-xl">FULL_STACK_ENGINEER.sys</p>
      </header>

      {/* Main Content */}
      <main className="p-8">
        {/* About Section */}
        <section className="mb-16">
          <Card className="bg-black border-green-400">
            <h2 className="text-2xl text-green-400">&gt; about.txt</h2>
            <div className="flex items-center">
              <Terminal />
              <TypingEffect text="Full stack engineer with expertise in modern web technologies. Passionate about creating efficient, scalable solutions." />
            </div>
          </Card>
        </section>

        {/* Projects Grid */}
        <section className="mb-16">
          <h2 className="text-2xl mb-8">&gt; projects/</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                onMouseEnter={() => setIsHovering(true)}
                onMouseLeave={() => setIsHovering(false)}
              >
                <h3 className="text-xl">{project.title}</h3>
                <img src={project.preview} alt={project.title} className="w-full h-40 object-cover mb-4 opacity-80" />
                <p className="mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 bg-green-900 bg-opacity-30 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* File Upload Section */}
        <section className="mb-16">
          <h2 className="text-2xl mb-8">&gt; upload.exe</h2>
          <Card className="bg-black border-green-400">
            <Alert className="mt-4 bg-green-900 bg-opacity-20 border-green-400">
              File upload section
            </Alert>
          </Card>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-2xl mb-8">&gt; contact.sh</h2>
          <div className="flex gap-6">
            {/* Updated links for routing */}
            <a href="https://github.com/codeland93" className="hover:text-green-300 transition-colors" target="_blank" rel="noopener noreferrer">
              <Github className="w-8 h-8" />
            </a>
            <a href="https://www.linkedin.com/in/eric-freeland-885059135" className="hover:text-green-300 transition-colors" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-8 h-8" />
            </a>
            <a href="mailto:erichfreeland@gmail.com" className="hover:text-green-300 transition-colors">
              <Mail className="w-8 h-8" />
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="p-8 border-t border-green-400 text-center">
        <p>© {new Date().getFullYear()} - MADE_WITH_REACT.js</p>
      </footer>
    </div>
  );
};

export default RetroPortfolio;
