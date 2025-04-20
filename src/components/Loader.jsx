import React from 'react';
import { motion } from 'framer-motion';

export default function Loader() {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-br from-amber-500 to-pink-500">
      <motion.div
        className="flex flex-col items-center space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6}}
      >
        <motion.div
          className="w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-t-blue-600 border-r-transparent border-b-transparent border-l-transparent"
          initial={{ rotate: 0 }}
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'linear' }}
        />

        <motion.h1
          className="text-xl sm:text-2xl font-semibold text-gray-700"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
           Hold on, We are cooking your trip!
        </motion.h1>
      </motion.div>
    </div>
  );
}
