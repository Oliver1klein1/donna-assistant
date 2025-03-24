import React from 'react';
import { motion } from 'framer-motion';

const Background = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1A1A2E] via-[#16213E] to-[#1A1A2E]">
        <motion.div
          className="absolute inset-0 opacity-30"
          animate={{
            background: [
              'radial-gradient(circle at 0% 0%, #C9A959 0%, transparent 50%)',
              'radial-gradient(circle at 100% 100%, #C9A959 0%, transparent 50%)',
              'radial-gradient(circle at 0% 0%, #C9A959 0%, transparent 50%)',
            ],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Animated grid pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23C9A959' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
      }}>
        <motion.div
          className="absolute inset-0"
          animate={{
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            repeatType: "reverse",
          }}
        />
      </div>

      {/* Floating glass orbs */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
        animate={{
          y: [0, 20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute top-1/3 right-1/4 w-48 h-48 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
        animate={{
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-1/3 w-32 h-32 rounded-full bg-white/5 backdrop-blur-sm border border-white/10"
        animate={{
          y: [0, 15, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          repeatType: "reverse",
        }}
      />

      {/* Animated lines */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(90deg, transparent 0%, rgba(201, 169, 89, 0.1) 50%, transparent 100%)`,
          backgroundSize: '200% 100%',
        }}
        animate={{
          backgroundPosition: ['200% 0', '-200% 0'],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          repeatType: "loop",
        }}
      />
    </div>
  );
};

export default Background; 