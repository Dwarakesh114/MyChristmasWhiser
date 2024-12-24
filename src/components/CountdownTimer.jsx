import React, { useEffect } from 'react';
    import TimeUnit from './TimeUnit';
    import useCountdown from '../hooks/useCountdown';
    
    export default function CountdownTimer({ targetDate, onComplete }) {
      const { timeLeft, isComplete } = useCountdown(targetDate);
    
      useEffect(() => {
        if (isComplete && onComplete) {
          onComplete();
        }
      }, [isComplete, onComplete]);
    
      return (
        <div className="relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-white">
            <TimeUnit value={timeLeft.days} label="Days" />
            <TimeUnit value={timeLeft.hours} label="Hours" />
            <TimeUnit value={timeLeft.minutes} label="Minutes" />
            <TimeUnit value={timeLeft.seconds} label="Seconds" />
          </div>
        </div>
      );
    }
