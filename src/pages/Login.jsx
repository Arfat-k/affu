import { motion } from 'framer-motion';

function Login() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen px-4 bg-gradient-to-b from-indigo-600 via-purple-700 to-black">
      <motion.h2
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-white mb-8"
      >
        Login to Your Account
      </motion.h2>

      <motion.form
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        data-aos="fade-up"
        className="backdrop-blur-xl bg-white/10 text-white border border-white/20 p-8 rounded-2xl w-full max-w-md shadow-xl"
      >
        <input
          type="email"
          placeholder="Email"
          className="w-full mb-4 px-4 py-2 rounded-md bg-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full mb-6 px-4 py-2 rounded-md bg-white/20 placeholder-white/70 text-white focus:outline-none focus:ring-2 focus:ring-yellow-300"
        />
        <button
          className="w-full py-2 bg-yellow-400 text-black font-semibold rounded-md hover:bg-yellow-300 transition duration-300"
        >
          Login
        </button>
      </motion.form>
    </section>
  );
}

export default Login;
