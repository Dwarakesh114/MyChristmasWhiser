import React, { useEffect } from 'react';
    import { SNOW_CONFIG } from '../config/snowConfig';
    
    export default function SnowEffect() {
      useEffect(() => {
        const createSnowflake = () => {
          const snowflake = document.createElement('div');
          snowflake.classList.add('snowflake');
          snowflake.style.left = Math.random() * 100 + 'vw';
          
          const duration = 
            Math.random() * 
            (SNOW_CONFIG.maxDuration - SNOW_CONFIG.minDuration) + 
            SNOW_CONFIG.minDuration;
          
          snowflake.style.animationDuration = `${duration}s`;
          snowflake.style.opacity = Math.random();
          
          const size = 
            Math.random() * 
            (SNOW_CONFIG.maxSize - SNOW_CONFIG.minSize) + 
            SNOW_CONFIG.minSize;
          
          snowflake.style.fontSize = `${size}px`;
          snowflake.innerHTML = SNOW_CONFIG.symbols[
            Math.floor(Math.random() * SNOW_CONFIG.symbols.length)
          ];
          
          return snowflake;
        };
    
        const snow = () => {
          const snowflake = createSnowflake();
          document.body.appendChild(snowflake);
    
          setTimeout(() => {
            document.body.removeChild(snowflake);
          }, SNOW_CONFIG.maxDuration * 1000);
        };
    
        // Create initial batch of snowflakes
        for (let i = 0; i < SNOW_CONFIG.snowflakeCount; i++) {
          setTimeout(snow, Math.random() * 5000);
        }
    
        const snowInterval = setInterval(snow, SNOW_CONFIG.interval);
        return () => clearInterval(snowInterval);
      }, []);
    
      return null;
    }
