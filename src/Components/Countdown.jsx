import React from "react";
import { useState, useEffect } from "react";
import SVGLine from "./SVGLine";

function Countdown({ timeTillDate }) {
  const [countdownComplete, setCountdownComplete] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [daysRadius, setDaysRadius] = useState(0);
  const [hoursRadius, setHoursRadius] = useState(0);
  const [minutesRadius, setMinutesRadius] = useState(0);
  const [secondsRadius, setSecondsRadius] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const time = Date.parse(timeTillDate) - Date.parse(new Date());
      if (time < 0) {
        setCountdownComplete(true);
        setDays(0);
        setHours(0);
        setMinutes(0);
        setSeconds(0);
        setDaysRadius(0);
        setHoursRadius(0);
        setMinutesRadius(0);
        setSecondsRadius(0);
      } else {
        setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
        setMinutes(Math.floor((time / 1000 / 60) % 60));
        setSeconds(Math.floor((time / 1000) % 60));
        setDaysRadius(Math.round((days / 360) * 100));
        setHoursRadius(Math.round((hours / 24) * 100));
        setMinutesRadius(Math.round((minutes / 60) * 100));
        setSecondsRadius(Math.round((seconds / 60) * 100));
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [days, hours, minutes, seconds, timeTillDate]);

  return (
    <div>
      {!countdownComplete && (
        <div>
          <h1>Opening in...</h1>
          <div className="countdown-wrapper">
            <div className="countdown-item">
              {days}
              <span>days</span>
              <SVGLine radius={daysRadius} />
            </div>
            <div className="countdown-item">
              {hours}
              <span>hours</span>
              <SVGLine radius={hoursRadius} />
            </div>
            <div className="countdown-item">
              {minutes}
              <span>minutes</span>
              <SVGLine radius={minutesRadius} />
            </div>
            <div className="countdown-item">
              {seconds}
              <span>seconds</span>
              <SVGLine radius={secondsRadius} />
            </div>
          </div>
        </div>
      )}
      {countdownComplete && <h1>Now open!</h1>}
    </div>
  );
}

export default Countdown;
