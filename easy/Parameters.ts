
// infer를 이용한 타입추론 비교에 사용한 infer키워드는 이 후 조건분기에서 사용가능.
type InputParams<T extends (...args: any[]) => any> = T extends (...args: infer Arg) => any ? Arg : never;


function foo(a: number, b: number, c: string) { }
type CallParams = InputParams<typeof foo>;
