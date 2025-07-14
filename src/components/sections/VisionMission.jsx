import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, CheckCircle } from 'lucide-react';

const VisionMission = () => {
  return (
    <section className="py-20 px-4 bg-gray-50/70">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm"
          >
            <div className="bg-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Vision</h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              To become the most trusted partner for CRT and EdTech companies by delivering innovative training and tech solutions that shape future-ready talent.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm"
          >
            <div className="bg-red-500 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h3>
            <ul className="text-gray-600 text-lg space-y-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                Deliver high-impact training through expert educators
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                Develop scalable tech tools to optimize CRT workflows
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                Continuously innovate for evolving educational needs
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 flex-shrink-0" />
                Empower students with practical, real-world skills
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;