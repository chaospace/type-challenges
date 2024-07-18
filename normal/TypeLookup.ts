/**
 * type필드를 기분으로 해당 타입을 반환하는 타입만들기
 * 
 * interface Cat {
 *  type:'cat'
 * }
 * interface Dog {
 *  type:'dog'
 * }
 * 
 * type MyDogType = LookUp<Cat|Dog, 'dog'> // Dog
 * 
 * breeds : 품종
 */

interface Cat {
  type: 'cat'
  breeds: 'Abyssinian' | 'Shorthair' | 'Curl' | 'Bengal'
}

interface Dog {
  type: 'dog'
  breeds: 'Hounds' | 'Brittany' | 'Bulldog' | 'Boxer'
  color: 'brown' | 'white' | 'black'
}

type Lookup<T, U> = T extends { type: string } ? T['type'] extends U ? T : never : never;

/**
 * {
 *  dog:Dog,
 *  cat:Cat
 * }
 */
// 객체형식으로 만들고 key로 접근해 반환처리
type LookupProto<T, U extends string> = {
  [K in U]: T extends { type: U } ? T : never
}

type Lookup2<T, U extends string> = LookupProto<T, U>[U];

type MyDog = Lookup<Cat | Dog, 'cat'>;
type MyPetProto = LookupProto<Cat | Dog, 'dog'>;
type MyDog2 = Lookup2<Cat | Dog, 'dog'>;
