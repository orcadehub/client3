import React from 'react';
import { motion } from 'framer-motion';

const Team = () => {
  return (
    <section id="team" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Team</h2>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Our strength lies in our people. AccelMinds is powered by a passionate team of industry experts, academic trainers, software developers, and education consultants — all committed to enabling excellence in campus recruitment and skill development.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-gray-50/70 rounded-3xl p-12 border border-gray-200"
        >
          <p className="text-2xl text-gray-700 leading-relaxed mb-8">
            "We believe that the right mentorship, delivered with the right technology, can create massive impact. That's why our team blends academic rigor with practical industry experience to deliver consistent, quality results."
          </p>
          <div className="flex justify-center">
            <div className="bg-red-600 w-20 h-1.5 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Team;