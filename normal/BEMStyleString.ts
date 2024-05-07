/**
 * 블록, 엘리먼트, 모디파이어 방법론(BEM) css에서 인기 있는 클래스 네이밍 방법 중 하나.
 * ex)
 * block => btn
 * element => price
 * modifier => warning
 * bem => btn__price--warning
 */

type BemBlock<B extends string> = `${B}`; //입력된 B를 문자열로 반환

type BemElement<E extends string[]> = E[number] extends never ? '' : `__${E[number]}`;

type BemModifier<M extends string[]> = M[number] extends never ? '' : `--${M[number]}`;

type BEM<B extends string, E extends string[], M extends string[]> = `${BemBlock<B>}${BemElement<E>}${BemModifier<M>}`;

type buttonBem = BEM<'btn', [], ['warning']>;