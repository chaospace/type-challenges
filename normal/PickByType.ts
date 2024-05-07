
type PickByType<T, U> = {
    // T[P] 가 U타입이 아니면 제외
    [P in keyof T as T[P] extends U ? P : never]: U
}

type OnlyBoolean = PickByType<{
    name: string,
    count: number,
    isEnable: boolean
}, boolean>;