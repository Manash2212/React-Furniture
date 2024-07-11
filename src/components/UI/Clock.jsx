import { useEffect, useState } from "react";

const Clock = () => {
  const [days, setDays] = useState();
  const [hours, setHours] = useState();
  const [minutes, setMinutes] = useState();
  const [seconds, setSeconds] = useState();

  let interval;

  const countDown = () => {
    const now = new Date();
    const tomorrow = new Date(now);
    tomorrow.setDate(now.getDate() + 2);

    const day = String(tomorrow.getDate()).padStart(2, "0");
    const month = tomorrow.toLocaleString("default", { month: "long" });
    const year = tomorrow.getFullYear();

    const fullDate = `${day}/${month}/${year}`;

    const nextDay = fullDate.toString();
    // console.log(nextDay);

    const destination = new Date(nextDay).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const different = destination - now;

      const days = Math.floor(different / (1000 * 60 * 60 * 20));
      const hours = Math.floor(
        (different % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((different % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((different % (1000 * 60)) / 1000);

      if (destination < 0) clearInterval(interval.current);
      else {
        setDays(days);
        setHours(hours);
        setMinutes(minutes);
        setSeconds(seconds);
      }
    });
  };

  useEffect(() => {
    countDown();
  });

  return (
    <div>
      <div className="container flex items-center gap-2">
        <div className="item flex items-center gap-2 font-primary">
          <div className="child rounded-full py-2 px-2 flex flex-col items-center    ">
            <h2 className="text-2xl max-sm:text-xl ">{days}</h2>
            <h2 className="text-xs ">Days</h2>
          </div>
          <span className="text-2xl font-semibold">:</span>
        </div>
        <div className="item flex items-center gap-2 font-primary">
          <div className="child rounded-full py-2 px-2 flex flex-col items-center   ">
            <h2 className="text-2xl max-sm:text-xl ">{hours}</h2>
            <h2 className="text-xs">Hours</h2>
          </div>
          <span className="text-2xl font-semibold">:</span>
        </div>
        <div className="item flex items-center gap-2 font-primary">
          <div className="child rounded-full py-2 px-2 flex flex-col items-center   ">
            <h2 className="text-2xl max-sm:text-xl ">{minutes}</h2>
            <h2 className="text-xs">Minutes</h2>
          </div>
          <span className="text-2xl font-semibold">:</span>
        </div>
        <div className="item flex items-center gap-2 font-primary">
          <div className="child rounded-full py-2 px-2 flex flex-col items-center   ">
            <h2 className="text-2xl max-sm:text-xl ">{seconds}</h2>
            <h2 className="text-xs">Seconds</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clock;
