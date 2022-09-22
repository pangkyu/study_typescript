# 제네릭

- 제네릭을 통해 여러 타입의 컴포넌트나 자신만의 타입을 사용할 수 있음!

```ts
/* 
    T는 유저가 준 인수의 타입을 캡쳐하고 이 정보를 나중에 사용할 수 있도록 함. 아래 함수에서 T는 반환 타입으로 다시 사용됨 

*/
function identity<T>(arg: T): T {
  return arg;
}

// 아래 2가지 방법 중 하나로 호출될 수 있다.
// 1. 함수에 타입 인수를 포함한 모든 인수를 전달하는 방법
let output = identity<string>("mystring"); // 출력 타입 : 'string'
// 2. 타입 인수 추론을 사용(우리가 전달하는 인수에 따라 컴파일러가 T의 값을 자동으로 정함 )
let output = identity("mystring"); // 출력 타입 : 'string'  , <>에 담아 명시적 전달을 하지 않았으므로 컴파일러는 'mystring'을 보고 그것의 타입을 T로 정함
```

// 제네릭 타입

```ts
function identity<T>(arg: T): T {
  return arg;
}
let myIdentity: <T>(arg: T) => T = identity;

// 타입 변수의 수와 타입 변수가 사용되는 방식에 따라 타입의 제네릭 타입 매개변수에 다른이름을 사용할 수 있다.
function identity<T>(arg: T): T {
  return arg;
}
let myIdentity: <U>(arg: U) => U = identity;
```

// 제네릭 클래스

```ts
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}
let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
```

// 제네릭에서 클래식 타입 사용

```ts
//제네릭을 사용하는 타입스크립트에서 팩토리를 생성할 때 생성자 함수로 클래스 타입을 참조해아함
function create<T>(c: { new (): T }): T {
  return new c();
}
```
