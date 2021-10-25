import { useState, useEffect } from 'react';

export const useElapsedTime = (session) => {
  const [displayedTime, setDisplayedTime] = useState();
  const { elapsedTime, lastStarted, inSession } = session;

  const timeFromLastStarted = Math.abs(new Date() - new Date(lastStarted));
  const timeFromLastInMinutes = Math.floor(timeFromLastStarted / 1000 / 60);
  const timeToSet = inSession ? elapsedTime + timeFromLastInMinutes : elapsedTime;

  useEffect(() => {
    setDisplayedTime(timeToSet);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      if (inSession) {
        setDisplayedTime((prev) => prev + 1);
      }
    }, 60 * 1000);
    return () => {
      clearInterval(timer);
    };
  }, [inSession]);

  if (!elapsedTime && !lastStarted)
    return {
      minutes: 0,
      hours: 0,
    };

  const minutes = displayedTime % 60;
  const hours = Math.floor(displayedTime / 60);

  console.log(`${hours}h ${minutes}m`);

  return {
    minutes,
    hours,
  };
};
