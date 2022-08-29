# 열거형

// 숫자 열거형

```ts
enum Direction{
    Up = 1,
    Down, //2
    Left, //3
    Right, //4
}
// Up이 1로 초기화된 숫자 열거형을 선언.
// 그 뒤 멤버들은 자동으로 증가된 값을 갖는다

// 열거형 사용법 (이름을 이용)
enum Response{
    No = 1,
    Yes = 1,
}
function respond(recipient: string, message : Response): void{
    //...
}
respond('Princess Caroline', Response.Yes')

// 숫자 열거형은 계산된 멤버와 상수멤버를 섞어 사용할 수 있음
// 초기화되지 않은 열거형이 먼저 나오거나, 숫자 상수 혹은 다른 상수 열거형 멤버와 함꼐 초기화된 숫자 열거형 이후에 와야함
```

// 문자열 열거형

```ts
enum Direction {
  Up = "UP",
  Down = "DOWN",
  Left = "LEFT",
  Right = "RIGHT",
}
// 숫자 열거형처럼 자동증가 기능은 없으나 직렬화를 잘할 수 있음
```

// 계산된 멤버와 상수 멤버

```ts
// 각 열거형의 멤버는 상수이거나 계산된 값일 수 있다.

//열거형의 첫 번째 데이터이며 초기화 값이 없는 경우 0으로 값이 할당
enum E {
  X,
} // E.X는 상수,

//초기화 값이 없으며 숫자 상수로 초기화된 열거형 멤버 뒤에 따라 나오는 경우. 앞에 나온 상수 값에 1씩 증가한 값을 상수로 가짐

// 'E1', 'E2'의 모든 열거형 멤버는 상수
enum E1 {
  X,
  Y,
  Z,
}
enum E2 {
  A = 1,
  B,
  C,
}
```

```ts
// 열거형 멤버는 상수 열거형 표현식으로 초기화
/*
1. 리터럴 열거형 표현식 
2. 이전에 정의된 다른 상수 열거형 멤버에 대한 창조 (다른 열거형에서 시작될 수 있다 )
3. 괄호로 묶인 상수 열거형 표현식
4. 상수 열거형 표현식에 단항 연산자 +, -, ~를 사용한 경우 
5. 상수 열거형 표현식을 이중 연산자 +, -, *, /, %, <<, >>, >>>, &, |, ^ 의 피연산자로 사용할 경우 상수 열거형표현식 값이 NaN or Infinity면 컴파일 시점에 오류 발생 
  이외 다른 모든 경우 열거형 멤버는 계산된 것으로 간주 
*/
enum FileAccess {
  // 상수멤버
  None,
  Read = 1 << 1,
  Write = 1 << 2,
  ReadWrite = Read | Write,
  // 계산된 멤버
  G = "123".length,
}
```

// 열거형의 모든 멤버가 리터럴 열거형 값을 가지면 특별한 의미로 사용 가능

```ts
// 1. 열거형 멤버를 타입처럼 사용할 수 있다. ex) 특정 멤버는 오직 열거형 멤버의 값만 가지도록
enum ShapeKind {
  Circle,
  Square,
}

interface Circle {
  kind: ShapeKind.Circle;
  radius: number;
}
interface Square {
  kind: ShapeKind.Square;
  sideLength: number;
}
let c: circle = {
  kind: ShapeKind.Square, // err ! ShapeKind.Circle타입에 ShapeKind.Square타입 할당 불가
  radius: 100,
};
```

// 역 매핑

```ts
// 숫자 열거형 멤버는 멤버의 프로퍼티 이름을 가진 객체를 생성하는 것 외에도 열거형 값에서 열거형 이름으로 역 매핑을 받는다.
// 문자열 열거형의 경우 역 매핑을 생성하지 않음
enum Enum {
  A,
}
let a = Enum.A;
let nameOfA = Enum[a]; // 'A'
```

// const 열거형

```ts
const enum Enum {
  A = 1,
  B = A * 2,
}
// const 열거형은 상수 열거형 표현식만 사용될 수 있음
```

// Ambient 열거형

```ts
// 이미 존재하는 열거형 타입의 모습을 묘사하기 위해 사용
declare enum Enum {
  A = 1,
  B,
  C = 2,
}

// Ambient - non-Ambient 의 가장 큰 차이점은 일반적인 열거형에서 초기화 되지 않은 멤버가 사우로 간주하는 멤버 뒤에 있다면, 이 멤버도 상수로 간주
// (const가 아닌)Ambient열거형에서 초기화되지 않은 멤버는 항상 계산된 멤버로 간주
```
