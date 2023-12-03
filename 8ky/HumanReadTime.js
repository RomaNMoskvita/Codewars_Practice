/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)

HH = hours, padded to 2 digits, range: 00 - 99
MM = minutes, padded to 2 digits, range: 00 - 59
SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)

You can find some examples in the test fixtures.
*/

//My solution

function humanReadable(seconds) {
  switch (true) {
    case seconds <= 59:
      //code
      if (seconds < 10) {
        i = "00" + ":" + "00" + ":" + "0" + seconds;
        return i;
      } else {
        i = "00" + ":" + "00" + ":" + seconds;
        return i;
      }

    case seconds < 3600:
      //code
      if (Math.floor(seconds / 60) < 0) {
        if (seconds % 60 < 0) {
          return (
            "00" + ":" + "0" + Math.floor(seconds / 60) + "0" + (seconds % 60)
          );
        } else {
          return "00" + ":" + "0" + Math.floor(seconds / 60) + (seconds % 60);
        }
      } else {
        if (seconds % 60 < 0) {
          return (
            "00" + ":" + "0" + Math.floor(seconds / 60) + "0" + (seconds % 60)
          );
        } else {
          return "00" + ":" + Math.floor(seconds / 60) + ":" + (seconds % 60);
        }
      }

    case 3600 < seconds:
    //.....bad solution
  }
}

//Best Practice
function humanReadable(seconds) {
  const pad = (num) => (num < 10 ? "0" + num : num);

  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  return `${pad(hours)}:${pad(minutes)}:${pad(remainingSeconds)}`;
}
