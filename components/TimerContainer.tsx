import React, { useEffect } from 'react';
import { NumberBox } from './NumberBox';

interface ItimeProps {
  days: number | string;
  hours: number | string;
  minutes: number | string;
  seconds: number | string;
}

export const TimerContainer = ({
  days,
  hours,
  minutes,
  seconds,
}: ItimeProps) => {
  useEffect(() => {
    timerCountdown();
  }, []);

  const timerCountdown = () => {
    if (seconds === 0) {
      if (minutes != 0) {
        seconds = 59;
      }
    }

    if (minutes === 0) {
      if (hours != 0) {
        minutes = 59;
      }
    }

    if (days < 10) {
      days = '0' + days;
      console.log('days', days);
    }
    if (hours < 10) return (hours = '0' + hours);
    if (minutes < 10) return (minutes = '0' + minutes);
    if (seconds < 10) return (seconds = '0' + seconds);
  };

  return (
    <div className="mt-10 rounded-xl">
      <div className="grid grid-cols-2 gap-4 rounded-xl py-6 px-10 md:mt-2 md:flex md:items-center md:justify-between md:px-6 md:py-8">
        <NumberBox num={'07'} unit="Days" />
        <NumberBox num={hours} unit="Hours" />
        <NumberBox num={minutes} unit="Minutes" />
        <NumberBox num={seconds} unit="Seconds" />
      </div>
    </div>
  );
};
