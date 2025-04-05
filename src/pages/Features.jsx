  
// pages/Features.jsx
import { motion } from 'framer-motion';

const features = [
  {
    title: 'Mock Interviews',
    description: 'Simulate real interviews with AI-driven questions and feedback.',
    icon: '🎤',
  },
  {
    title: 'English Speaking Tutor',
    description: 'Practice English speaking from basic to advanced levels.',
    icon: '🗣️',
  },
  {
    title: 'Real-time Feedback',
    description: 'Instant performance analysis and suggestions after each answer.',
    icon: '📊',
  },
  {
    title: 'Resume Upload',
    description: 'Upload your resume and get tailored interview questions.',
    icon: '📄',
  },
  {
    title: 'Track Progress',
    description: 'Analyze your improvement through detailed metrics.',
    icon: '📈',
  },
];

function Features() {
  return (
    <section className="py-16 px-6 bg-gradient-to-b from-black via-indigo-900 to-purple-900 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Platform Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white text-gray-900 rounded-xl p-6 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-transform duration-300"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-700">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
