export function getCurrentTimeFormatted() {
  const date = new Date();

  // Month full name
  const month = date.toLocaleString("en-US", { month: "long" });

  // Day
  const day = date.getDate();

  // Year
  const year = date.getFullYear();

  // Hour in 12-hour format
  let hour = date.getHours();
  const period = hour >= 12 ? "pm" : "am";
  hour = hour % 12;
  hour = hour === 0 ? 12 : hour; // Handle midnight (0 hours)

  // Minutes
  const minutes = date.getMinutes();

  // Construct the formatted date string with 'pm' suffix
  const formattedDate = `${month} ${day} ${year} ${hour}:${minutes}${period}`;

  return formattedDate;
}
