
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

export {
    UserProps,
    ReadOnlyProps
}