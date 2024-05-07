// 타입선언 기본정보 저장을 위한 O를 초기화
// 타입지정을 비워두면 tsc는 추론을 통해 가져온다.
type Chainable<O = {}> = {
    option<K extends string, V>(key: K, value: V): Chainable<O & { [P in K]: V }>,
    get(): O;
}


declare const config: Chainable;
const result = config
    .option("foo", 123)
    .option("name", "type-challenges")
    .option("bar", { value: "hello world" })
    .get();