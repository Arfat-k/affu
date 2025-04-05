// App.jsx
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Features from './pages/Features';
import Login from './pages/Login';
import Navbar from './components/Navbar'; // ✅ Navbar component
import Footer from './components/Footer'; // ✅ Footer component

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-600 via-purple-700 to-black text-white">
      <Navbar /> {/* ✅ Sticky & stylish navbar */}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/features" element={<Features />} />
        <Route path="/login" element={<Login />} />
      </Routes>

      <Footer /> {/* ✅ Beautiful footer with scroll to top */}
    </div>
  );
}

export default App;
