const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const dayNames = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function formatNumber(number) {
  return number.toLocaleString("en-US", {
    minimumIntegerDigits: 2,
    useGrouping: false,
  });
}

function getDateString(date, options = { includeLongDay: true }) {
  const year = date.getFullYear();
  const monthIndex = date.getMonth();
  const monthName = months[monthIndex];
  const day = date.getDate();
  const dayNameIndex = date.getDay();

  let dayName;
  if (options.includeShortDay) {
    dayName = dayNames[dayNameIndex].substring(0, 3);
  } else {
    dayName = dayNames[dayNameIndex];
  }

  return `${dayName}, ${monthName} ${day}, ${year}`;
}

function getHourParameters(date) {
  const hours = date.getHours();
  const wallHours = hours === 0 ? 12 : hours < 13 ? hours : hours - 12;
  const meridiem = hours < 12 ? "AM" : "PM";

  return { wallHours, meridiem };
}

function getTimeString(date, options) {
  const { wallHours, meridiem } = getHourParameters(date);
  const minutes = formatNumber(date.getMinutes());
  const seconds = formatNumber(date.getSeconds());
  const secondsDisplay = options.includeFullTime ? ":" + seconds : '';

  return `${wallHours}:${minutes}${secondsDisplay} ${meridiem}`;
}

function coerceDate(date) {
  if (typeof (date) == 'string') {
    date = new Date(date);
  }

  return date;
}

function getDateTimeString(date, options) {
  const dateString = getDateString(date, options);
  let timeString = "";

  if (options.includeFullTime || options.includeShortTime) {
    timeString = getTimeString(date, options);
  }

  return `${dateString} ${timeString}`;
}

// Takes Date object or date string
export default function DateDisplay({
  date,
  options = {
    includeShortTime: false,
    includeFullTime: false,
    includeShortDay: false,
    includeLongDay: true,
  },
}) {
  if (!date) return null;

  date = coerceDate(date);
  const dateTimeString = getDateTimeString(date, options);

  return <time dateTime={date.toISOString()}>{dateTimeString}</time>;
}
