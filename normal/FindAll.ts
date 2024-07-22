
/**
 * 패턴 문자열 P, 전체문자열 T
 * T에 포함된 문자열 P의 모든 인덱스를 찾아서 리턴하는 findAll타입 만들기
 */

import { ListLength } from "../common/type";

/**
 * 추론을 통해 문자열에 매칭을 쉽게 찾을 수 있음.
 * `${infer Value}${P}${infer Rest}` 시작 글자가 매칭될 경우 Value는 빈 문자열이 된다.
 */
type findAll<T extends string, P extends string, C extends any[] = []> =
  T extends `${infer Value}${P}${infer Rest}`
  ? findAll<`${Value}_${Rest}`, P, [...C, ListLength<Value>]> : C;



type T10FindAll = findAll<'chaospacec', 'c'>
type T10Match = ListLength<[1, 2]>


