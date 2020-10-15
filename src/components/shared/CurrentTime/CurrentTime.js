import React, { useEffect, useState } from "react";
import Moment from "react-moment";

import styles from "./CurrentTime.module.scss";

const CurrentTime = () => {
  const [time, setTime] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(time ? false : true);
    }, 1000 * 15); // runs every 15 seconds

    return () => {
      clearInterval(timer);
    };
  }, [time]);
  return (
    <div className={styles.time}>
      <p>
        <Moment format="dddd. MMMM Do YYYY, h:mm A"></Moment>
      </p>
    </div>
  );
};

export default CurrentTime;
