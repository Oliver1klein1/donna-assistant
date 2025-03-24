import React from 'react';
import { motion } from 'framer-motion';

const DonnaResponse = ({ text, type }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={`mb-4 ${type === 'user' ? 'text-right' : 'text-left'}`}
    >
      <div
        className={`inline-block rounded-lg px-4 py-2 max-w-[80%] ${
          type === 'user'
            ? 'bg-donna-purple text-white'
            : 'bg-donna-gold/20 text-donna-gold'
        }`}
      >
        <p className="font-body">{text}</p>
      </div>
    </motion.div>
  );
};

export default DonnaResponse; 