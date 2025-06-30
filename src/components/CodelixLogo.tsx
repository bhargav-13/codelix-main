import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useAnimation, useInView } from 'framer-motion';

const CodelixLogo = ({ className = '' }: { className?: string }) => {
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [controls, isInView]);

  return (
    <div ref={ref} className={`relative ${className}`}>
      <motion.div 
        className="relative z-10 flex items-center justify-center w-full"
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, scale: 0.9 },
          visible: { 
            opacity: 1, 
            scale: 1,
            transition: { 
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1]
            } 
          }
        }}
      >
        <motion.div 
          className="relative z-10 group"
          whileHover={{ 
            scale: 1.02,
            transition: { duration: 0.3 }
          }}
        >
          {/* Main Logo */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { 
              opacity: 1, 
              scale: 1,
              transition: { 
                duration: 0.8,
                ease: [0.22, 1, 0.36, 1]
              }
            } : {}}
          >
            <Image 
              src="/mini-logo.svg" 
              alt="Codelix" 
              width={400}
              height={160}
              className="h-40 w-auto mx-auto"
              priority
            />
          </motion.div>
          
          {/* Glow Effect */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-r from-[#2E497F] to-[#4771C4] opacity-0 group-hover:opacity-10 rounded-full mix-blend-overlay"
            initial={{ scale: 0.9 }}
            animate={isInView ? { 
              scale: 1.2, 
              opacity: 0.1,
              transition: { 
                duration: 3,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut'
              } 
            } : {}}
          />
          
          {/* Subtle Reflection */}
          <motion.div 
            className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-0 group-hover:opacity-30"
            initial={{ y: -20 }}
            animate={isInView ? {
              y: 0,
              opacity: 0.1,
              transition: {
                duration: 4,
                repeat: Infinity,
                repeatType: 'reverse',
                ease: 'easeInOut'
              }
            } : {}}
          />
        </motion.div>
      </motion.div>
      
      {/* Animated background elements */}
      <motion.div 
        className="absolute -top-32 -left-32 w-96 h-96 bg-[#2E497F]/10 rounded-full mix-blend-multiply filter blur-3xl"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isInView ? {
          scale: 1,
          opacity: 0.4,
          x: [0, 30, 0],
          y: [0, -30, 0],
          transition: {
            duration: 15,
            repeat: Infinity,
            ease: 'easeInOut'
          }
        } : {}}
      />
      
      <motion.div 
        className="absolute top-10 -right-20 w-[32rem] h-[32rem] bg-[#4771C4]/10 rounded-full mix-blend-multiply filter blur-3xl"
        initial={{ scale: 0.7, opacity: 0 }}
        animate={isInView ? {
          scale: 1,
          opacity: 0.3,
          x: [0, -40, 0],
          y: [0, 40, 0],
          transition: {
            duration: 18,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: 2
          }
        } : {}}
      />
    </div>
  );
};

export default CodelixLogo;
