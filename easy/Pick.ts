import { UserProps } from "../common/type";
//Lookup타입과 Mapped타입을 이용한 풀이
//keyof T는 유니온으로 사용가능하고 이는 [Key in U]로 순회가 가능
type MyPick<T, U extends keyof T> = {
    [Key in U]: T[Key]
};

type PickUserProps = MyPick<UserProps, "name" | "sprite">