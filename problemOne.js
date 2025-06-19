const a = 2;
const b = 8;
const c = 9;

const s = (a + b + c) / 2;
const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
console.log(`The area of the triangle is: ${area.toFixed(2)}`);
//const round = area.toFixed(2);
//console.log(round);