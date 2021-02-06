/* Converts UTC hours to IST hours */
export const UTCtoISTdate = (date = new Date()) => {
  const dateIST = new Date(date);
  dateIST.setHours(dateIST.getHours() + 5);
  dateIST.setMinutes(dateIST.getMinutes() + 30);
  return dateIST;
};

/* Extracts the date string from IST hours */
export const getDate = (date) => {
  return UTCtoISTdate(date).toISOString().substr(0, 10);
};

/* Formats the date like Thu Sat 06 2021  */
export const getDateFormatted = (date) => {
  const newDate = new Date(date);
  return newDate.toDateString();
};
