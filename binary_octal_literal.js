
// "use strict"

console.log(`_____ 4장. Binary & Octal Literal ______ `);


console.log(`이진법 표기. 기존`);
let bin = parseInt('111', 2);
console.log(bin);

console.log(`ES6에서는 0b prefix로 이진법 대입이 가능해졌다.`);
let es6_bin = 0b111;
console.log(es6_bin);

console.log('\n\n');
console.log(`8진법 표기`);
console.log('valid octal');
let a = 051;
console.log(a);

console.log('invalid octal');
let b = 058;
console.log(b);



// ES6
console.log(`ES6에서의 8진법 표기`);
let es6_a = 0o51;
console.log(es6_a);

// let es6_b = 0o58;
// console.log(es6_b);


