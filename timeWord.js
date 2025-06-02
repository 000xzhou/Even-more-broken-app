// Turn a string of 24h time into words.
const ones = [
  "",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];
const tens = [
  "",
  "",
  "twenty",
  "thirty",
  "forty",
  "fifty",
  "sixty",
  "seventy",
  "eighty",
  "ninety",
];
const teens = [
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
];

// coverts number into words
function convert(num) {
  if (num == 0) return "o’clock";
  else return convert_tens(num);
}
function convert_tens(num) {
  if (num < 10) return ones[num];
  else if (num >= 10 && num < 20) return teens[num - 10];
  else {
    // split up so it don't get extra space when single
    let tensPart = tens[Math.floor(num / 10)];
    let onesPart = ones[num % 10];
    if (onesPart === "") {
      return tensPart;
    } else {
      return tensPart + " " + onesPart;
    }
  }
}

// put break down time and put all words together
function timeWord(string) {
  const hour = Number(string.split(":")[0]);
  const min = Number(string.split(":")[1]);
  let time = "";
  //   midnight
  if (hour == 0 && min == 0) {
    return "midnight";
  }
  //   noon
  if (hour - 12 == 0 && min == 0) {
    return "noon";
  }
  //   hours
  if (hour - 12 == 0 || hour == 0) {
    time += "twelve ";
  } else {
    if (hour >= 12) {
      time += `${convert(hour - 12)} `;
    } else {
      time += `${convert(hour)} `;
    }
  }
  //   if min is less than 10
  if (min < 10 && min != 0) {
    time += "oh ";
  }
  //   min
  time += `${convert(min)} `;

  //   day or night
  if (hour < 12) {
    time += "am";
  } else {
    time += "pm";
  }

  return time;
}

module.exports = { timeWord, convert };
