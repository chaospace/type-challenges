
// T가 문자 혹은 숫자일 경우를 나눠서 처리할 필요가 있음.
// 아니면 `${T}`를 이용해 input을 모두 문자열 처럼 다루면 -는 항상 제거가능 하지만 리턴이 문자열로 고정됨.
type Absolute<T extends number | string | bigint> = `${T}` extends `-${infer N}` ? N : T;

type minus = -100;
type minustring = 100;
type absoluteValue = Absolute<minus>;
type absoluteValue2 = Absolute<minustring>;
