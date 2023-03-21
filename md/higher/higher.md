# 고급타입

// 유니언 타입

```ts
// 값의 타입이 겹쳐질 수 있는 상황을 모델링할 때 유용

// 유니언을 사용하지 않은 경우
function padLeft(value: string, padding: any) {
  if (typeof padding === "number") {
    // padding이 number타입이라면 그 숫자만큼의 공백이 왼쪽에 더해짐
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    // padding이 string형이라면 padding은 왼쪽에 더해짐
    return padding + value;
  }
  throw new Error(`Excected string or number, got '${padding}'.`);
}
padLeft("hello world", 4);
padLeft("hello world", true); // 컴파일은 통과되지만 런타임 에러발생

// 유니언을 사용
function padLeft(value: string, padding: string | number) {
  //...
}
let indentedString = padLeft("hello world", true); // 컴파일 중 에러
```

// 타입 가드와 차별 타입

```ts
interface Bird {
  fly();
  layEggs();
}

interface Fish {
  swim();
  layEggs();
}

function getSmallPet(): Fish | Bird {
  // ...
}

let pet = getSmallPet();
pet.layEggs(); // 성공
pet.swim(); // 오류

// 다음과 같이 각 플퍼티들에 접근하는 것은 오류를 발생
if (pet.swim) {
  pet.swim();
} else if (pet.fly) {
  pet.fly();
}
```
