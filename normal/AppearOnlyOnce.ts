
/**
 * 중복되지 않은 요소만 반환하는 타입 구성
 * [1,2,2,3,3,4,5,6,6,6] => [1,4,5]
 * 배열 값 체크는 Value extends T[number] 로 가능.
 */

// infer를 이용해 배열에 첫번째 원소와 나머지를 분리하는게 핵심.
// 이후 Store에 현재값에 존재여부를 extends로 체크하고 추가여부를 결정.
type OnlyOnce<T extends any[], Store extends any[] = []> =
  T extends [infer Value, ...infer Rest]
  ? Value extends Store[number] ? OnlyOnce<Rest, Store> : [Value, ...OnlyOnce<Rest, [Value, ...Store]>]
  : []

type T10OnlyOnce = OnlyOnce<[1, 1, 1, 2, 2, 2, 3, 4, 5, 6, 6, 6]>;
