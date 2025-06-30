"use client";

import React from "react";
import { motion } from "framer-motion";

const LanyardDemo = () => {
  return (
    <div className="relative h-full w-full">
      {/* Lanyard animation container */}
      <div className="relative h-64 w-64 mx-auto">
        {/* Lanyard string */}
        <motion.div 
          className="absolute left-1/2 top-0 h-32 w-1 bg-gradient-to-b from-blue-400 to-cyan-300 rounded-full"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        />
        
        {/* ID Card */}
        <motion.div 
          className="absolute left-1/2 top-32 w-48 h-32 bg-white rounded-lg shadow-lg p-4 -translate-x-1/2"
          initial={{ scale: 0.8, opacity: 0, rotate: -5 }}
          animate={{ scale: 1, opacity: 1, rotate: 0 }}
          transition={{ 
            type: "spring",
            damping: 10,
            stiffness: 100,
            delay: 0.4
          }}
          whileHover={{ 
            y: -5,
            rotate: 0,
            transition: { duration: 0.2 }
          }}
        >
          <div className="flex items-center space-x-3 mb-3">
            <div className="h-10 w-10 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 flex items-center justify-center text-white font-bold">
              CD
            </div>
            <div>
              <h3 className="font-bold text-gray-800">Codelix</h3>
              <p className="text-xs text-gray-500">Development Studio</p>
            </div>
          </div>
          <div className="space-y-1">
            <div className="h-2 bg-gray-200 rounded-full w-3/4"></div>
            <div className="h-2 bg-gray-200 rounded-full w-1/2"></div>
            <div className="h-2 bg-gray-200 rounded-full w-5/6 mt-2"></div>
          </div>
        </motion.div>
        
        {/* Decorative elements */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full bg-gradient-to-r from-blue-400 to-cyan-300"
            style={{
              width: Math.random() * 10 + 5,
              height: Math.random() * 10 + 5,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              opacity: 0.6,
            }}
            animate={{
              y: [0, -10, 0],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              repeatType: "reverse",
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
      
      {/* Contact information */}
      <div className="mt-16 text-center space-y-6">
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Contact Information</h3>
          <p className="text-gray-300">Say hello at hello@codelix.com</p>
        </div>
        <div>
          <h3 className="text-xl font-bold text-white mb-2">Based in</h3>
          <p className="text-gray-300">Silicon Valley, California</p>
        </div>
      </div>
    </div>
  );
};

export default LanyardDemo;
