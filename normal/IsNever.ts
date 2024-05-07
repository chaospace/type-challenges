// never는 어떤 타입에도 할당 불가능, []듀플을 이용해 never를 가진 타입인지 체크는 가능. 
type IsNever<T> = [T] extends [never] ? true : false;

type isNeverA = IsNever<never>;
type isNeverB = IsNever<undefined>;
type isNeverC = IsNever<[]>;