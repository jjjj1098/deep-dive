let foo=42
foo ='bar'
foo = true

console.log(typeof foo); 

//원시 타입
//문자열 String
const name = 'han';

const age = 30;

const hasJob = true;

const car = null;

//undefined
let anything;

const sym = Symbol();

//참조 타입
//Array 배열(obfect에 포함이기 때문에 typeof는 object로 나옴)
const hobbies = ['sports', 'cooking'];
//Object 객체
const address = {
    province: '경기도',
    city: '성남시'
}

console.log(typeof address);
console.log(Array.isArray(address));