//지정된 문자를 삭제하는 타입
//제거 문자인 D타입이 존재하면 재귀를 통해 반복 아니면 원본 리턴
type DropChar<S extends string, D extends string> = S extends `${infer L}${D}${infer R}` ? DropChar<`${L}${R}`, D> : S;

type DropWord = DropChar<" b u t t e r f l y ! ", " ">