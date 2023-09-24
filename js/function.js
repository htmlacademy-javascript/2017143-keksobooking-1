// Палиндром
function isPalindrome(str) {
  str = str.toLowerCase().replace(' ','');
  return str === str.split('').reverse().join('');
}

isPalindrome('Довод');

// Приведение строки к числу

function getNumber(str) {
  str = parseInt(str, 10);
  return str;
}

getNumber('2023 год');

function amountSymbol(str, minLength, symbol) {
  const symbolLength = minLength - str.length;
  if (symbolLength < symbol.length) {
    for (let i = 1; i <= symbolLength; i++) {
      symbol = symbol[0] + symbol[i];
    }
    return symbol;
  }

  if (symbolLength > symbol.length) {
    const quantitySymbol = symbolLength - symbol.length;
    for (let i = 1; i <= quantitySymbol; i++) {
      symbol = symbol[0] + symbol;
    }
    return symbol;
  }

  return symbol + str;
}

amountSymbol('рица', 6, 'ку');

function getRandom(min, max) {
  if (min < 0) {
    return NaN;
  }
  if (min > max) {
    return NaN;
  }
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.random() * (max - min + 1) + min;
}

getRandom(4, 20);
