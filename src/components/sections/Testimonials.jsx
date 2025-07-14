import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const testimonials = [
  {
    quote: "AccelMinds helped us scale our CRT programs across multiple campuses seamlessly. Their trainers are professional, punctual, and extremely effective.",
    author: "Placement Head",
    company: "Vignan University"
  },
  {
    quote: "The training feedback from students improved significantly after we partnered with AccelMinds. They also customized a test portal for us that saved hours every week.",
    author: "CRT Coordinator",
    company: "ANITS, Vizag"
  },
  {
    quote: "We finally found a training partner that delivers what they promise - quality trainers and tech that just works.",
    author: "Director",
    company: "EdTech Firm (Hyderabad)"
  }
];

const Testimonials = () => {
  return (
    <section id="testimonials" className="py-20 px-4 bg-gray-50/70">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Client Testimonials</h2>
          <p className="text-xl text-gray-600">What our partners say about us.</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 border border-gray-200 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              <div className="flex mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 text-lg leading-relaxed mb-6 italic">
                "{testimonial.quote}"
              </p>
              <div className="border-t border-gray-200 pt-6">
                <p className="text-gray-900 font-semibold">{testimonial.author}</p>
                <p className="text-red-600 font-medium">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;