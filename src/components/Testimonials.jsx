// components/Testimonials.jsx
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: 'Aisha Khan',
    feedback: 'This platform helped me crack my first interview! The AI feedback is spot on.',
    title: 'Software Developer Intern',
  },
  {
    name: 'Rohit Verma',
    feedback: 'The English speaking module was a game changer. Loved the voice feedback!',
    title: 'Graduate Job Seeker',
  },
  {
    name: 'Sneha Patil',
    feedback: 'Mock interviews felt so real. I built confidence and learned a lot!',
    title: 'Final Year Student',
  },
];

function Testimonials() {
  return (
    <section className="py-20 px-6 bg-white text-gray-900">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6" data-aos="fade-up">What Users Say</h2>
        <p className="mb-12 text-gray-600 max-w-xl mx-auto" data-aos="fade-up" data-aos-delay="100">
          Hear it from those who’ve transformed their careers with AI Interview Coach.
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              className="bg-indigo-50 p-6 rounded-2xl shadow-md hover:shadow-xl transition-all"
              data-aos="fade-up"
              data-aos-delay={i * 200}
              whileHover={{ scale: 1.05 }}
            >
              <p className="text-gray-700 mb-4">“{t.feedback}”</p>
              <h4 className="font-bold text-indigo-700">{t.name}</h4>
              <span className="text-sm text-gray-500">{t.title}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
