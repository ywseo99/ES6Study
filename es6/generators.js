console.log(`_____ 5. Generators _____`);
console.log(` 난이도 : ★★★★☆`);
console.log(` 설명   : 제너레이터 함수는 사용자의 요구에 따라 (yield, next를 통해) 일시적으로 정지될 수도 있고 다시 시작될 수도 있다.`);

/**
 * Generator Function 
 * Generator Function는 사용자의 요구에 따라 다른 시간 간격으로 여러 값을 반환할 수 있으며
 * 내부상태를 관리할 수 있는 함수이며, 
 * function* generatorFunction() { ...  } 와 같이 사용한다. 
 * 단 한 번의 실행으로 함수의 끝까지 실행이 완료되는 일반 함수와는 달리, 
 * 제너레이터 함수는 사용자의 요구에 따라 (yield와 enxt를 통해) 일시적으로 정지될 수도 있고, 다시 시작될 수도 있다. 
 * 또한, 제너레이터 함수의 반환으로는 제너레이터가 반환된다. 
 * 
 * yield는 함수의 실행을 일시적으로 정지시키며, yield 뒤에 오는 표현식은 제너레이터의 호출자에게 반환된다. 일반 함수의 return과 유사하다.
 */

console.log(`예제1. 제너레이터 기본 예제`);
function* sampleGFunction() {
    console.log(yield 10);
    console.log(yield 5);
    console.log(yield 0);
}

function run(gen) {
    const it = gen();
    (function iterate({ value, done}) {
        if (done) {
            return value;
        }
        if (value % 2 === 0) {
            iterate(it.next(value + 1));            
        }
        else {
            iterate(it.next(value));
        }
    })(it.next());
}
run(sampleGFunction);
console.log(` 감이 오지 않는다. ㅠㅠ `);



console.log(`예제2. 제너레이터 return 으로 종료하기`);
function* increment() {
    console.log('[ENTERED]');
    let i = 0;

    try {
        while (true) {
            yield i++;            
        }
    } catch (e) {
        console.log('[ERROR]', e);
    }    
}

const withReturn = increment();
console.log(withReturn.next());
console.log(withReturn.next());
console.log(withReturn.next());
console.log(withReturn.next());
console.log(withReturn.return(30));



console.log(`예제3. yield* 를 사용할 경우 yield*와 함꼐 표현된 이터러블 객체를 순회한다.`);
function* iterableYield() {
    const a = 1;
    yield a;
    yield* [1,2,3].map(el => el * (10 ** a));

    const b = 2;
    yield b;
    yield* [1,2,3].map(el => el * (10 ** b));

    const c = 3;
    yield c;
    yield* [1,2,3].map(el => el * (10 ** c));
}

function run3(gen) {
    const it = gen();
    (function iterate({ value, done }) {
        console.log({value, done});
        if (done) {
            return value;
        }
        iterate(it.next(value));
    })(it.next());
}

run3(iterableYield);




console.log(`예제4. Iterable한 Generator`);
function* generateName() {
    yield 'A';
    yield 'U';
    yield 'T';
    yield 'O';
    yield 'C';
    yield 'R';
    yield 'Y';
    yield 'P';
    yield 'T';
}

const genForOf = generateName();
console.log(genForOf);
console.log(genForOf.next());
console.log(genForOf.next());
console.log(genForOf.next());
console.log(genForOf.next());

for (let i of genForOf) {
    console.log(i);
}
console.log(genForOf.next());




console.log(`예제5. 카운터 예제`);
function* counter() {
    console.log('첫번째 호출');
    yield 1;        // 첫번째 호출시에 이 지점까지 실행되고 리턴한다.
    console.log('두번째 호출');
    yield 2;        // 두번째 호출시에 이 지점까지 실행되고 리턴한다.
    console.log('세번째 호출'); // 세번째 호출시에 이 지전까지 실행된다.
}

const generatorObj = counter();
console.log(generatorObj.next());
console.log(generatorObj.next());
console.log(generatorObj.next());


console.log(`예제6. 이터러블 구현. 피보나치`);
// 제너레이터 함수를 사용하면 이터레이션 프로토콜을 준수해 이터러블을 생성하는 방식보다 간편하게 이터러블을 구현할 수 있다. 
const infiniteFibonacci = (function () {
    let [pre, cur] = [0, 1];

    return {
        [Symbol.iterator]() { return this; },
        next() {
            [pre, cur] = [cur, pre + cur];
            // done 프로터티를 생략한다.
            return { value: cur};
        }
    };
}());
for (const num of infiniteFibonacci) {
    if (num > 1000) break;
    console.log(num);
}



console.log(`예제6-2. 제너레이터 활용할 경우`);
const infiniteFibonacciGenerator = (function* () {
    let [pre, cur] = [0, 1];
    while (true) {
        [pre, cur] = [cur, pre + cur];
        yield cur;
    }
}());
for (const num of infiniteFibonacciGenerator) {
    if (num > 1000) break;
    console.log(num);
}