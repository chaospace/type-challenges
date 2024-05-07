//
type Flatten<T> =
    T extends [] ? []  // T가 빈배열이면 []리턴
    : T extends [infer H, ...infer T] // 배열일 경우, 시작원소와 나머지를 나눔
    ? [...Flatten<H>, ...Flatten<T>]  // 앞, 나머지 배열을 Flatten으로 반복. 이때 ...Flatten을 이용해 단일 [T]리턴 값에 배열을 제거
    : [T]; // 아닌 경우 단일 듀플 리턴 여기서 리턴한 []는 앞에서 ...Flattern으로 제거


type FloatSample = Flatten<[[[[[[3]]]]]]>;