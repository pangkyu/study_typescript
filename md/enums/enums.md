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
    Up = 'UP',
    Down = 'DOWN',
    Left = 'LEFT',
    Right = 'RIGHT',
}
// 숫자 열거형처럼 자동증가 기능은 없으나 직렬화를 잘할 수 있음 
```

// 계산된 멤버와 상수 멤버 