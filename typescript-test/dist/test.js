"use strict";
const test = (props) => {
    // 타입을 명시하지 않은 경우기 때문에 props는 any로 추론된다.
    return props * 3; // 리턴타입은 number로 추론된다.
};
// props가 any이기 때문에 아래 두 개는 에러가 발생하지 않음
test(10); // 30
test("plus") + 5; // NaN
console.log(test(10));
console.log(test("plus") + 5);
function f4(a) {
    if (a > 0)
        return a * 30;
    else
        return a + 10;
}
console.log(f4(5) + 5);
function hello(person) {
    console.log(`안녕! ${person.name}이야 `);
}
const p = {
    name: "mark",
    age: 39,
};
