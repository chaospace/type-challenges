/**
 * 객체 타입에 내부 접근패스 정보를 반환하는 타입 구성
 * type T2 = ObjectKeyPaths<{
    refCount: number;
    person: { name: string; age: number };
  }>; 
  // expected to be 'refCount' | 'person' | 'person.name' | 'person.age'

  type T3 = ObjectKeyPaths<{ books: [{ name: string; price: number }] }>; 
  // expected to be the superset of 'books' | 'books.0' | 'books[0]' | 'books.[0]' 
                                    | 'books.0.name' | 'books.0.price' | 'books.length' | 'books.find'

 */

/* type Keys<O, IsTop, K extends string | number> = IsTop extends true
  ? K | (O extends unknown[] ? `[${K}]` : never)
  : `.${K}` | (O extends unknown[] ? `[${K}]` | `.[${K}]` : never)

type ObjectKeyPaths<T, IsTop = true, K extends keyof T = keyof T> = K extends string | number
  ? `${Keys<T, IsTop, K>}${'' | (T[K] extends object ? ObjectKeyPaths<T[K], false> : '')}` : never;


type T10ObjectKeyPaths = ObjectKeyPaths<{ refCount: number, person: { name: string, age: number } }>
type T11ObjectKeyPaths = ObjectKeyPaths<{ books: [{ name: string, price: number }] }> */

//키 접근에 관해 닷 추가 여부 판단을 위해 최상위 객체인지 아닌지 판단할 무엇인가가 필요하다.
type Keys<O, K extends string | number> = K | (O extends unknown[] ? `[${K}]` : never);
type Loop<T, K extends keyof T = keyof T> =
  K extends string | number
  ? `${Keys<T, K>}${'' | (T[K] extends object ? Loop<T[K]> : never)}`
  : never
type info = { ref: number, person: { name: string, age: number } };
type aa = Loop<info>






