// 인풋 args추가 타입 ...args를 스프레드 연산자로 이용하는 것이 핵심.
type AppendArgs<Fn extends (...args: any[]) => any, A> = Fn extends (...args: infer U) => infer R ? (...args: [...U, A]) => R : never;


const tempFunc = (a: number, b: string) => 'ㅊ';

type fooResult = AppendArgs<typeof tempFunc, boolean>;