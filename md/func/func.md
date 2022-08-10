# 함수

// 나머지 매개변수(Rest Parameters)

```ts
// 함수가 최종적으로 얼마나 많은 매개변수를 가지는 지 모를 때 사용
function buildName(firstName : string, ...resOfName : string[]){
    return firstName + " " + restOfName.join(" "0;)
}
let employeeName = buildName('joseph', 'lucas', 'mackinzie'); // joseph lucas mackinzie 로 출력

//생략 부호는 나머지 매개변수가 있는 함수의 타입에도 사용된다.
function buildName(firstName : string, ...restOfName: string[]){
    return firstName + " " + restOfName.join(" ");
}
let buildNameFun : (fname: string, ...rest:string[]) => string = buildName;
```

// this

```ts
// this는 함수가 호출될 때 정해지는 변수. 함수를 반환하거나 인자로 넘길 때 혼란스러움은 악명이 높음

//다음은 this가 deck개게가 아닌 window에 설정되어있어 에러가 발생
let deck = {
    suits : ['hearts', 'spades', 'clubs', 'diamonds'],
    cards: Array(52),
    createCardPicker : function() {
        return function(){
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit : this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}
let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();
alert('card: ' + pickedCard.card + "of" + pickedCard.suit);

// 다음과 같이 벼경하여 에러 해걸
  createCardPicker : function() {
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit : this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
```

// 콜백에서 this 매개변수

```ts
// 나중에 호출할 콜백 함수를 라이브러리로 전달할 때, this로 인해 오류발생할 수 있음. 라이브러리는 콜백을 일반 함수처럼 호출하므로 this는 undefined가 된다.
// 일부작업에서는 this 매개변수를 콜백 오류를 막는데 사용가능, (콜백타입을 this로표시)
interface UIElement {
  addClickListener(onclick: (this: void, e: Event) => void): void;
}
```

// 오버로드(Overloads)

```ts
let suits = ["hearts", "spades", "clubs", "diamonds"];

function pickCard(x): any {
  // 인자가 배열 또는 객체인지 확인
  // 만약 그러면 deck이 주어지고 card를 선택
  if (typeof x == "object") {
    let pickedCard = Math.floor(Math.random() * x.length);
    return pickedCard;
  }
  // 그렇지 않다면 그냥 card를 선택
  else if (typeof x == "number") {
    let pickedSuit = Math.floor(x / 13);
    return { suit: suits[pickedSuit], card: x % 13 };
  }
  let myDeck = [
    { suit: "diamonds", card: 2 },
    { suit: "spades", card: 10 },
    { suit: "hearts", card: 4 },
  ];
  let pickedCard1 = myDeck[pickCard(myDeck)];
  alert("card : " + pickedCard1.card + "of" + pickedCard1.suit);

  let pickedCard2 = pickCard(15);
  alert("card : " + pickedCard2.card + "of" + pickedCard2.suit);
}
```
