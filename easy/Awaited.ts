//일반적인 await처리
type MyAwaited<T> = T extends Promise<infer R> ? R : T;

//중복된 promise처리
type AdvancedAwaited<T> = T extends Promise<infer R> ? AdvancedAwaited<R> : T;


type NestedReq = Promise<Promise<number>>;
type NormalData = MyAwaited<Promise<string>>;
type WrongNestedData = MyAwaited<NestedReq>;
type OkNestedData = AdvancedAwaited<NestedReq>;
