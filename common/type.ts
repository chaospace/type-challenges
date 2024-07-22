
interface UserProps {
    name: string;
    id: number;
    sprite: string;
}

interface ReadOnlyProps {
    readonly id: number;
    readonly name: string;
    readonly complete: boolean;
}

type ListLength<T extends { length: number }, L extends unknown[] = []> =
    T extends `${infer _}${infer R}`
    ? ListLength<R, [_, ...L]>
    : T extends [infer _, ...infer R] ? ListLength<R, [_, ...L]> : L['length']

export {
    UserProps,
    ReadOnlyProps,
    ListLength
}