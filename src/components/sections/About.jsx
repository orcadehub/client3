import React from 'react';
import { motion } from 'framer-motion';
import { Code, BookOpen, BarChart3, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">About AccelMinds</h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
              <p>
                At AccelMinds Solutions Pvt. Ltd., we empower Campus Recruitment Training (CRT) companies by providing top-tier technical, aptitude, and verbal trainers. Our mission is to bridge the skill gap with precision-driven training solutions and industry-ready content.
              </p>
              <p>
                Backed by a team of experienced professionals and educators, we also build custom applications tailored to streamline CRT processes — from assessment systems to performance analytics and interactive learning tools.
              </p>
              <p>
                We believe in <span className="text-red-600 font-semibold">quality over quantity</span>, <span className="text-red-500 font-semibold">innovation over repetition</span>, and <span className="text-red-600 font-semibold">lasting impact over temporary fixes</span>.
              </p>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            <div className="bg-gray-50/70 rounded-2xl p-6 border border-gray-200 shadow-sm">
              <Code className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-gray-900 font-bold text-lg mb-2">Custom Tech Solutions</h3>
              <p className="text-gray-600 text-sm">Tailored applications for CRT processes</p>
            </div>
            <div className="bg-gray-50/70 rounded-2xl p-6 border border-gray-200 shadow-sm">
              <BookOpen className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-gray-900 font-bold text-lg mb-2">Expert Training</h3>
              <p className="text-gray-600 text-sm">Industry-ready content delivery</p>
            </div>
            <div className="bg-gray-50/70 rounded-2xl p-6 border border-gray-200 shadow-sm">
              <BarChart3 className="w-12 h-12 text-red-600 mb-4" />
              <h3 className="text-gray-900 font-bold text-lg mb-2">Performance Analytics</h3>
              <p className="text-gray-600 text-sm">Real-time insights and tracking</p>
            </div>
            <div className="bg-gray-50/70 rounded-2xl p-6 border border-gray-200 shadow-sm">
              <TrendingUp className="w-12 h-12 text-red-500 mb-4" />
              <h3 className="text-gray-900 font-bold text-lg mb-2">Scalable Solutions</h3>
              <p className="text-gray-600 text-sm">Growth without compromise</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;