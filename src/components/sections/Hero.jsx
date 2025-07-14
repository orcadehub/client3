import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Hero = () => {
  const { toast } = useToast();

  const showNotImplementedToast = () => {
    toast({
      title: "Feature Not Implemented",
      description: "🚧 This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      variant: "destructive",
    });
  };

  return (
    <section className="pt-40 pb-28 px-4 bg-white">
      <div className="max-w-7xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-gray-900 leading-tight">
            Accelerate Minds.<br /> <span className="text-red-600">Shape Futures.</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Empowering Campus Recruitment Training companies with top-tier trainers and innovative tech solutions.
          </p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white rounded-full font-semibold transition-all duration-300 flex items-center gap-2" onClick={showNotImplementedToast}>
              Get Started <ArrowRight className="w-5 h-5" />
            </Button>
            <Button size="lg" variant="outline" className="border-gray-300 text-gray-800 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300" onClick={showNotImplementedToast}>
              Learn More
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;