import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
  return (
    <section id="team" className="py-20 px-4 bg-gradient-to-br from-white to-blue-50/30">
      <div className="max-w-7xl mx-auto text-center">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
          <div className="w-24 h-1.5 bg-[#1A34F0] mx-auto rounded-full mb-6 animate-pulse shadow-md shadow-blue-300"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our strength lies in our people. AccelMinds is powered by a passionate team of trainers, developers, and education consultants—united in the mission to deliver excellence in CRT.
          </p>
        </motion.div>

        {/* Quote Block */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="bg-white/70 rounded-3xl p-10 md:p-16 border border-gray-200 shadow-md"
        >
          <blockquote className="text-2xl md:text-3xl text-gray-700 italic font-medium leading-relaxed">
            “We believe that the right mentorship, powered by the right technology, can ignite extraordinary growth.”
          </blockquote>

          <div className="mt-8 flex justify-center">
            <div className="w-20 h-1.5 bg-[#1A34F0] rounded-full shadow-blue-400 shadow-sm" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;
