

/**
 * 배열 또는 열거 가능한 객체(키-값)를 리스트로 확장시킴 
 */


function sum(x, y, z) {
    return x + y + z;
}
const numbers = [1,2,3];
console.log(sum(...numbers));


console.log(`배열 2개를 하나로 합치는 경우. 이전 방법`);
var arr_a = [0, 1, 2];
var arr_b = [2, 3, 4, 5];
var arr_ab = arr_a.concat(arr_b);
console.log(arr_a);
console.log(arr_b);
console.log(arr_ab);


console.log(`배열 2개를 하나로 합치는 경우. spread operator를 사용할 경우`);
var arr_c = [0, 1, 2];
var arr_d = [2, 3, 4, 5];
var arr_cd = [ ...arr_c, ...arr_d ];
console.log(arr_c);
console.log(arr_d);
console.log(arr_cd);


console.log(`배열 초기화시 기존 배열에서 spread operator로 복사하기`);
var arr_1 = ['c', 'd', 'e'];
var arr_2 = ['a', 'b', ...arr_1, 'f', 'g'];
console.log(arr_2);


console.log(`객체 리터럴인 경우 `);
var obj_1 = { foo: 'hello', x: 12 };
var obj_2 = { foo: 'world', y: 34 };

var cloned_obj = { ... obj_1 };
console.log(cloned_obj);

var merged_obj = { ...obj_1, ...obj_2 };
console.log(merged_obj);


console.log(`문자열의 경우도 spread operator로 문자 단위로 배열로 쉽게 변환 가능`);
var helloworld = 'hello world';
var arr_helloworld = [...helloworld];
console.log(arr_helloworld);


console.log(`주의사항. 이터러블 전용. 열거가능하지 않은 객체의 경우에는 사용 불가`);
try {
    var arr_k = { 'key': 123 };
    var arr_j = [ ...arr_k ];
    console.log(arr_j);
} catch (error) {
    console.log(`에러발생!!!`);
    console.error(error);
}

console.log(`함수를 호출하는 경우에도 spread operator 사용할 수 있음`);
var some_numbers = [8, 5, 10, 4, 2, 7];
console.log(` 배열에서 `, some_numbers);
console.log(' 최소값은: ', Math.min(...some_numbers));
console.log(' 최대값은: ', Math.max(some_numbers));
console.log(' 최대값은: ', Math.max(...some_numbers));
