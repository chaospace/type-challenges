/**
 * Math.Trunc 타입 만들기
 * 소수점 아래는 잘라버리는 12.34 => 12
 *
 */

type Trunc<T extends string | number> = `${T}` extends `${infer F}.${infer _}` ? F : T;
type TruncLast<T extends string | number> = `${T}` extends `${infer _}.${infer L}` ? TruncLast<L> : T;
type t10Trunc = Trunc<'12.34.433'>;
type t10TruncLast = TruncLast<'12.34.433'>;
// type t11Trunc = Trunc<'12.34'>;