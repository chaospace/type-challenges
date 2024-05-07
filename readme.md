# 타입스크립트 스터디
 - type challenges를 보며 모르고 사용한 타입스크립트 개념탑재를 위한 스터디  
- [type-challenges 리스트](https://ghaiklor.github.io/type-challenges-solutions/ko/)  
## 스터디를 통해 깨달은 점.
 - Generic타입을 조건부 분배와 재귀를 통해 많은 타입고민을 해결할 수 있다.
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