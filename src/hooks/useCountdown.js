import { useState, useEffect } from 'react';
    import { getTimeLeft } from '../utils/dateUtils';
    
    export default function useCountdown(targetDate) {
      const [timeLeft, setTimeLeft] = useState(getTimeLeft(targetDate));
      const [isComplete, setIsComplete] = useState(false);
    
      useEffect(() => {
        const timer = setInterval(() => {
          const newTimeLeft = getTimeLeft(targetDate);
          setTimeLeft(newTimeLeft);
    
          if (Object.values(newTimeLeft).every(value => value <= 0)) {
            setIsComplete(true);
            clearInterval(timer);
          }
        }, 1000);
    
        return () => clearInterval(timer);
      }, [targetDate]);
    
      return { timeLeft, isComplete };
    }
