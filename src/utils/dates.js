import { format, formatDistance, parseISO } from "date-fns";

const formatDateForDateInput = function(date) {
  return format(date, "yyyy-MM-dd");
};

const formatDateForReading = function(date, now) {
  const readableDate = format(date, "MMMM d, yyyy");
  return readableDate;
};

const displayDatesDistance = function(date, now) {
  return formatDistance(date, now);
};

const transformDateStringToDate = function(date) {
  return parseISO(date);
};

export {
  formatDateForDateInput,
  formatDateForReading,
  transformDateStringToDate,
  displayDatesDistance
};
