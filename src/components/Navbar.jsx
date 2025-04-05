// components/Navbar.jsx
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white shadow-md text-black'
          : 'bg-opacity-20 backdrop-blur-md border-b border-white/10 text-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold">AI Interview Coach</h1>
        <ul className="flex space-x-6 font-medium">
          <li><Link to="/" className="hover:text-yellow-400">Home</Link></li>
          <li><Link to="/features" className="hover:text-yellow-400">Features</Link></li>
          <li><Link to="/login" className="hover:text-yellow-400">Login</Link></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
