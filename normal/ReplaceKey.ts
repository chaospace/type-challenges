/**
 * union type의 키를 대체하는 replaceKeys를 구현하세요.
 * 일부 유형에 해당 키가 존재하지 않으면 대체하지 않는다.
 * 인자를 세 개를 받는다.
 */

type ReplaceKeys<T, K extends string, S> = {
    // P extends조건을 두번 사용하지 않으면 never 조건을 처리하기 어렵다.
    [P in keyof T]: P extends K ? (P extends keyof S ? S[P] : never) : T[P]
}

type NodeA = {
    type: "A",
    name: string,
    flag: number
}
type NodeB = {
    type: "B",
    id: number,
    flag: number
}
type NodeC = {
    type: "C",
    name: string,
    flag: number
}

type ReplaceNode = NodeA | NodeB | NodeC;

type ReplaceResulst = ReplaceKeys<ReplaceNode, "name" | "flag", {
    name: number, flag: string
}>;
type ReplaceResulst2 = ReplaceKeys<ReplaceNode, "name", {
    aa: number
}>;
const ae: ReplaceResulst = { type: "A", name: 100, flag: "30" }
// const ae2: ReplaceResulst2 = { type: "C", name: "", flag: 30 };


