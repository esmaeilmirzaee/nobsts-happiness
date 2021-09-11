function pluck<DataType, KeyType extends keyof DataType>(
    items: DataType[],
    key: KeyType,
): DataType[KeyType][] {
    return items.map((item) => item[key]);
}

let laptops = [
    { model: 'Apple', year: 2019 },
    { model: 'MSI', year: 2016 },
];

console.log(pluck(laptops, 'model'));
console.log(pluck(laptops, 'year'));

interface BaseEvent {
    time: string;
    user: string;
}
interface EventMap {
    addToCard: BaseEvent & { quantity: number; productId: string };
    checkout: BaseEvent;
}

function sendEvent<Name extends keyof EventMap>(
    name: Name,
    data: EventMap[Name],
): void {
    console.log([name, data]);
}

sendEvent('addToCard', {
    productId: '12',
    quantity: 10,
    time: '10',
    user: 'e',
});
sendEvent('checkout', { time: '10', user: 'd' });
