
type Unshift<T extends unknown[], U> = [U, ...T];

type UnshiftList = Unshift<[1, 2], 0>;