
type EndWith<T extends string, U extends string> = T extends U ? true : T extends `${any}${infer R}` ? EndWith<R, U> : false;
// any를 통해 모든 문자열과 매칭처리하며 ${}${U}로 지정된 문자로 끝나는지를 체크한다.
type AdvanceEndWith<T extends string, U extends string> = T extends `${any}${U}` ? true : false;

type EndWithA = AdvanceEndWith<"abc", "abc">;
type EndWithB = AdvanceEndWith<"abc", "bc">;
type EndWithC = AdvanceEndWith<"abc", "d">;