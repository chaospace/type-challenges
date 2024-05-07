import { UserProps } from "../common/type"

// T에서 K키를 제외한 타입리턴
// as를 이용한 리맵핑을 이용해 제외 키를 가져오는게 핵심
type MyOmit<T, K extends keyof T> = {
    [P in keyof T as P extends K ? never : P]: T[P];
}

type OmitUser = MyOmit<UserProps, "id" | "sprite">