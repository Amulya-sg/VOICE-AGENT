import React from 'react';

export function Button({ children, onClick, className, size }) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 shadow-md hover:shadow-lg ${className}`}
      style={{ fontSize: size === 'lg' ? '1.125rem' : '1rem' }}
    >
      {children}
    </button>
  );
}

