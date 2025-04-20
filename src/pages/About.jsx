import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Heart, Users, Smile } from 'lucide-react';

// Feature definitions for various travel modes
const features = [
  {
    icon: <Heart size={32} className="text-red-500" />, 
    title: 'Date Night',
    description: 'Handpicked spots perfect for a romantic evening.'
  },
  {
    icon: <Users size={32} className="text-blue-500" />, 
    title: 'Family Fun',
    description: 'Kid-friendly and family-approved attractions.'
  },
  {
    icon: <Smile size={32} className="text-yellow-500" />, 
    title: 'Friends Hangout',
    description: 'Vibrant places to hang out with pals.'
  },
  {
    icon: <MapPin size={32} className="text-green-500" />, 
    title: 'Solo Adventure',
    description: 'Explore the city at your own pace.'
  }
];

export default function About() {
  return (
    <section className="py-12 sm:py-16 bg-gradient-to-br font-livvic from-blue-50 to-blue-100">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4 text-center"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-gray-800">
          About Travesthetics
        </h2>
        <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Travesthetics is your open-source travel recommender, crafted by Targetx25 and fueled by free APIs to suggest the best spots whether you’re on a date, with family, hanging out with friends, or exploring solo. Info accuracy may vary due to API sources.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {features.map((feature, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 flex flex-col items-center"
            >
              <div className="mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600 text-center text-sm sm:text-base">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>

        <a
          href="https://github.com/Targetx25/Travesthetics-2.0"
          target="_blank"
          rel="noopener noreferrer"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            className="mt-8 w-full sm:w-auto px-6 sm:px-8 py-3 bg-indigo-600 text-white text-base sm:text-lg font-semibold rounded-2xl shadow-md transition"
          >
            Contribute on GitHub
          </motion.button>
        </a>
      </motion.div>
    </section>
  );
}
