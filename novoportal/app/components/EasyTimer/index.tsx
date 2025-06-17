'use client';

import React, { useEffect, useState } from 'react';
import Timer from 'easytimer.js';
import './index.css'; 

const CountdownTimer = () => {
  const [time, setTime] = useState('00:00:15');
  const [targetAchieved, setTargetAchieved] = useState(false); 

  useEffect(() => {
    const timer = new Timer();
    timer.start({ countdown: true, startValues: { seconds: 15 } });

    timer.addEventListener('secondsUpdated', function () {
      setTime(timer.getTimeValues().toString());
    });

    timer.addEventListener('targetAchieved', function () {
      setTargetAchieved(true);

      setTimeout(() => {
        setTargetAchieved(false);
      }, 2000);

      timer.start({ countdown: true, startValues: { seconds: 17 } });

    });

    return () => {
      timer.stop();
    };
  }, []);

  return (
    <div>
      <div>
        {targetAchieved ? (
          <p className='kaboom animate-shake p-2 bg-red-200 w-44 text-center text-red-800 font-sansBold border-2 border-red-800 rounded-lg border-dashed'>
            💥 KABOOOM!!! 💥
          </p>
        ) : (
          <p>{time}</p>
        )}
      </div>
    </div>
  );
};

export default CountdownTimer;
