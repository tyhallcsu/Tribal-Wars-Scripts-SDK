function validateTimeFormat(timeString) {
  var timeFormatRegex = /^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/;
  if (!timeFormatRegex.test(timeString)) {
    return false;
  }
  var parts = timeString.split(':');
  var hours = parseInt(parts[0], 10);
  var minutes = parseInt(parts[1], 10);
  var seconds = parseInt(parts[2], 10);
  if (hours > 23 || minutes > 59 || seconds > 59) {
    return false;
  }
  return true;
}