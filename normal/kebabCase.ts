//camelCase or pascalCase를 kebabCase로 변환
// 대문자와 이전문자를 구분할 수 있을까?
type KebabCase<S extends string> =
    S extends `${infer H}${infer T}`
    ? T extends Uncapitalize<T>
    ? `${Uncapitalize<H>}${KebabCase<T>}`  // 뒤에 문자가 소문자일 경우 재귀호출
    : `${Uncapitalize<H>}-${KebabCase<T>}` // 뒤에 문자가 대문자일 경우 kebab전환을 위한 처리 적용하며 뒤에 문자열 재귀호출
    : S;

type FooBarBaz = KebabCase<"FooBarBaz">;
type FooBarBaz2 = KebabCase<"onCompleteList">;

const foobarbaz: FooBarBaz = "foo-bar-baz";

type DoNothing = KebabCase<"do-nothing">;
const doNothing: DoNothing = "do-nothing";