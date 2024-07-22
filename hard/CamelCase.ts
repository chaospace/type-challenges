/**
 * _로 이어진 문자열을 카멜케이스로 만드는 타입 만들기
 * ex)
 * camelCase = CamelCase<'hello_world_with_types'> // helloWorldWithTypes
 * 추론을 통해 어디까지 문자를 찾아낼 것인지가 핵심..
 */

type Split = '_';

// 전달문자에 대소문자 여부를 판단 후 구분자를 기준으로 첫글자를 추론한다.
type CamelCase<T extends string> = T extends Uppercase<T>
  ? CamelCase<Lowercase<T>>
  : T extends `${infer F}${Split}${infer RF}${infer R}` ? `${F}${Uppercase<RF>}${CamelCase<R>}`
  : T



/** 
 * 처리를 위해 진해해야 할 단계
 * 1. _를 기준으로 문자열을 나눔.
 * 2. 나뉜 문자열에 첫 글자와 다른 문자열로 구분.
 * 3. 첫글자는 대문자, 나머지는 소문자 적용
 * 4. 재귀를 돌며 반복
 * 체크사항
 *  - 첫 문자열에는 대소문자 전환이 필요없다.
 *  - split 문자
 */
type t10CamelCase = CamelCase<'hello_world_with_types'>
type t30CamelCase = CamelCase<'HELLO_WORLD_WITH_TYPES'>
