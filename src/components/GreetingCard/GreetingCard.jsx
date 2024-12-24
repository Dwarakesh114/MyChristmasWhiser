import React from 'react';
    import { motion } from 'framer-motion';
    
    export default function GreetingCard({ user, onClose }) {
      const userName = user?.displayName || 'User';
      const lowerCaseName = userName.toLowerCase();
      const isSpecialUser = lowerCaseName.includes('amrutha') || lowerCaseName.includes('smiley') || lowerCaseName.includes('songa');
      
      const specialGreeting = isSpecialUser ? (
        <h2 className="text-3xl font-bold text-red-600 mb-4">
          Merry Christmas, {userName}! You're extra special! ✨
        </h2>
      ) : (
        <h2 className="text-3xl font-bold text-red-600 mb-4">
          Merry Christmas, {userName}! 🎄
        </h2>
      );
    
      return (
        <motion.div 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className="fixed inset-0 flex items-center justify-center z-50 bg-black/50 backdrop-blur-sm"
        >
          <motion.div 
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="bg-white rounded-lg p-8 max-w-lg w-11/12 shadow-2xl relative"
          >
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-800 focus:outline-none"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <div className="text-center">
              {specialGreeting}
              <p className="text-lg text-gray-700 mb-6">
                Wishing you a magical and joyful Christmas filled with love, 
                laughter, and unforgettable moments with your loved ones.
              </p>
              <div className="flex justify-center space-x-4">
                <span className="text-4xl">🎅</span>
                <span className="text-4xl">🎁</span>
                <span className="text-4xl">⛄</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      );
    }
