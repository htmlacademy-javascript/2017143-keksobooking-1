// Палиндром
function isPalindrome(str) {
  const normalisedString = str.toLowerCase().replace(' ','');
  return normalisedString === str.split('').reverse().join('');
}

isPalindrome('Довод');

// Приведение строки к числу

function getNumber(str) {
  let stringOfNumbers = '';
  const sourseString = str.replaceAll(' ','');
  for (let i = 0; i < sourseString.length; i++) {
    if (!isNaN(sourseString[i])) {
      stringOfNumbers += sourseString[i];
    }
  }

  return parseInt(stringOfNumbers, 10);
}

getNumber('сейчас 2023 год');


function expendString(string, minLength, pad) {
  const lengthOfString = minLength - string.length;
  if (lengthOfString <= 0) {
    return string;
  }

  return pad.slice(0, lengthOfString % pad.length) + pad.repeat(lengthOfString / pad.length) + string;
}

expendString('2222', 6, '123');

function getRandom(min, max) {
  if (min < 0 && min > max) {
    return NaN;
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.random() * (max - min + 1) + min;
}

getRandom(4, 20);
