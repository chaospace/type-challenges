
//숫자를 직접 제어하는 타입은 없으므로 튜플을 이용해 주어진 숫자에 도달할 때까지 재귀를 이용해 unknown값을 채움.
type Counter<T extends number, L extends unknown[] = []> = L["length"] extends T ? L : Counter<T, [...L, unknown]>;
type MinusOne<T extends number> = Counter<T> extends [...infer L, unknown] ? L["length"] : never;

type MinusZero = MinusOne<1>;
type Minus2 = MinusOne<10>;