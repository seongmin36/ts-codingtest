// 두 수의 최대 공약수, 최소 공배수
const fs = require("fs");

const input = fs.readFileSync(0, "utf8").toString().trim().split(" ");
const a = Number(input[0]);
const b = Number(input[1]);

const gcd = (a, b) => (b === 0 ? a : gcd(b, a % b));
const lcm = (a, b) => (a * b) / gcd(a, b);

console.log(gcd(a, b));
console.log(lcm(a, b));
