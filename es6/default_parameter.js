


console.log(` ___ Default Parameters (기본값 매개변수) ___`);
console.log(`값이 없거나 undefined가 전달될 때 지정한 기본값으로 초기화 할 수 있다.`);
console.log(`C#, C++ 등에 있는 기본 함수 인자같은 개념`);

console.log(`기본값을 지정하지 않고, 함수 인자가 모자란 경우 NaN`);
function subtract(a, b) {
    console.log(`---> subtract(a:${a}, b:${b})`);
    return a - b;
}
console.log(subtract(10, 5));
console.log(subtract(10));


console.log(`기본값으로 함수 인자를 지정한 경우 `);
function add(a, b = 10) {
    console.log(`---> add(a:${a}, b:${b})`);
    return a + b;
}

console.log(add(3, 4));
console.log(add(3));

console.log(` Default Parameter는 여기까지`);

