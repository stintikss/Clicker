import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';


const Loader: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false); //true

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); 

    return () => {
        clearTimeout(timer)
    };
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    },
    exit: {
      opacity: 0,
      transition: {
        duration: 0.5,
        ease: "easeInOut"
      }
    }
  };

  const dotVariants = {
    hidden: { y: 0 },
    visible: {
      y: [0, -15, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-blue-900 to-indigo-900 z-100"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <motion.div
            className="mb-8"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ 
              scale: 1, 
              opacity: 1,
              rotate: 360,
              transition: {
                duration: 0.8,
                ease: "backOut"
              }
            }}
          >
            <div className="w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center">
              <motion.div
                className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
                animate={{
                  rotate: 360,
                  transition: {
                    duration: 3,
                    repeat: Infinity,
                    ease: "linear"
                  }
                }}
              />
            </div>
          </motion.div>

          <div className="flex space-x-3">
            {[0, 1, 2].map((i) => (
              <motion.div
                key={i}
                className="w-4 h-4 rounded-full bg-white"
                variants={dotVariants}
                custom={i}
              />
            ))}
          </div>

          <motion.p 
            className="mt-8 text-white/80 text-lg font-medium"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: 1,
              transition: { delay: 0.5 }
            }}
          >
            Загрузка...
          </motion.p>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Loader;