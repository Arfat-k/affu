// components/Footer.jsx
import { Link } from 'react-router-dom';

function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <footer className="bg-gradient-to-t from-black via-purple-900 to-indigo-900 text-white mt-24 pt-10 pb-6 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6 items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold mb-2">AI Interview Coach</h2>
          <p className="text-sm text-gray-300">Built for job seekers, students, and professionals to master their interviews with AI-powered guidance.</p>
        </div>
        <div className="flex justify-start md:justify-end space-x-6 mt-4 md:mt-0">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/features" className="hover:text-yellow-400">Features</Link>
          <Link to="/login" className="hover:text-yellow-400">Login</Link>
        </div>
      </div>
      <div className="text-center text-gray-400 text-sm mt-6">
        © {new Date().getFullYear()} AI Interview Coach. All rights reserved.
        <button onClick={scrollToTop} className="block mt-2 text-indigo-300 hover:text-yellow-300 transition-all">
          ↑ Back to Top
        </button>
      </div>
    </footer>
  );
}

export default Footer;
