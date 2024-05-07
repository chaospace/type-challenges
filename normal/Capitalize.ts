
//특정 문자만 변경하고 싶다면 별도 타입을 지정해 사용한다.
interface CapitalizeChars {
    f: "F",
    s: "S"
}

type MyCapitalize<S extends string> =
    S extends S["length"]
    ? S extends `${infer F}${infer Rest}`
    ? `${Uppercase<F>}${Rest}` : S
    : S;
type SpecificCapitalize<S extends string>
    = S extends `${infer F}${infer Rest}`
    ? `${F extends keyof CapitalizeChars ? CapitalizeChars[F] : F}${Rest}` : S;

type hellCapitalize = MyCapitalize<"hello">;
type hellCapitalize1 = MyCapitalize<"h">;
type hellCapitalize2 = MyCapitalize<"">;
type specificHello = SpecificCapitalize<"choa">;
type specificHello2 = SpecificCapitalize<"fhoa" | "ssoa">;
