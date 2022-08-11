# 유니언

// 공통 필드를 갖는 유니언

```ts
interface Bird {
  fly(): void;
  layEggs(): void;
}
interface Fish {
  swim(): void;
  layEggs(): void;
}
declare function getSmallPet(): Fish | Bird;
let pet = getSmallPet();
pet.layEggs();
pet.swim(); // err : Fish와 Bird에 모두 포함되어 있어야 호출가능
```

// 유니언 구별하기 (Discriminating Unions)

```ts
type NetworkLoadingState = {
    state : 'loading';
};
type NetworkFailedState = {
    state : 'failed';
    code : number;
};
type NetworkSuccessState = {
    state : 'success';
    response : {
        title : string;
        duration : number;
        summary : string;
    };
};
type NetworkState =
  | NetworkLoadingState
  | NetworkFailedState
  | NetworkSuccessState;

function newworkStatus(state : )
```
