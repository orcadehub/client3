import React from 'react';
import { motion } from 'framer-motion';
import { Target, Zap, CheckCircle } from 'lucide-react';

const VisionMission = () => {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#F7FAFF] via-[#EDF1FF] to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Vision Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition duration-300"
          >
            <div className="bg-[#1A34F0] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform transition-transform hover:scale-105">
              <Target className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-[#1A34F0] mb-6">Our Vision</h3>
            <p className="text-gray-700 text-lg leading-relaxed">
              To become the most trusted partner for CRT and EdTech companies by delivering innovative training and tech solutions that shape future-ready talent.
            </p>
          </motion.div>

          {/* Mission Box */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition duration-300"
          >
            <div className="bg-[#1A34F0] w-16 h-16 rounded-2xl flex items-center justify-center mb-6 transform transition-transform hover:scale-105">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-[#1A34F0] mb-6">Our Mission</h3>
            <ul className="text-gray-700 text-lg space-y-4">
              {[
                "Deliver high-impact training through expert educators",
                "Develop scalable tech tools to optimize CRT workflows",
                "Continuously innovate for evolving educational needs",
                "Empower students with practical, real-world skills"
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3">
                  <CheckCircle className="w-6 h-6 text-[#1A34F0] mt-0.5 flex-shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
