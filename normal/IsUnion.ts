/**
 * 유니온 타입이란?
 * 타입에 데이터타입에 여러 타입 올수 있는 타입
 * ex) number | string | symbol <-
 */
//조건부 분산에서 string|number가 전달되면 [T]= [string]|[number], [C] = [string|number]로 서로 다르게 처리된다.
//C에 원본 T를 기억
type IsUnion<T, C = T> = T extends C ? ([C] extends [T] ? false : true) : never;


type UnionCase = IsUnion<string>;
type UnionCase2 = IsUnion<string | number>;
type UnionCase3 = IsUnion<string | string>;