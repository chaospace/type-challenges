
//
type First<T> = T extends unknown[] ? T[0] : never;
// 빈 배열 체크를 안한 상태.
type NormalFirst<T extends unknown[]> = T[0];

//빈 배열일 경우 never 아니면 첫 번재 타입 리턴
type AdvanceFirst<T extends unknown[]> = T extends [] ? never : T[0];
// 빈 배열 체크를 never로 할 수도 있음.
type OtherFirst<T extends unknown[]> = T[number] extends never ? never : T[0];



type arr = [1, 2, 3];
type arr2 = ['a', 'b', 'c'];



type First1 = First<arr> //1
type FirstB = First<arr2> //a
// 빈 배열에 대한 조건부 처리는 안된 상태라 undefined를 반환
type FirstEmptyA = First<[]>
// 배열아닌 타입 지정 시 경고를 노출
type FirstEmptyNonArry = AdvanceFirst<number>
type EmptyNormal = AdvanceFirst<[]>
type OtherEmpty = OtherFirst<[]>
type OtherFirst2 = OtherFirst<arr>