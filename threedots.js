const ages = [22, 12, 32, 11];
const ages2 = [2, 44, 22, 44];
const ages3 = [2, 4, 5];
const allAges = ages.concat([5]).concat(ages2);  //string ke add korte hole concat korte hoi normally
const allAges2 = [...ages, ...ages2, 6, ...ages3]; //r es6 e string ke add korte hole ... korte hoi 
const x = 44;
const y = 88;
const z = 100;
const temp = [44, 33, 222];
const maximum2 = Math.max(...temp);
const maximum = Math.max(x, y, z);
console.log(maximum2);
// console.log(allAges);
// console.log(allAges2);