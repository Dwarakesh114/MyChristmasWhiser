import React, { useState, useEffect } from 'react';
    import { FIREWORK_COLORS, FIREWORK_CONFIG } from '../config/fireworksConfig';
    
    function Firework() {
      const [position, setPosition] = useState({ x: 0, y: 0 });
      const [isExploding, setIsExploding] = useState(false);
      const [color, setColor] = useState('#ffffff');
    
      const randomColor = () => {
        return FIREWORK_COLORS[Math.floor(Math.random() * FIREWORK_COLORS.length)];
      };
    
      const reset = () => {
        const x = Math.random() * 100;
        const y = Math.random() * 100;
        setPosition({ x, y });
        setIsExploding(false);
        setColor(randomColor());
        
        const delay = Math.random() * 
          (FIREWORK_CONFIG.maxDelay - FIREWORK_CONFIG.minDelay) + 
          FIREWORK_CONFIG.minDelay;
    
        setTimeout(() => {
          setIsExploding(true);
          setTimeout(reset, FIREWORK_CONFIG.explosionDuration);
        }, delay);
      };
    
      useEffect(() => {
        reset();
      }, []);
    
      return (
        <div
          className={`firework ${isExploding ? 'exploding' : ''}`}
          style={{
            left: `${position.x}%`,
            top: `${position.y}%`,
            '--firework-color': color,
            transition: isExploding ? 'none' : 'all 0.5s ease-out'
          }}
        />
      );
    }
    
    export default Firework;
