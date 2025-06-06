import React from 'react';

export function Card({ children, className }) {
  return (
    <div className={`shadow-lg border-0 bg-white/80 backdrop-blur-sm rounded-lg p-6 ${className}`}>
      {children}
    </div>
  );
}

export function CardHeader({ children, className }) {
  return <div className={`text-center pb-6 ${className}`}>{children}</div>;
}

export function CardTitle({ children, className }) {
  return <h2 className={`text-xl text-slate-800 font-semibold ${className}`}>{children}</h2>;
}

export function CardDescription({ children, className }) {
  return <p className={`text-slate-600 ${className}`}>{children}</p>;
}

export function CardContent({ children, className }) {
  return <div className={`space-y-8 ${className}`}>{children}</div>;
}
