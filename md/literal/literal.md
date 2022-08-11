# 리터럴

//문자열 리터럴 타입

```ts
// 문자열 리터럴 타입은 유니언 타입, 타입 가드 , 타입 별칭과 잘 결합된다.
type Easing = "ease-in" | "ease-out" | "ease-in-out";

class UIElement {
  animate(dx: number, dy: number, easing: Easing) {
    if (easing === "ease-in") {
      //...
    } else if (easing === "ease-out") {
    } else if (easing === "ease-in-out") {
    } else {
    }
  }
}
let button = new UIElement();
button.animate(0, 0, "ease-in");
button.animate(0, 0, "uneasy"); // 다음 문자열은 err 발생

// 문자열 리터럴 타입은 오버로드를 구별하는 것과 동일한 방법으로 사용될 수 있음
function createElement(tagName: "img"): HTMLImageElement;
function createElement(tagName: "input"): HTMLInputElement;
// 추가적인 중복 정의들
function createElement(tagName: string): Element {
  // 여기에 로직 추가
}
```

// 숫자형 리터럴 타입

```ts
function rollDice(): 1 | 2 | 3 | 4 | 5 | 6 {
  return (Math.floor(Math.random() * 6) + 1) as 1 | 2 | 3 | 4 | 5 | 6;
}
const result = rollDice();

/*  loc/lat 좌표에 지도를 생성 */
declare function setupMap(config: MapConfig): void;
// -생략-
interface MapConfig {
  lng: number;
  lat: number;
  tileSize: 8 | 16 | 32;
}
setupMap({ lng: -73.935242, lat: 40.73061, tileSize: 16 });
```
