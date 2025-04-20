import React from 'react';
import { motion } from 'framer-motion';
import { HeartCrack } from 'lucide-react';
import { useNavigate } from 'react-router';

export default function Error({msg = "Aww, Sorry We are Out of Fuel.. :("}) {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen font-livvic flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 p-4">
      <motion.div
        className="text-center max-w-sm w-full bg-white rounded-2xl shadow-lg p-6 sm:p-10"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <HeartCrack  className="mx-auto mb-4 w-16 h-16 text-red-500" />
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-2">Oops </h1>
        <p className="text-gray-600 mb-6 text-sm sm:text-base">
          {msg}
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => navigate('/')}
          className="mt-2 inline-block px-6 py-3 cursor-pointer bg-red-500 text-white font-semibold rounded-full shadow-md focus:outline-none transition"
        >
          Go Back Home
        </motion.button>
      </motion.div>
    </div>
  );
}
