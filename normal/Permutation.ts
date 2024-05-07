// 순열 타입
// 조건부 분산처리에 의해 분할 재귀가 
type Permutation<T extends string, C = T> = [T] extends [never]
    ? []
    : C extends infer U
    ? [U, ...Permutation<Exclude<T, U>>]
    : [];

type Uni<T extends unknown[]> = [T] extends [never] ? never : T[number];
type T3<T> = T[] extends number ? 'yes' : T[]; // 변경된 타입은 분산 적용 안됨.
type T2<T> = T extends number ? T[] : "no"     // 리턴이 변경된 타입이고 입력 T는 제네릭으로 그대로 사용 분산 적용.
//type T5 = T3<(1 | 2 | 4)>;
//type T25 = T2<(1 | 2 | 4)>;
type UnionTest<T extends unknown> = T extends infer U ? [U] : T;
type T25 = UnionTest<1 | 2 | 4>;

// ['A', 'B', 'C'] | ['A', 'C', 'B'] | ['B', 'A', 'C'] | ['B', 'C', 'A'] | ['C', 'A', 'B'] | ['C', 'B', 'A']

// type AAE = Uni<["A", "B"]>;
// 유니온으로 주어진 타입을 이용해 순열 처리
type permu = Permutation<"A" | "B" | "C">;