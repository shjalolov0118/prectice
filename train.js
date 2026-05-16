// Codni ishga tushurish uchun terminalga npm run train buyrug'ini yozing.

// MITASK I starting

// savol starting
// TASK I
// Array ichida eng ko'p takrorlangan raqamni topib qaytarsin.

// Masalan: majorityElement([1, 2, 3, 4, 5, 4, 3, 4]) return 4
// savol ending

// yechim starting
function majorityElement(arr) {
  return arr
    .sort(
      (a, b) =>
        arr.filter((v) => v === a).length - arr.filter((v) => v === b).length,
    )
    .pop();
}

console.log(majorityElement([1, 2, 3, 4, 5, 4, 3, 4])); // 4
// yechim ending

// MITASK I ending

// TASK H starting

// savol starting
// TASK H
// Integerlardan iborat arrayni qabul qilib, faqatgina positive sonlarni olib string holatida return qilsin.
// Masalan: getPositive([1, -4, 2]) return "12"
// savol ending

// yechim starting
// function getPositive(arr) {
//   return arr.filter((num) => num > 0).join("");
// }

// console.log(getPositive([1, -2, 3, -4]));
// console.log(getPositive([1, -2, 3, -4, 5, -6, 7, -8, 9]));
// yechim ending

// TASK G starting

// savol starting
// TASK G
// Yagona parametrga ega function tuzing. Array tarkibidagi birinchi eng katta qiymatning indeksini qaytarsin.
// Masalan: getHighestIndex([5, 21, 12, 21, 8]) return 1
// savol ending

// yechim starting

// console.log(Math.max(5, 11, 12, 211, 8)); // bu yerdagi Math = bu method

// yechim ending

// TASK G ending

// TASK F starting
// function findDoublers(str) {
//   for (let i = 0; i < str.length; i++) {
//     if (str.indexOf(str[i]) !== str.lastIndexOf(str[i])) {
//       return true;
//     }
//   }
//   return false;
// }

// console.log(findDoublers("SHUKURJON/LEO"));
// console.log(findDoublers("LEO"));
// TASK F ending

// TASK E starting
// function getReverse(str) {
//   return str.split("").reverse().join("");
// }

// console.log(getReverse("HELLO WORLD"));
// TASK E ending
