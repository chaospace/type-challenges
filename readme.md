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

      //
      type R2 = PercentageParser<"+85%">;
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

### never타입에 의미
 - 어떤 값도 가질 수 없는 빈 타입
   - 제네릭 및 함수에서 허용되지 않는 파라미터
   - 호환되지 않는 타입 교차
   - 빈 유니언 타입( 유니언 했지만 아무것도 안되는 경우 )


__부분적으로 구조적 타이핑을 허용하지 않는 용도__
```typescript
type VariantA = {
  a: string;
  b?: never;
}

type VariantB = {
  b: number,
  a?: never
}

declare function fn(arg: VariantA | VariantB): void;
fn({ a: 'foo', b: 123 }); //속성 타입에 never를 적용해 유니온 타입에서 사용을 금지

```
__함수 호출 후 호출자에게 제어권을 주지 않고 바로 반환__
```typescript
function throwError():never {
  throw new Error();
}
let foo:string|undefined;
//throwError리턴타입이 never가 아니라면
//checkFoo는 string|void 타입으로 추론됨.
const checkFoo  = foo ?? throwError(); //string
```
