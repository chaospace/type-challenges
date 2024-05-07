
// 배열에 값은 T[number]로 접근가능
type TupleToObject<T extends readonly PropertyKey[]> = {
    [K in T[number]]: K
}


//as const처리에 따라 타입도 값으로 설정.
const tuple = ['tesla', 'model 4'] as const;
const first = tuple[0];
type tupleObject = TupleToObject<typeof tuple>