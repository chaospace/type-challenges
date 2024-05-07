# 타입스크립트 스터디
 - type challenges를 보며 모르고 사용한 타입스크립트 개념탑재를 위한 스터디  
- [type-challenges 리스트](https://ghaiklor.github.io/type-challenges-solutions/ko/)  
## 스터디를 통해 깨달은 점.
 - Generic타입을 조건부 분배와 재귀를 통해 많은 타입고민을 해결할 수 있다.
 - [literal template](https://www.typescriptlang.org/docs/handbook/2/template-literal-types.html)을 잘 이용하는게 중요. 
  ```typescript
   // 앞에 기호를 추론해 리턴
   type parsePlusMinus<S extends string> = S extends `${infer H}${any}`
      ? H extends "-" | "+"
      ? H : ""
      : "";
   // 맨뒤에 %와 매칭되는 순간 "%" 리턴
   type parsePercent<S extends string> = S extends `${any}%` ? "%" : "";
   type parseNum<S extends string> = S extends `${parsePlusMinus<S>}${infer N}${parsePercent<S>}`
      ? N
      : "";
   type PercentageParser<S extends string> = [parsePlusMinus<S>, parseNum<S>, parsePercent<S>];
  ```
 - 불필요한 infer는 any로 대체 가능하다.
 - never타입은 타입 할달 불가하며 이를 위해 타입을 []로 감쌀 필요가 있다.
    ```typescript
     [type] extends [never]
    ```
 - 배열타입도 객체와 같이 요소에 접근가능.
   ```typescript
      type TypePromiseAll<T extends unknown[]> = {
         [P in keyof T]: T[P] extends Promise<infer R> ? R : T[P]      
      }

      type allResult = TypePromiseAll<[Promise.resolve(10), 30, Promise.resolve("chaos")]>
   ```