import { differenceInDays, differenceInHours, differenceInMinutes, differenceInSeconds } from 'date-fns';
    
    export function getTimeLeft(targetDate) {
      const now = new Date();
    
      const diff = {
        days: differenceInDays(targetDate, now),
        hours: differenceInHours(targetDate, now) % 24,
        minutes: differenceInMinutes(targetDate, now) % 60,
        seconds: differenceInSeconds(targetDate, now) % 60
      };
    
      if (diff.seconds < 0 && diff.minutes <= 0 && diff.hours <= 0 && diff.days <= 0) {
        return {
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0
        }
      }
    
      return diff;
    }
