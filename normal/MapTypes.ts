
/**
 * MapTypes<T,R>
 * T에 있는 속성타입을 R에 있는 정보로 변경하는 타입구성
 * R을 mapFrom, mapTo에 변경할 타입정보를 전달.
 */


type StringToNumber = {
  mapFrom: string;
  mapTo: number;
}

type StringToDate = {
  mapFrom: string;
  mapTo: Date;
}

type MapTypes<T extends Record<string, any>, R extends { mapFrom: any, mapTo: any }> = {
  [K in keyof T]: T[K] extends R['mapFrom'] ? R['mapTo'] : T[K]
}

type t10MapTypes = MapTypes<{ iWillBeStay: boolean, iWillBeANumberOneDay: string }, StringToNumber>;

// union 전달
type t11MapTypes = MapTypes<{ iWillBeStay: boolean, iWillBeANumberOneDay: string }, StringToNumber | StringToDate>;


