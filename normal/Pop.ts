/**
 * Pop타입
 */

type Pop<T extends unknown[]> = T extends [...infer H, any] ? H : never;

type pop1 = Pop<["a", "b", "c"]>;
type pop2 = Pop<[3, 2, 1]>;
type pop3 = Pop<[]>;