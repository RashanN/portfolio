import { motion } from 'framer-motion';

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 opacity-90 dark:opacity-70"></div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('/assets/grid.svg')] opacity-10 dark:opacity-20"></div>
      
      {/* Animated particles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="absolute inset-0"
      >
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            initial={{
              y: 0,
              x: Math.random() * 100 - 50
            }}
            animate={{
              y: [0, window.innerHeight],
              x: [Math.random() * 100 - 50, Math.random() * 100 - 50]
            }}
            transition={{
              duration: Math.random() * 15 + 10,
              repeat: Infinity,
              ease: "linear"
            }}
            className="absolute w-1 h-1 rounded-full bg-blue-400 opacity-30"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedBackground;