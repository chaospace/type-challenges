/**
 * 튜플을 유니온으로 변환
 * Arr=[1,2,3] => 1 | 2 | 3
 */

// infer를 사용하나 그냥 number로 접근하나 결과는 동일
// 문자열은 순서대로 적용이 되는데 숫자의 경우 순서가 변경됨..
type TupleToUnion<T extends readonly unknown[]> = T[number];
type TupleToUnion2<T extends unknown[]> = T extends Array<infer R> ? R : never;

type t10TupleToUnion = TupleToUnion<['1', '2', '3']>
type t11TupleToUnion = TupleToUnion<[1, 2, 3]>
type t21TupleToUnion = TupleToUnion2<[1, 2, 3]>

