/**
 * objectEntries 구현
 * 
 * ObjectEnties<Model> // ['name', string] | ['age', number] | ['location', string[]|null ];
 */

interface Model {
  name: string;
  age: number;
  locations: string[] | null
}

// type EE = Required<{name?:4}>

// key, value형태로 만든 후 키에 해당하는 값만 반환 하도록 처리
type ObjectEntries<T extends { [key: string]: any }> = {
  [K in keyof T]: [K, T[K]]
}[keyof T]

type t10ObjEntries = ObjectEntries<Model>;