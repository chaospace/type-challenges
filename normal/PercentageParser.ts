/**
 * 정규식에 매칭하는 요소를 분리해 반환
 * /^(\+|\-)?(\d*)?(\%)?$/
 * 순서는 plus or minus, number, unit
 * 안쓰는 infer는 any로 대체
 */

// 앞에 기호를 추론해 리턴
type parsePlusMinus<S extends string> = S extends `${infer H}${any}`
    ? H extends "-" | "+"
    ? H : ""
    : "";
// 맨뒤에 %와 매칭되는 순간 "%" 리턴
type parsePercent<S extends string> = S extends `${any}%` ? "%" : "";
type parseNum<S extends string> = S extends `${parsePlusMinus<S>}${infer N}${parsePercent<S>}`
    ? N
    : "";
type PercentageParser<S extends string> = [parsePlusMinus<S>, parseNum<S>, parsePercent<S>];

type R1 = PercentageParser<"">
type R2 = PercentageParser<"+85%">;