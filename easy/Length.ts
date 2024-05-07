
// 타입에 해당 속성이 있음을 기본타입으로 지정 후 바로 해당 속성을 리턴
type Length<T extends { length: number }> = T["length"];

type tesla = ['tesla', 'model3', 'model x', 'model y'];

type teslaLength = Length<tesla>;