// filepath: i:/2025/latihan nextjs/hawu/src/app/display/About.tsx
import React from 'react';

const About = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full w-full bg-gradient-to-b from-black/90 to-black/50 text-white' data-aos="zoom-in">
          <h1 className="text-4xl font-bold mb-4">About This Web</h1>
          <p className="text-lg max-w-2xl">
            This is a simple portfolio website created using Next.js and Tailwind CSS. It showcases my projects and provides a way to contact me. The design is clean and responsive, making it easy to navigate on different devices.
          </p>  
    </div>

  );
};

export default About;