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
  Array.from(sourseString);
  for (let i = 0; i < sourseString.length; i++) {
    if (!isNaN(sourseString[i])) {
      stringOfNumbers += sourseString[i];
    }
  }

  return parseInt(stringOfNumbers, 10);
}

getNumber('сейчас 2023 год');


function amountSymbols(sourceString, minLength, extensionString) {
  const stringLength = minLength - sourceString.length;
  if (stringLength < extensionString.length) {
    for (let i = 0; i < stringLength; i++) {
      extensionString += extensionString[i];
    }
  }

  if (stringLength > extensionString.length) {
    const quantitySymbol = stringLength - extensionString.length;
    for (let i = 1; i <= quantitySymbol; i++) {
      extensionString += extensionString[i];
    }
  }

  return extensionString + sourceString;
}

amountSymbols('рица', 6, 'ку');

function getRandom(min, max) {
  if (min < 0 && min > max) {
    return NaN;
  }

  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.random() * (max - min + 1) + min;
}

getRandom(4, 20);
