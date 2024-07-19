/**
 * PartialByKeys<T, K>
 * K는 옵셔널하며 T의 프로퍼티로 이루어진 유니언 타입 지정가능.
 * K를 제공하지 않는다면 Partial<T>와 같이 모든 프로퍼티를 옵셔널하게 만들어 제공
 * 
 * 직접 키를 순회하며 구성해도 되지만 기본제동 타입인 Pick, Omit을 이용하면 한결 쉽다.
 */

type Copy<T> = Pick<T, keyof T>
/**
 * Copy로 감싸는 이유는 ?
 * 타입스크립트는 실제 사용되기 전에는 추론하지 않는다.
 * Copy를 이용해 명시적으로 '이 타입을 사용 합니다'라고 알려주는 역할
 */
type PartialByKeys<T, K extends keyof T = keyof T> = Copy<{
  [P in keyof T as P extends K ? P : never]?: T[P]
} & Omit<T, K>>

// 옵셔널 제거
type RequireByKeys<T, K extends keyof T = keyof T> = {
  [P in K]-?: T[P]
}

// Pick을 이용한 방법
type PartialByKeys2<T, K extends keyof T = keyof T> = Copy<
  Partial<Pick<T, K>> & Omit<T, K>
>

type TFoo<T, K extends keyof T = keyof T> = K & keyof T;

type t10Partial = PartialByKeys2<{ name: 'cc', age: 20 }, 'age'>
type E = TFoo<{ name: 'd', age: 3 }, 'age'>
// type t20Require = RequireByKeys<t10Partial>;