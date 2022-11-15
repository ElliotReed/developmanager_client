import * as React from "react";
import DateDisplay from "components/common/datetime/DateDisplay";

export default function CurrentDateTime({ updateBy = { second: false, minute: false, } }) {
  const initialState = new Date()
  const [date, setDate] = React.useState(() => initialState);
  let updateInterval;
  if (updateBy.second) updateInterval = 1000;
  if (updateBy.minute) updateInterval = 1000 * 60;

  let options = { includeShortTime: true };

  React.useEffect(() => {
    const timer = setInterval(() => {
      setDate(() => new Date());
    }, [updateInterval]);

    return () => {
      clearInterval(timer);
    };
  }, [date, updateInterval]);

  return <DateDisplay options={options} date={date} />;
}
