
// mappedTyep에 키 정보를 T|K를 이용해 유니온으로 적용
type AppendToObject<T, K extends string, V> = {
    // P가 T에 있으면 T[P] 아니면 V로 타입지정
    [P in keyof T | K]: P extends keyof T ? T[P] : V
};

type AppendObjTest = { id: 1 };

type AppendObjTestResult = AppendToObject<AppendObjTest, "value", 4>;