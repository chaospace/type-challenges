
type ModifierKeys = ['cmd', 'ctrl', 'opt', 'fn']

// 배열을 받아서 조합을 이용해 유니온타입 반환
type Combination<T extends string[]> =
  T extends [infer F extends string, ...infer R extends string[]]
  ? `${F} ${R[number]}` | Combination<R>
  : never

type Combs = Combination<ModifierKeys>;