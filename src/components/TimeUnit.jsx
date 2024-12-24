import React from 'react';

export default function TimeUnit({ value, label }) {
  return (
    <div className="text-center p-4 bg-white/20 rounded-lg backdrop-blur-sm">
      <div className="text-3xl md:text-5xl font-bold">{value}</div>
      <div className="text-sm md:text-base mt-2">{label}</div>
    </div>
  );
}
