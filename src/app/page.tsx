'use client';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const AboutSection = dynamic(() => import('./display/About'));
const ProjectSection = dynamic(() => import('./display/Project'));
const ContactSection = dynamic(() => import('./display/Contact'));

export default function Home() {
  const [activeSection, setActiveSection] = useState<'about' | 'project' | 'contact'>('about');

  const renderSection = () => {
    switch (activeSection) {
      case 'about':
        return <AboutSection />;
      case 'project':
        return <ProjectSection />;
      case 'contact':
        return <ContactSection />;
      default:
        return <AboutSection />;
    }
  };

  return (
    <main className="flex h-screen">
      <nav className="flex py-10 justify-center h-screen w-80 bg-gradient-to-b from-black/100 to-black/80 text-white">
        <ul className="flex flex-col w-full">
          <li className='text-2xl font-standard border-b-2 border-gray-500 text-center pt-0 pb-16'>          
            <h3>
              My Portfolio
            </h3>
          </li>
          <li className={`text-2xl font-standard border-b-2 border-gray-500 text-center ${activeSection === 'about' ? ' border-r-4 border-yellow-400 bg-gradient-to-r from-yellow-400/0 to-yellow-400/100 text-white' : 'hover:bg-yellow-100'}`}>
            <button
              onClick={() => setActiveSection('about')}
              className="px-10 py-5 w-full h-auto hover:bg-yellow-400 transition duration-300"
            >
              About
            </button>
          </li>
          <li className={`text-2xl font-standard border-b-2 border-gray-500 text-center ${activeSection === 'project' ? ' border-r-4 border-yellow-400 bg-gradient-to-r from-yellow-400/0 to-yellow-400/100 text-white' : 'hover:bg-yellow-100'}`}>
            <button
              onClick={() => setActiveSection('project')}
              className="px-10 py-5 w-full h-auto hover:bg-yellow-400 transition duration-300"
            >
              Projects
            </button>
          </li>
          <li className={`text-2xl font-standard border-b-2 border-gray-500 text-center ${activeSection === 'contact' ? ' border-r-4 border-yellow-400 bg-gradient-to-r from-yellow-400/0 to-yellow-400/100 text-white' : 'hover:bg-yellow-100'}`}>
            <button
              onClick={() => setActiveSection('contact')}
              className="px-10 py-5 w-full h-auto hover:bg-yellow-400 transition duration-300"
            >
              Contact
            </button>
          </li>
        </ul>
      </nav>

      <div className="section h-screen w-full flex items-center justify-center bg-gradient-to-b from-black/90 to-black/50 text-white">
        {renderSection()}
      </div>
    </main>
  );
}
