import React from 'react';

function Tree({ left, bottom, size }) {
  return (
    <div className="absolute" style={{ left: `${left}%`, bottom: `${bottom}px` }}>
      <div 
        className="relative"
        style={{ 
          borderLeft: `${size}px solid transparent`,
          borderRight: `${size}px solid transparent`,
          borderBottom: `${size * 2}px solid #2d6a4f`
        }}
      >
        <div 
          className="absolute"
          style={{
            top: `${size * 0.7}px`,
            left: `-${size}px`,
            borderLeft: `${size}px solid transparent`,
            borderRight: `${size}px solid transparent`,
            borderBottom: `${size * 2}px solid #1b4332`
          }}
        ></div>
      </div>
      <div 
        className="mx-auto"
        style={{
          width: `${size * 0.4}px`,
          height: `${size * 0.6}px`,
          backgroundColor: '#774936'
        }}
      ></div>
    </div>
  );
}

export default function Trees() {
  const trees = [
    { left: 10, bottom: 100, size: 20 },
    { left: 15, bottom: 120, size: 25 },
    { left: 20, bottom: 90, size: 30 },
    { left: 80, bottom: 110, size: 25 },
    { left: 85, bottom: 95, size: 20 },
    { left: 90, bottom: 130, size: 30 }
  ];

  return (
    <div className="absolute bottom-0 w-full pointer-events-none">
      {trees.map((tree, index) => (
        <Tree key={index} {...tree} />
      ))}
    </div>
  );
}
