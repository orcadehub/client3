import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Zap, BarChart3, TrendingUp } from 'lucide-react';

const problems = [
  {
    icon: Users,
    title: "Shortage of Skilled Trainers",
    description: "We provide screened, experienced professionals for technical, aptitude, and verbal training."
  },
  {
    icon: Target,
    title: "Inconsistent Training Quality",
    description: "Standardized content and vetted experts ensure uniform delivery and engagement across batches."
  },
  {
    icon: Zap,
    title: "Manual Assessment & Feedback",
    description: "Custom tools for automatic evaluations and performance analytics, reducing errors and increasing efficiency."
  },
  {
    icon: TrendingUp,
    title: "Limited Scalability",
    description: "Our tech helps scale services across campuses without compromising quality or control."
  },
  {
    icon: BarChart3,
    title: "Lack of Performance Insights",
    description: "Real-time dashboards provide visibility into student and trainer performance for informed decisions."
  }
];

const Problems = () => {
  return (
    <section id="services" className="py-20 px-4 bg-gray-50/70">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Problems We Address</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Transforming challenges into opportunities with precision-driven solutions.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg hover:border-red-300/80 transition-all duration-300 group"
            >
              <div className="bg-red-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <problem.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">{problem.title}</h3>
              <p className="text-gray-600 leading-relaxed">{problem.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;