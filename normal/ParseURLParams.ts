
/**
 * 패스 파람을 리턴하는 타입구성
 * 
 * ex)
 * :id => id
 * posts/:id => id
 * posts/:id/:user // id | user
 * 
 * 구분자를 어떻게 사용하는게 가장 깔끔할까?
 */

type ParamPattern = ':';
type ParamEndPattern = '/:';
type GetParam<T extends string> = T extends `${infer _}${ParamEndPattern}${infer L}`
  ? L extends `${infer _}${ParamEndPattern}${infer L}` ? _ : L : T


type ParseUrlParams<T extends string, Params extends string[] = []> =
  T extends `${infer _}${ParamPattern}${infer R}${ParamEndPattern}${infer L}`
  ? ParseUrlParams<`${ParamPattern}${L}`, [...Params, R]>
  : [...Params, T extends `${infer _}${ParamPattern}${infer R}` ? R : never][number]


type t10ParseUrlParams = ParseUrlParams<':id'>;
type t30ParseUrlParams = ParseUrlParams<'posts/:id/:num/:user'>;