const today = new Date();
const date =new Date('2078-11-24');
console.log(today);
console.log(date);
console.log(date.getMonth());
console.log(date.getDate());
date.setMonth(5);
console.log(date);
const specificDate = new Date(2031,3,18);
console.log(specificDate);

specificDate.setMonth(10);
console.log(specificDate);

console.log(specificDate.toLocaleString('en-Gb'));
