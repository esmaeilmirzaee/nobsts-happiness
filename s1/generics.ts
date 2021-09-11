function useStateGeneric<T>(initial: T): [() => T, (value: T) => void] {
    let innerValue: T = initial;
    return [() => innerValue, (v: T) => (innerValue = v)];
}

let [username, setUsername] = useStateGeneric('es');
console.log(username());
setUsername('se');
console.log(username());

let [age, setAge] = useStateGeneric(23);
console.log(age());
setAge(43);
console.log(age());

/** Ranker */
interface Rank<RankerItem> {
    item: RankerItem;
    rank: number;
}

function ranker<RankerItem>(
    items: RankerItem[],
    rank: (item: RankerItem) => number,
): RankerItem[] {
    const ranks: Rank<RankerItem>[] = items.map((item) => ({
        item,
        rank: rank(item),
    }));
    ranks.sort((a, b) => a.rank - b.rank);

    return ranks.map((rank) => rank.item);
}

interface Pokemon {
    name: string;
    hp: number;
}

const pokemons: Pokemon[] = [
    { name: 'Balbasour', hp: 40 },
    { name: 'Megasour', hp: 10 },
];

const ranks = ranker(pokemons, ({ hp }) => hp);
console.log(JSON.stringify(ranks));
