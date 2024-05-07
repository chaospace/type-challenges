
// T[number]는 유니온형식 a|b|c이라 extends U는 조건이 항상 false, U extends T[number]로 해야 조건 인식 가능.
type Includes<T extends unknown[], U> = U extends T[number] ? true : false;

type isPillarMen = Includes<['Kars', 'Esidisi', 'Wamuu'], 'ae'> // false