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
function 함수(x: number): number {
  return x * 2;
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

```ts
// 형태만 만족하면 ok, 순서를 요구하지는 않음
interface LabeledValue {
  label: string;
}
function printLabel(labeledObj: LabeledValue) {
  console.log(labeledObj.label);
}
let myObj = { size: 10, label: "size 10 object" };
printLabel(myObj);
```

```ts
// 선택적 프로퍼티
// 어떤 조건에서만 존재하거나 아예 없을 수 있음.
// 객체 안에 몇 개의 프로퍼티만 채워 함수에 전달하는 option bags 같은 패턴일 떄 유용
// 선언단계에서 프로퍼티 이름 끝에 ? 를 붙여 표시
// 선택적 프로퍼티의 이점은 인터페이스에 속하지않는 프로퍼티의 사용을 방지하면서 사용 가능한 속성을 기술하는 것
interface SquareConfig {
  color?: string;
  width?: number;
}
function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: "white", area: 100 };
  if (config.color) {
    newSquare.color = config.color;
  }
  if (config.width) {
    newSquare.area = config.width * config.width;
  }
  return newSquare;
}
let mySquare = createSquare({ color: "black" });
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

// 배열(array)

```ts
// 2가지 방법으로 쓸 수 있음
//1. 타입뒤에 []
let list: number[] = [1, 2];
//2. 제네릭 배열
let list: Array<number> = [1, 2, 3];
```

// 열거 (Enum)

```ts
// enum은 값의 집합에 더 나은 이름을 붙힐 수 있음
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
// 기본적으로 0부터 인덱싱 시작되나 수동설정으로 번호 바꿀 수 있다
enum Color {
  Red = 1,
  Green,
  Blue = 4,
}
// 매겨진 값을 사용해 enum 멤버의 이름을 알아낼 수 있음
let colorName: string = Color[2]; // 'Green'이 colorName에 저장됨
```

// 타입 단언(Type assertions)

```ts
// 형변환과 유사하나 다른 특별한 검사나 데이터를 재구성하지않음 , 단 타입스크립트를 JSX와 함께 사용할 시 as스타일만 허용
let someValue: any = "this is a string";
//1. angle-bracket 문법
let strLength: number = (<string>someValue).length;
//2. as 문법
let strLength: number = (someValue as string).length;
```

// 읽기전용 프로퍼티

```ts
interface Point {
  readonly x: number;
  readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
p1.x = 5; // 오류발생

// 또한 ReadonlyArray<T> 타입 제공
let a: number[] = [1, 2, 3, 4];
let ro: ReadonlyArray<number> = a;
ro[0] = 12; //err
ro.push(5); //err
ro.length = 100; //err
a = ro; //err

a = ro as number[]; // 타입 단언으로 오버라이드하는 것은 가능
```

// 초과 프로퍼티 검사 (Excess Property Checks)

```ts
interface SquareConfig {
  color?: string;
  width?: number;
}
function createSquare(config: SquareConfig): { color: string; area: number } {
  //...
}
let mySquare = createSquare({ colour: "red", width: 100 }); // err 발생 아래와 같이 하면 에러 해결
let mySquare = createSquare({ width: 100, opacity: 0.4 } as SquareConfig);
// SquareCongig color 와 width 프로퍼티를 위와 같은 타입으로 가지고 있고, 또 다른 프로퍼티를 가질 수 있으면 아래와 같이 정의 가능
interface SquareConfig {
  color?: string;
  width?: number;
  [propName: string]: any;
}
```

// 함수 타입(Function types)

```ts
// 한번 정의하면 함수 타입 인터페이스를 다른 인터페이스처럼 사용가능
interface SearchFunc {
  (source: string, subString: string): boolean;
}
let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  let result = source.search(subString);
  return result > -1;
  //매개변수의 이름이 같을 필요 없음
  mySearch = function (src: string, sub: string): boolean {
    let result = src.search(sub);
    return result > -1;
  };
};
```

// 인덱서블 타입

```ts
// a[10]이나 ageMap['daniel'] 처럼 타입을 인덱스로 기술할 수 있음
interface StringArray {
  [index: number]: string;
}
let myArray: StringArray;
myArray = ["bob", "fred"];
let myStr: string = myArray[0];

//인덱스 서명을 지원하는 타입은 문자열, 숫자
// 숫자인덱서에서 반환된 타입은 반드시 문자열 인덱서에서 반환된 타입의 하위 타입이어야 한다.
class Animal {
  name: string;
}
class Dog extends Anial {
  breed: string;
}
// err : 숫자형 문자열로 인덱싱을 하면 완전히 다른 타입의 Animal을 얻는다.
interface NotOkay {
  [x: number]: Animal;
  [x: string]: Dog;
}

interface NumberDictionary {
  [index: string]: number;
  length: number;
  name: string; // 'name'의 타입은 인덱서의 하위타입이 아님
}
//다음과 같이 하면 허용
interface NumberDictionary {
  [index: string]: number | string;
  length: number;
  name: string;
}
//인덱서의 할당을 막기 위해 읽기 전용으로 만들 수 있음
interface ReadonlyStringArray {
  readonly [index: number]: string;
}
let myArr: ReadonlyStringArray = ["alice", "bob"];
myArr[2] = "mallory"; // err
```

// 인터페이스 확장

```ts
interface Shape {
  color: string;
}
interface Square extends Shape {
  sideLength: number;
}
let square = {} as Square;
square.color = "blue";
square.sideLength = 10;
```
