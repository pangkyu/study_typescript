# 클래스

```ts
class Greeter {
  greeting: string;
  constructor(message: string) {
    this.greeting = message;
  }
  greet() {
    return "hello, " + this.greeting; // 리턴 결과 : 'hello, world'
  }
}
let greeter = new Greeter("world");
```

// 상속

```ts
class Animal {
  move(distanceInMeters: number = 0) {
    console.log(`animal moved ${distanceInMeters}m.`);
  }
}
class Dog extends Animal {
  bark() {
    console.log("woof! woof!");
  }
}
const dog = new Dog();
dog.bark();
dog.move(10);
dog.bark();

/* 
    실행 결과 
    woof! woof!
    animal moved 10m.
    woof! woof! 
*/
// 상속받아서 Aniaml 클래스에도 접근이 가능
```

```ts
class Animal {
  name: string;
  constructor(theName: string) {
    this.name = thsName;
  }
  move(distanceInMeters: number = 0) {
    console.log(`${this.name} moved ${distanceInMeters}m.`);
  }
}
class Snake extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 5) {
    console.log("slithering...");
    super.move(distanceInMeters);
  }
}
class Horse extends Animal {
  constructor(name: string) {
    super(name);
  }
  move(distanceInMeters = 45) {
    console.log("Galloping...");
    super.move(distanceInMeters);
  }
}
let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);
// 파생된 클래스의 생성자 함수는 기초 클래스의 생성자를 실행할 super()를 호출해야 함. ** this에 있는 프로퍼티에 접근하기 전에 super() 먼저 호출 **
```

//ECMAScript 비공개 필드

```ts
class Animal {
  #name: string;
  constructor(thsName: string) {
    this.#name = theName;
  }
}
new Animal("cat").#name; // 프로퍼티 #name 은 비공개 식별자이기 때문에 'Animal' 클래스 외부에선 접근할 수 없다.
```

// private

```ts
class Animal {
  private name: string;
  constructor(theName: string) {
    this.name = theName;
  }
}
new Animal("cat").name; // err : 'name'은 비공개로 선언 되어있음
//  private 및 protected 멤버가 있는 타입들을 비교할 때는 타입을 다르게 처리. 한 쪽에서 private/protected 멤버를 가지고 있다면, 다른 한 쪽도 무조건 동일한 선언에 private/protected 멤버를 가져야함
```

// 읽기전용 지정자 (Readonly modifier)

```ts
// readonly 키워드를 사용하여 프로퍼티를 읽기전용으로 만들 수 있다. 선언 또는 생성자단계에서 초기화해야함
class Octopus {
  readonly name: string;
  readonly numberOfLegs: number = 8;
  constructor(theName: string) {
    this.name = theName;
  }
  /* 다음과 같이 선언 시 더 간단하게 구현가능 
    readonly numberOfLegs : number = 8;
    constructor(readonly name : string)*/
}
let dad = new Octopus("Man with the 8 strong legs");
dad.name = "Man with the 3-piece suit"; // err !  name은 읽기 전용
```

// 접근자

```ts
// 타입스크립튼느 getters/setters 지원
const fullNameMaxLength = 10;
class Employee {
  private _fullName: string;

  get fullName(): string {
    return this._fullName;
  }
  set fullName(newName: string) {
    if (newName && nawName.length > fullNameMaxLength) {
      throw new Error("fullName has a max length of " + fullNameMaxLength);
    }
    this._fullName = newName;
  }
}
let employee = new Employee();
employee.fullName = "bob smith";
if (employee.fullName) {
  console.log(employee.fullName);
}
// get set이 없는 접근자는 자동으로 readonly로 유추
```

// 전역 프로퍼티

```ts
// static 사용
// 각 인스턴스는 클래스 이름을 앞에 붙여 이 값에 접근할 수 있음
class Grid {
  static origin = { x: 0, y: 0 };
  calculateDistanceFromOrigin(point: { x: number; y: number }) {
    let xDist = point.x - Grid.origin.x;
    let yDist = point.y - Grid.origin.y;
    return Math.sqrt(xDist * xDist + yDist * yDist) / this.scale;
  }
  constructor(public scale: number) {}
}
let grid1 = new Grid(1.0);
let grid2 = new Grid(5.0);
console.log(grid1.calculateDistanceFromOrigin({ x: 10, y: 10 }));
console.log(grid2.calculateDistanceFromOrigin({ x: 10, y: 10 }));
```

// 추상 클래스

```ts
// 추상 클래스는 직접 인스턴스화 불가능
// abstract 키워드는 추상 클래스 뿐아니라 추상 클래스 내 추상 메소드를 정의하는데 사용된다.
abstract class Animal {
  abstract makeSound(): void;
  move(): void {
    console.log("roaming the earth..");
  }
}
// 추상 클래스 내에서 추상으로 표시된 메소드는 구현을 포함하지 않으며 반드시 파생된 클래스에서 구현되어야함
// 추상메소드는 인터페이스 메소드와 비슷한 문법을 공유. * 둘다 메소드 본문을 포함하지 않고 메소드를 정의
// 그러나 추상 메소드는 반드시 abstract 키워드 포함. 선택적으로 접근 지정자를 포함할 수 있다.

abstract class Department {
  constructor(public name: string) {}
  printName(): void {
    console.log("department name: " + this.name);
  }
  abstract printMeeting(): void; // 반드시 파생된 클래스에서 구현
}
class AccountingDepartment extends Department {
  constructor() {
    super("Accounting and Auditing"); // 파생된 클래스의 생성자는 반드시 super() 호출
  }
  printMeeting(): void {
    console.log("The Accounting Department meets each Monday at 10am.");
  }
  generateReports(): void {
    console.log("Generating accounting reports...");
  }
}
let department: Department; // 추상 타입의 레퍼런스 생성
department = new Department(); // err! 추상클래슨느 인스턴스화 할 수 없음
department = new AccountingDepartment(); // 추상이 아닌 하위 클래스를 생성하고 할당
department.printName();
department.printMeeting();
department.generateReports(); // err! 선언된 추상 타입에 메소드 존재하지 않음
```

```ts
class Greeter {
  static standardGreeting = "hello, there";
  greeting: string;
  greet() {
    if (this.greeting) {
      return "hello, " + this.greeting;
    } else {
      return Greeter.standardGreeting;
    }
  }
}
let greeter1: Greeter;
greeter1 = new Greeter();
console.log(greeter1.greet()); // 'hello, there'

let greeterMaker: typeof Greeter = Greeter;
greeterMaker.standardGreeting = "hey there!";

let greeter2: Greeter = new greeterMaker();
console.log(greeter2.greet()); // 'hey there'
```
