import { useState, useEffect } from 'react';

export default function Header() {
  const [active, setActive] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'contact'];
      const scrollPos = window.scrollY + window.innerHeight / 2;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.offsetTop <= scrollPos && (el.offsetTop + el.offsetHeight) > scrollPos) {
          setActive(section);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 w-full bg-gray-900 bg-opacity-90 dark:bg-gray-800 shadow z-50 backdrop-blur-md">
      <nav className="max-w-7xl mx-auto flex justify-center space-x-10 py-4">
        {['hero', 'about', 'skills', 'projects', 'contact'].map((section) => (
          <a
            key={section}
            href={`#${section}`}
            className={`text-gray-400 hover:text-indigo-400 transition-colors ${
              active === section ? 'text-indigo-400 font-semibold' : ''
            }`}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </a>
        ))}
      </nav>
    </header>
  );
}
