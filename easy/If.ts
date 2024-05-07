
// 조건처리
type If<C extends boolean, T, F> = C extends true ? T : F;

type TrueA = If<true, "a", "b">;
type FalseB = If<false, "a", "b">;
