type DeepReadOnly<T> = {
    //T[P]가 Record<string, unknown> = object를 상속한 경우 재귀처리
    readonly [P in keyof T]: T[P] extends {} ? DeepReadOnly<T[P]> : T[P];
}


type X = {
    x: {
        a: 1,
        b: "hi"
    },
    y: "hey"
};

type ReadOnlyX = DeepReadOnly<X>;

const a: ReadOnlyX = {
    x: {
        a: 1,
        b: "hi"
    },
    y: "hey"
};

a.x.b = "dd"