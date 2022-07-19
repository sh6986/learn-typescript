// function logMessage(value: any) {
//   console.log(value);
// }

// logMessage("hello");
// logMessage(100);

// 유니온 타입 : 하나의 타입 이상 쓸수 있게 해주는 것

var seho: string | number | boolean;
// 타입 가드 : 특정 타입으로 타입의 범위를 좁혀나가는(필터링하는)과정
function logMessage(value: string | number) {
  if (typeof value === "number") {
    value.toLocaleString();
  }

  if (typeof value === "string") {
    value.toString();
  }
  throw new TypeError("value must be string or number");
}

logMessage("hello");
logMessage(100);

interface Developer {
  name: string;
  skill: string;
}

interface Person {
  name: string;
  age: number;
}

// function askSomeone(someone: Developer | Person) {
//   // 공통된 속성만 접근가능. 타입 가드를 이용하면 특정 타입(인터페이스)의 속성에 접근 가능하다
//   someone.name;
// }
// askSomeone({ name: "디벨로퍼", skill: "웹 개발" });
// askSomeone({ name: "캡틴", age: 100 });

function askSomeone(someone: Developer & Person) {
  // 인터섹션 : Developer의 속성과 Person의 속성을 모두 갖는 타입
  // 추가적인 타입가드 처리가 별도로 필요하지 않다.
  someone.name;
  someone.skill;
  someone.age;
}

askSomeone({ name: "디벨로퍼", skill: "웹 개발", age: 33 });

// var seho: string | number | boolean;
// var capt: string & number & boolean;
