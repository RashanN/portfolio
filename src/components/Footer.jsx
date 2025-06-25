import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="text-gray-600 dark:text-gray-400 mb-4 md:mb-0"
          >
            © {currentYear} Rashan. All rights reserved.
          </motion.p>
          
          <div className="flex space-x-6">
            {[
              { icon: FaGithub, url: "https://github.com/yourusername" },
              { icon: FaLinkedin, url: "https://linkedin.com/in/yourprofile" },
              { icon: FaTwitter, url: "https://twitter.com/yourhandle" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.9 }}
                className="text-gray-700 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400 transition-colors"
                aria-label={social.icon === FaGithub ? "GitHub" : social.icon === FaLinkedin ? "LinkedIn" : "Twitter"}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;