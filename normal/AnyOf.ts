/**
 * 배열에 원소가 모두 거짓이면 false, 그렇지 않으면 true를 전달
 * 값이 빈 타입이라는 것을 어떻게 체크할 까 모든 것을 비교해서 판단하나..?
 */

type EmptyObj<T> = T extends { [key: string]: never } ? true : false;
type EmptyList<T> = T extends [] ? true : false;

type AnyOf<T extends unknown[]> = T[number] extends 0 | '' | false | [] | { [key: string]: never } ? false : true;

type t1EmptyObj = EmptyObj<{}>;
type t10EmptyObj = EmptyObj<{ name: 2 }>;

type t20AnyOf = AnyOf<[0, false, {}, '', [2]]>;

type t21EmptyList = EmptyList<[]>
type t22EmptyList = EmptyList<[2]>