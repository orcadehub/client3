import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="fixed top-0 w-full bg-white/90 backdrop-blur-lg border-b border-gray-200/80 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-2xl font-bold text-red-600"
          >
            AccelMinds Solutions
          </motion.div>

          {/* Desktop nav */}
          <nav className="hidden md:flex space-x-8">
            {['About', 'Services', 'Team', 'Testimonials', 'Contact'].map((text) => (
              <a
                key={text}
                href={`#${text.toLowerCase()}`}
                className="text-gray-600 hover:text-red-600 font-medium transition-colors"
              >
                {text}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={toggleMenu} className="text-gray-700 hover:text-red-600">
              {isOpen ? <XMarkIcon className="h-6 w-6" /> : <Bars3Icon className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-4 py-3 flex flex-col space-y-3">
              {['About', 'Services', 'Team', 'Testimonials', 'Contact'].map((text) => (
                <a
                  key={text}
                  href={`#${text.toLowerCase()}`}
                  className="text-gray-700 hover:text-red-600 font-medium transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {text}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
