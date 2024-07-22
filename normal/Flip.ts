/**
 * Flip<{a:'x', b:'y', c:'z'}> // {x:'a', y:'b', z:'c'} 
 * key value를 바꾸는 타입선언
 * 제네릭 타입에 key를 이용해 접근 가능한 타입입을 알려주기 위해 
 * 확장이 필요한다.
 * 다음으로 key루프에서 as 캐스팅을 통한 변환이 필요.
 */
type Flip<T extends { [x: string]: any }> = {
  [P in keyof T as T[P]]: P
}

type Flip2<T extends Record<string, any>, K extends keyof T = keyof T> = {
  [P in K as T[P]]: P
}

type T10 = Flip2<{ a: 'x', b: 'y', c: 'z' }>