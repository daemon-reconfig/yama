"use client";

import localFont from 'next/font/local';
import { useEffect, useState } from 'react';
import './styles/glitch.css';

const myFont = localFont({
  src: '/fonts/Hacked-KerX.ttf',
});

const CountdownTimer: React.FC = () => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isClosed, setIsClosed] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(true);
  const [glitch, setGlitch] = useState(false);

  const calculateTimeLeft = () => {
    const eventDate = new Date('2024-09-21T11:00:00');
    const currentTime = new Date();
    const difference = eventDate.getTime() - currentTime.getTime();

    let timeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
      if (timeLeft.seconds % 2 === 0) {
        setGlitch(true);
      } else {
        setGlitch(false);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft]);

  const handleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const handleClose = () => {
    setIsClosed(true);
  };

  const handleToggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };

  if (isClosed) {
    return null;
  }

  const countdownDisplay = `
    ${String(timeLeft.days).padStart(2, '0')}D : ${String(timeLeft.hours).padStart(2, '0')}H : 
    ${String(timeLeft.minutes).padStart(2, '0')}M : ${String(timeLeft.seconds).padStart(2, '0')}S
  `;

  return (
    <div
      className={`bg-transparent text-terminal-green font-mono ${isFullScreen ? 'h-screen w-screen' : 'h-auto w-auto'} relative overflow-hidden`}
    >
      
      <div className="top-0 absolute left-0 p-4 flex flex-col z-10">
        <div className="flex space-x-2 mb-2">
          <div className="w-3 h-3 bg-red-600 rounded-full cursor-pointer" onClick={handleClose}></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full cursor-pointer" onClick={handleMinimize}></div>
          <div className="w-3 h-3 bg-green-600 rounded-full cursor-pointer" onClick={handleToggleFullScreen}></div>
        </div>
        {!isMinimized && (
          <div className="text-white text-xl">
            yama@deceptions:~$ <span className="text-terminal-green">./countdown.sh</span>
          </div>
        )}
      </div>

      {!isMinimized && (
        <div className="flex flex-col items-center justify-center min-h-full z-10">
          <div className="text-[6rem] leading-none">
            <div className={`${myFont.className} glitch ${glitch ? 'glitch-active' : ''}`} data-text={countdownDisplay}>
              {countdownDisplay}
            </div>
          </div>
          <div className={`${myFont.className} text-7xl text-black`}><a href="https://ctf.yama.ninja/" target="_blank" rel="noopener noreferrer">DECPTIONS</a></div>
        </div>
      )}
      
    </div>
  );
};

export default CountdownTimer;
