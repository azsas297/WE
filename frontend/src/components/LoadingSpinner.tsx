import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative">
        <div className="w-8 h-8 rounded-full border-4 border-blue-200"></div>
        <div className="w-8 h-8 rounded-full border-4 border-blue-600 border-t-transparent animate-spin absolute top-0 left-0"></div>
      </div>
      <span className="ml-3 text-blue-600 font-medium">Envoi en cours...</span>
    </div>
  );
} 