import { UserProps } from "../common/type";

// |를 이용한 분산 타입
type ToArray<Type> = Type extends any ? Type[] : never;
type ArrayM = ToArray<number | string>;
// 분산처리를 피하고 싶다면 타입을 []로 감싼다.
type UnionType<Type> = [Type] extends [any] ? Type[] : never;
type M = UnionType<string | number>;

//조건부 타입에 분산을 이용하는게 핵심.
type MyExclude<T, U> = T extends U ? never : T;
// mapped타입을 이용해 타입에 특정 키 제거 처리
type ExcludeByKey<T, U extends keyof T> = {
    [Property in keyof T as Property extends U ? never : Property]: T[Property]
};


type ExcludeName = MyExclude<keyof UserProps, "name">;
type ExcludeStateKey = ExcludeByKey<UserProps, "name">;
