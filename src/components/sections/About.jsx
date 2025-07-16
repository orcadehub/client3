import React from 'react';
import { motion } from 'framer-motion';
import { Code, BookOpen, BarChart3, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 px-4 bg-gradient-to-br from-white via-[#F5F8FF] to-[#E4EDFF]">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Side Text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-[#1A34F0]">
              About AccelMinds
            </h2>
            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
              <p>
                At AccelMinds Solutions Pvt. Ltd., we empower Campus Recruitment Training (CRT) companies by providing top-tier technical, aptitude, and verbal trainers. Our mission is to bridge the skill gap with precision-driven training solutions and industry-ready content.
              </p>
              <p>
                Backed by a team of experienced professionals and educators, we also build custom applications tailored to streamline CRT processes — from assessment systems to performance analytics and interactive learning tools.
              </p>
              <p>
                We believe in <span className="text-[#1A34F0] font-semibold">quality over quantity</span>, <span className="text-[#1A34F0] font-semibold">innovation over repetition</span>, and <span className="text-[#1A34F0] font-semibold">lasting impact over temporary fixes</span>.
              </p>
            </div>
          </motion.div>

          {/* Right Side Features */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-2 gap-6"
          >
            {[
              {
                icon: Code,
                title: "Custom Tech Solutions",
                desc: "Tailored applications for CRT processes"
              },
              {
                icon: BookOpen,
                title: "Expert Training",
                desc: "Industry-ready content delivery"
              },
              {
                icon: BarChart3,
                title: "Performance Analytics",
                desc: "Real-time insights and tracking"
              },
              {
                icon: TrendingUp,
                title: "Scalable Solutions",
                desc: "Growth without compromise"
              }
            ].map((feature, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 * idx }}
                className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                <feature.icon className="w-12 h-12 text-[#1A34F0] mb-4" />
                <h3 className="text-gray-900 font-bold text-lg mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.desc}</p>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default About;
