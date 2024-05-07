
//length를 리턴할 거라 기대하지만 안됨
type LengthOfString<S extends string> = S["length"];

// 문자길이를 참조하기 위해 A타입에 빈 문자열 배열 타입 추가
type AdLengthOfString<S extends string, A extends string[]>
    = S extends `${infer H}${infer T}`
    ? AdLengthOfString<T, [H, ...A]> // 배열에 한자씩 추가하며 재귀호출
    : A["length"]; // 문자에 마지막은 A에 length속성 반환

type helloLength = LengthOfString<"hello">;
type helloLength2 = AdLengthOfString<"hello", []>;