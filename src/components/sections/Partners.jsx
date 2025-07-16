import React from 'react';
import { motion } from 'framer-motion';

function Partners() {
  const logos = [
    'https://upload.wikimedia.org/wikipedia/commons/b/bc/BBC_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/6/65/Fast_Company_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/5/5c/CNBC_logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/0/0d/Business_Insider_Logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/2/22/The_Wall_Street_Journal_Logo.svg',
    'https://upload.wikimedia.org/wikipedia/commons/1/19/Forbes_logo.svg',
  ];

  return (
    <section className="bg-[#0A1A4C] py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-white text-3xl font-bold mb-10">Trusted By</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-8 items-center justify-center">
          {logos.map((logo, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-center justify-center"
            >
              <img
                src={logo}
                alt={`partner-${index}`}
                className="max-h-12 w-auto object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Partners;
