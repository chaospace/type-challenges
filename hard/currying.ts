/**
 * 커링 타입 구성하기
 * 
 * const add = (a:number, b:number) => a+b
 * const three = add(1,2);
 * 
 * const curriedAdd = Currying(add);
 * const five = curriedAdd(2)(3)
 */

//타입에서 요구하는 것은 결국 전달되는 함수에 파라미터를 재귀를 통해 커링타입을 구현하는 것.
type Curry<P, R> = P extends [infer F, ...infer Rest]
  ? (a: F) => Curry<Rest, R>
  : R

declare function currying<F>(fn: F): F extends (...P: infer A) => infer R ? Curry<A, R> : never;

const add = (a: number, b: number) => a + b;

const curryiedAdd = currying(add);

const a = curryiedAdd(3)(4);
