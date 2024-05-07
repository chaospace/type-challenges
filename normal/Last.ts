// spread연산자를 이용해 마지막과 이전 요소를 구분
// 문자열에 분산조건 처럼 접근하지 않아도 됨.
type Last<T extends any[]> = T extends [...infer H, infer L] ? L : never;

type tail1 = Last<[1, 2, 3]>;
type tail3 = Last<["a", "c", "d"]>;
type tail2 = Last<[]>;