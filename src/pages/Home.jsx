// pages/Home.jsx
import { motion } from 'framer-motion';
import LottieAnimation from '../components/LottieAnimation';
import aiAnimation from '../assets/ai-hero.json'; // ✅ Ensure this file exists in assets

function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="flex flex-col-reverse md:flex-row items-center justify-center gap-12 text-center md:text-left mt-20 px-6">
        {/* Left - Text */}
        <div className="md:w-1/2">
          <motion.h2
            initial={{ opacity: 0, y: -40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-extrabold leading-tight"
          >
            Master Interviews with <span className="text-yellow-300">AI</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="mt-6 text-lg md:text-xl text-gray-200 max-w-xl"
          >
            Your personal AI coach for mock interviews, English speaking, and real-time feedback — built for job seekers at all levels.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.7 }}
            className="mt-8 px-6 py-3 bg-yellow-400 text-black font-semibold rounded-xl hover:bg-yellow-300 transition-all duration-300"
          >
            Get Started
          </motion.button>
        </div>

        {/* Right - Lottie Animation */}
        <div className="md:w-1/2">
          <LottieAnimation src={aiAnimation} height="350px" width="350px" />
        </div>
      </section>

      {/* About Section with AOS */}
      <section
        data-aos="fade-up"
        className="bg-gradient-to-r from-purple-800 to-indigo-900 text-white py-16 px-6"
      >
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">About AI Interview Coach</h2>
          <p className="text-lg text-gray-200 leading-relaxed">
            AI Interview Coach is your intelligent companion designed to help you ace interviews with confidence.
            From personalized feedback and mock sessions to language fluency and real-time analysis, 
            we’re here to boost your preparation — whether you’re a student, fresher, or job seeker.
          </p>
        </div>
      </section>

      {/* ✅ Parallax Scroll Section (Background with fixed scroll effect) */}
      <section
        className="relative bg-fixed bg-center bg-cover bg-no-repeat text-white min-h-screen flex items-center justify-center px-6"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1470&q=80')",
        }}
      >
        <div className="bg-black bg-opacity-60 p-8 rounded-xl max-w-3xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Let Your Journey Begin</h2>
          <p className="text-lg text-gray-300 mb-6">
            Explore personalized AI coaching, real-time feedback, and confidence-boosting sessions with a touch of smart technology.
          </p>
          <button className="px-6 py-3 bg-yellow-400 text-black rounded-md font-semibold hover:bg-yellow-300 transition">
            Start Now
          </button>
        </div>
      </section>

      {/* Testimonials Section with AOS */}
      <section
        data-aos="fade-up"
        data-aos-delay="200"
        className="bg-black text-white py-16 px-6"
      >
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              '“Cracked my interview!”',
              '“Amazing feedback system!”',
              '“Helped me with English fluency.”',
            ].map((quote, i) => (
              <div
                key={i}
                className="bg-gradient-to-br from-purple-900 via-indigo-800 to-purple-900 p-6 rounded-xl shadow-lg"
              >
                <p className="text-gray-200 text-sm mb-2">{quote}</p>
                <span className="text-yellow-400 text-xs">⭐️⭐️⭐️⭐️⭐️</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Home;
