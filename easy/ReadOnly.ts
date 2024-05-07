import { UserProps } from "../common/type";

//mappedType
type ReadOnly<T> = {
    readonly [Props in keyof T]: T[Props]
};

const myUser: ReadOnly<UserProps> = {
    id: 1,
    name: "chaos",
    sprite: "image"
}

myUser.name = "change-user";