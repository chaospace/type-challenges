import { ReadOnlyProps } from "../common/type"

type Mutable<T> = {
    -readonly [P in keyof T]: T[P];
}


type editableUser = Mutable<ReadOnlyProps>