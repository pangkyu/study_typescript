# 타입 지정

```ts
let 배열: string[] = ["kim", "park"];
let 오브젝트: { name: string } = { name: "kim" };
let 오브젝트옵션설정: { name?: string } = {}; // 들어올수도 있고 아닐수도있고
let 숫자: number = 123;
let 문자: string = "park";
```

//다양한 타입(Union type)으로 지정

```ts
let 이름: string | number[] = "kim"; // string or number (Union type)
type LockStates = "locked" | "unlocked";
type OddNumbersUnderTen = 1 | 3 | 5 | 7 | 9;
```

// 타입을 변수에 담아서 사용가능

```ts
type SetType = string | number;
let 타입예시: SetType = 123;
```

//함수에도 타입지정 가능
// 파라미터로 number, return 값으로 number가 나와야한다는 뜻

```ts
function 함수(x : number) : number{
return x \*2;
}
```

//튜플 타입 첫번째는 number, 두번째는 boolean

```ts
type Member = [number, boolean];
let john: Member = [13, true];
```

//오브젝트에 타입지정해야할 속성이 많을 때 사용

```ts
type Member2 = {
  [key: string]: string; // 글자로 된 모든 object 속성의 타입은 : string
};
let john2: Member2 = { name: "kim" };
```

// class 타입지정

```ts
class User {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
}
```

//interface 사용

```ts
// boolean, bigint, null, number, string, symbol, object, undefined는 인터페이스에서 사용 가능

interface User {
  name: string;
  id: number;
}
const user: User = {
  name: "hayes",
  id: 1,
};
```

// 그 외

```ts
// any : 무엇이든 허용
// unknown : 이 타입을 사용하는 사람이 타입을 무엇으로 선언했는지 확인
// never : 이 타입은 발생될 수 없음
// void : undefined를 리턴하거나 리턴 값이 없는 함수
```

// 제네릭

```ts
type StringArray = Array<string>;
type ObjectWithNameArray = Array<{ name: string }>;
```

```ts
// 제네릭을 사용하는 고유 타입 선언

interface Backpack<Type> {
  add: (obj: Type) => void;
  get: () => Type;
}
// 이 줄은 TypeScript에 backpack이라는 상수가 있음을 알리는 지름길이며
// const backpack: Backpack<string>이 어디서 왔는지 걱정할 필요가 없다.
declare const backpack: Backpack<string>;

// 위에서 Backpack의 변수 부분으로 선언하여, object는 string입니다.
const object = backpack.get();

// backpack 변수가 string이므로, add 함수에 number를 전달할 수 없다.
backpack.add(23);
```

// 구조적 타입 시스템

```ts
// 타입스크립트의 핵심 원칙 중 하나는 타입 검사가 값이 있는 형태에 집중한다는 것, 덕 타이핑 또는 구조적 타이핑이라고 부름
interface Point {
  x: number;
  y: number;
}
function printPoint(p: Point) {
  console.log(`${p.x}, ${p.y}`);
}
const point = { x: 12, y: 26 }; // Point 타입으로 선언된 적이 없지만, 타입스크립트에서 point와 Point의 형태를 비교, 같은 형태기 때문에 통과된다.
printPoint(point);
```

// 교집합

```ts
type Combined = { a: number } & { b: string };
type Conflickting = { a: number } & { a: string };
```
