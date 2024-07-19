/**
 * 문자열에 양옆 공백을 제거하는 trim타입 만들기
 */


type TrimLeft<T extends string> = T extends ` ${infer _}` ? TrimLeft<_> : T;
type TrimRight<T extends string> = T extends `${infer _} ` ? TrimRight<_> : T;

type Trimmed<T extends string> =
  T extends ` ${infer L}` ? Trimmed<L>
  : T extends `${infer R} ` ? Trimmed<R>
  : T;

/** | 연산을 통해 두가지를 동시에 비교할 수 잇음 */
type Space = ' ' | '\t' | '\n';
type Trimmed2<T extends string> = T extends `${Space}${infer R}` | `${infer R}${Space}` ? Trimmed<R> : T;


type t10TrimLeft = TrimLeft<'   Hello!   '>
type t10TrimRight = TrimRight<'Hello!   '>
type t10Trimed = Trimmed<'   Hello!      '>
type t10Trimed2 = Trimmed2<'   Hello!      '>
