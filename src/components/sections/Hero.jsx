import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Hero = () => {
  const { toast } = useToast();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const showNotImplementedToast = () => {
    toast({
      title: "Feature Not Implemented",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      variant: "destructive",
    });
  };

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.9, ease: 'easeOut' }}
      className="pt-40 pb-28 px-4 bg-gradient-to-br from-[#1A34F0] via-[#1A34F0]/90 to-[#000000] text-white"
    >
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-4xl md:text-7xl font-extrabold leading-tight tracking-tight text-white drop-shadow-md">
            Accelerate Minds.<br />
            <span className="text-[#FFD700]">Shape Futures.</span>
          </h1>

          <p className="text-lg md:text-2xl max-w-3xl mx-auto text-gray-100/90 leading-relaxed">
            Empowering Campus Recruitment Training companies with top-tier trainers and innovative tech solutions.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button
              size="lg"
              className="bg-[#FFD700] hover:bg-yellow-400 text-[#1A34F0] font-semibold rounded-full px-6 py-3 transition-all duration-300 flex items-center gap-2 shadow-lg"
              onClick={showNotImplementedToast}
            >
              Get Started <ArrowRight className="w-5 h-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-dark text-dark hover:bg-dark/10 font-semibold rounded-full px-6 py-3 transition-all duration-300"
              onClick={showNotImplementedToast}
            >
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
