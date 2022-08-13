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
  state: "loading";
};
type NetworkFailedState = {
  state: "failed";
  code: number;
};
type NetworkSuccessState = {
  state: "success";
  response: {
    title: string;
    duration: number;
    summary: string;
  };
};
type NetworkState =
  | NetworkLoadingState
  | NetworkFailedState
  | NetworkSuccessState;

function newworkStatus(state: NetworkState): string {
  // 현재 타입스크립트는 셋 중 어떤 것이 state가 될 수 있는 잠재적인 타입인지 알 수 없다.

  state.code; // 모든 타입에 공유되지 않는 프로퍼티에 접근하는 시도는 오류 발생

  switch (state.state) {
    case "loading":
      return "downloading...";
    case "failed":
      return `error ${state.code} downloading`;
    case "success":
      return `downloaded ${state.response.title} - ${state.response.summary}`;
  }
}
```

// 교차타입(Intersection Types)

```ts
// 교차 타입은 여러 타입을 하나로 결합. 기존 타입을 합쳐 필요한 기능을 모두 가진 단일 타입을 얻을 수 있다 .
interface ErrorHandling {
  success: boolean;
  error?: { messgae: string };
}
interface ArtworksDATA {
  ARTWORKS: { TITLE: STRING }[];
}
```
