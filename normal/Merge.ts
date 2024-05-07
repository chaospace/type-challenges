// 타입을 merge 
// U에 속성타입을 우선하기 위해 조건에서 먼저 체크
type Merge<T, U> = {
    [P in keyof T | keyof U]: P extends keyof U
    ? U[P]
    : P extends keyof T
    ? T[P]
    : never;
}



type MergeR = Merge<{ name: string, age: string }, { sex: number, age: number }>;