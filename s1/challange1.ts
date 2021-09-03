import houses from './houses.json';

interface HouseType {
    name: string;
    planets: string[] | string;
}

interface HouseWithId extends HouseType {
    id: number;
}

function findHouses(
    houses: string | HouseType[],
    filter?: (house: string) => boolean,
): HouseWithId[] {
    let input = typeof houses === 'string' ? JSON.parse(houses) : houses;

    return filter
        ? input.filter(filter)
        : input.map((house: HouseType) => ({
              id: input.indexOf(house),
              ...house,
          }));
}

console.log(
    findHouses(JSON.stringify(houses)),
    ({ name }: HouseType) => name === 'Ateriods',
);

console.log(
    findHouses(houses, ({ name }: HouseType | any) => name === 'Harkonnen'),
);
