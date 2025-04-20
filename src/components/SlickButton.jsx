import { motion } from 'framer-motion';

function SlickButton({
  onClick,
  children,
  gradient = 'from-green-500 via-green-600 to-blue-500',
  direction = 'to-r',
}) {
  // Combine gradient direction and colors into one Tailwind class string
  const gradientClasses = `bg-gradient-${direction} ${gradient}`;

  return (
    <motion.button
      onClick={onClick}
      initial={{ scale: 1 }}
      whileHover={{ scale: 1.05, boxShadow: '0px 10px 20px rgba(0,0,0,0.2)' }}
      whileTap={{ scale: 0.95 }}
      className={`
        ${gradientClasses}
        text-white font-semibold
        md:text-xl
        py-2 px-7 sm:py-3 sm:px-6
        sm:text-base
        rounded-full
        shadow-md
        focus:outline-none
        transition-all
        cursor-pointer
      `}
    >
      {children}
    </motion.button>
  );
}

export default SlickButton;

