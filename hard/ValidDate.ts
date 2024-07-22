/**
 * 월일 유효성 체크타입 구성
 * 월일 타입을 구성후 exclude를 이용해 모든 달을 조합하는게 핵심.
 */

type Num = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
type MM = `0${Num}` | `1${0 | 1 | 2}`;

type AllDate =
  `${MM}${`${0}${Num}` | `${1}${0 | Num}` | `${2}${0 | Exclude<Num, 9>}`}`
  | `${Exclude<MM, '02'>}${29 | 30}`
  | `${Exclude<MM, '02' | '04' | '06' | '09' | '11'>}${31}`;