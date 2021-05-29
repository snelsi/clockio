import { useEffect, useState } from "react";

const getTime = () => new Date();

const useTime = (refreshCycle = 100) => {
  const [now, setNow] = useState(getTime());

  useEffect(() => {
    const intervalId = setInterval(() => setNow(getTime()), refreshCycle);

    return () => clearInterval(intervalId);
  }, [refreshCycle, setNow]);

  return now;
};

export default useTime;
