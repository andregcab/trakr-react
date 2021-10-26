import { useState, useEffect } from 'react';

export const useElapsedTime = (session) => {
  const [displayedTime, setDisplayedTime] = useState(0);
  const [displayedSeconds, setDisplayedSeconds] = useState(0);
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
        setDisplayedSeconds((prevSeconds) => {
          if (prevSeconds < 59) {
            return prevSeconds + 1;
          }
          setDisplayedTime((prevMin) => prevMin + 1);
          return 0;
        });
      }
    }, 1000);
    return () => {
      clearInterval(timer);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inSession]);

  if (!elapsedTime && !lastStarted)
    return {
      minutes: 0,
      hours: 0,
      seconds: 0,
    };

  const hours = Math.floor(displayedTime / 60);
  const minutes = displayedTime % 60;
  const seconds = displayedSeconds;

  return { displayedTime, minutes, hours, seconds };
};
