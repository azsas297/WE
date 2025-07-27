import React, { useEffect, useState } from 'react';

interface NotificationProps {
  message: string;
  type: 'success' | 'error';
  onClose: () => void;
}

export default function Notification({ message, type, onClose }: NotificationProps) {
  const [isClosing, setIsClosing] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Animation d'entrée
    setIsVisible(true);

    const timer = setTimeout(() => {
      handleClose();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsClosing(true);
    setTimeout(() => {
      onClose();
    }, 500);
  };

  return (
    <div 
      className={`fixed top-4 right-4 z-50 transform transition-all duration-500 ${
        isClosing 
          ? 'translate-x-full opacity-0 scale-95' 
          : isVisible 
            ? 'translate-x-0 opacity-100 scale-100' 
            : 'translate-x-full opacity-0 scale-95'
      }`}
    >
      <div
        className={`rounded-lg shadow-xl p-4 flex items-center gap-3 transform transition-all duration-300 ${
          type === 'success'
            ? 'bg-gradient-to-r from-green-500 to-emerald-600'
            : 'bg-gradient-to-r from-red-500 to-rose-600'
        } text-white hover:scale-105 hover:shadow-2xl`}
      >
        <div className={`flex-shrink-0 ${isVisible ? 'animate-bounce' : ''}`}>
          {type === 'success' ? (
            <svg 
              className="w-6 h-6 transform transition-transform duration-300 hover:rotate-12" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg 
              className="w-6 h-6 transform transition-transform duration-300 hover:rotate-12" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          )}
        </div>
        <p className="font-medium">{message}</p>
        <button
          onClick={handleClose}
          className="ml-4 p-1 hover:bg-white/20 rounded-full transition-all duration-300 hover:rotate-90 hover:scale-110"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
    </div>
  );
} 