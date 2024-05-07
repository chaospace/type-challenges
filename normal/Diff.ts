// 유니온 key를 반복하며 공통키인 경우 제외처리
type Diff<T, U> = {
    [P in keyof T | keyof U as P extends keyof T & keyof U ? never : P]
    : P extends keyof T ? T[P]
    : P extends keyof U ? U[P]
    : never;
}

type DiffSampleA = {
    name: string;
    age: string;
}

type DiffSampleB = {
    name: string;
    age: string;
    gender: number;
}

type DiffResult = Diff<DiffSampleA, DiffSampleB>;