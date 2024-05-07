/**
 * PromiseAll 함수 선언
 */
// 듀플타입으로 전달된 promise내부를 순회하며 개별 타입을 체크해 리턴타입을 결정
declare function PromiseAll<T extends unknown[]>(args: T): Promise<{
    [P in keyof T]: T[P] extends Promise<infer R> ? R : T[P]
}>

//배열 타입도 { P in Type }을 통해 순회할 수 있다.
type TypePromiseAll<Fn extends unknown[]> = {
    [P in keyof Fn]: Fn[P] extends Promise<infer R> ? R : Fn[P]
}

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise<string>((resolve, _) => {
    setTimeout(resolve, 100, "foo");
})


type ArrToTuple<T extends unknown[]> = {
    [P in keyof T]: T[P] extends number ? number : T[P] extends string ? string : T[P]
}
//const arr = [1, 2, "d"]
type eee = ArrToTuple<[1, 2, "d"]>

const p = PromiseAll([promise1, promise2, promise3]);
type promiseAllType = TypePromiseAll<[Promise<10>, 10, Promise<"cc">]>;