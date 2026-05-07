// Codni ishga tushurish uchun terminalga npm run train buyrug'ini yozing

// TASK F starting
function findDoublers(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
      return true;
    }
  }
  return false;
}

console.log(findDoublers("SHUKURJON/LEO"));
console.log(findDoublers("LEO"));
// TASK F ending

// TASK E starting
// function getReverse(str) {
//   return str.split("").reverse().join("");
// }

// console.log(getReverse("HELLO WORLD"));
// TASK E ending
