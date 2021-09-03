interface Coordinate {
    x: number;
    y: number;
}
function parseCoordinateFromObject(obj: Coordinate): Coordinate {
    return { ...obj };
}
function parseCoordinateFromNumbers(x: number, y: number): Coordinate {
    return { x, y };
}

function parseCoordinates(obj: Coordinate): Coordinate;
function parseCoordinates(x: number, y?: number): Coordinate;
function parseCoordinates(x: string): Coordinate;

function parseCoordinates(arg1: unknown, arg2?: unknown) {
    let coord: Coordinate = {
        x: 0,
        y: 0,
    };
    if (typeof arg1 === 'string') {
        arg1.split(',').forEach((str) => {
            let [k, v] = str.trim().split(':');
            coord[k as 'x' | 'y'] = parseInt(v, 10);
        });
    } else if (typeof arg1 === 'object') {
        return { ...(arg1 as Coordinate) };
    } else {
        return { x: arg1 as number, y: arg2 as number };
    }

    return coord;
}

console.log(parseCoordinates({ x: 10, y: 20 }));
console.log(parseCoordinates(30, 40));
console.log(parseCoordinates('x:50, y:60'));
