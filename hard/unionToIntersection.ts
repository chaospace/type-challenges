/**
 * type I = UnionToIntersection<'foo' | 42 | true> // expected to be 'foo' & 42 & true
 */


type UnionToIntersection<T> = (T extends any ? (_: T) => void : never) extends (_: infer I) => void ? I : never;


type answer = UnionToIntersection<1 | 2 | 3 | 4>;