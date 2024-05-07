type Concat<T extends unknown[], U extends unknown[]> = [...T, ...U];


type MyList = Concat<["A", "B"], ["D"]>