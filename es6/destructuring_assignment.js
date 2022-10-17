
console.log(`Destructuring Assignment (구조 분해 할당)`);
// 구조 분해 할당 구문은 배열이나 객체의 속성을 분해하여 그 값을 개별 변수에 담을 수 있게 하는 표현식이다.

let a, b, rest;
[a, b] = [10, 20];

console.log(a);
console.log(b);
[a, b, ...rest] = [10, 20, 30, 40, 50, 60];
console.log(rest);


console.log(`객체의 경우 그 키로 할당이 가능하다`);
let hello, world;
({ world, hello } = { hello: 1, world: 2 });
console.log(' * hello : ', hello);
console.log(' * world : ', world);


console.log(`컬러코드를 쉽게 할당하는 예제`);
let colors = ['#ff0000', '#00ff00', '#0000ff'];
let [red, green, blue] = colors;
console.log(' * red color   : ', red);
console.log(' * green color : ', green);
console.log(' * blue color  : ', blue);


console.log(`문자열로 된 CAN로깅 메시지 파싱의 경우 `);
let CANMSG = `16 1599046795.65409 4CB 8 00 00 00 00 00 00 00 00`;
console.log(' 문자열로 된 CAN메시지 : ', CANMSG);
let [index, timestamp, arbitration_id, dlc, ...data] = CANMSG.split(' ');
console.log(' * index: ', index);
console.log(' * timestamp: ', timestamp);
console.log(' * arbitration_id: ', arbitration_id);
console.log(' * dlc: ', dlc);
console.log(' * data: ', data);


console.log(`위의 예제를 객체로 한번 더 감싸주기 ~~~~ GOOD`);
let canmsg = {};
[canmsg.index, canmsg.timestamp, canmsg.arbitration_id, canmsg.dlc, ...canmsg.data] = CANMSG.split(' ');
console.log(canmsg);


console.log(`destructuring assignment 를 이용하여 쉽게 두 변수값 교환하기`)
let guest = "Jane";
let admin = "Pete";

// 변수 guest엔 Pete, 변수 admin엔 Jane이 저장되도록 값을 교환함
console.log(guest);
console.log(admin);

[guest, admin] = [admin, guest];

console.log(guest);
console.log(admin);


console.log(`객체 분해하기`);
let person = {
    alias: 'Ubaba',
    age: 30,
    height: 170,
};
let { alias, age, height } = person;
console.log(' * alias  : ', alias);
console.log(' * age    : ', age);
console.log(' * height : ', height);

console.log(`그밖에도 다양하게 변형하여 편리하게 사용할 수 있음. `);