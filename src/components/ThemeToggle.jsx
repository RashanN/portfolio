import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
import { FiMoon, FiSun } from 'react-icons/fi';
import { motion } from 'framer-motion';

const ThemeToggle = () => {
  const { darkTheme, setDarkTheme } = useContext(ThemeContext);

  return (
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      onClick={() => setDarkTheme(!darkTheme)}
      className="p-2 rounded-full focus:outline-none"
      aria-label={darkTheme ? "Switch to light mode" : "Switch to dark mode"}
    >
      {darkTheme ? (
        <FiSun className="text-yellow-300 w-5 h-5" />
      ) : (
        <FiMoon className="text-gray-700 w-5 h-5" />
      )}
    </motion.button>
  );
};

export default ThemeToggle;