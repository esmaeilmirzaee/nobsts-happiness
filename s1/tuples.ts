type ThreeDCoordinate = [x: number, y: number, z: number];

function add3DCoordinates(
    c1: ThreeDCoordinate,
    c2: ThreeDCoordinate,
): ThreeDCoordinate {
    return [c1[0] + c2[0], c1[1] + c2[1], c1[2] + c2[2]];
}

function state(initial: string): [() => string, (v: string) => void] {
    let innerValue: string = initial;
    return [
        () => innerValue,
        (v: string) => {
            innerValue = v;
        },
    ];
}

function useState(initial: string): [string, (v: string) => void] {
    let val: string = initial;
    return [
        val,
        (v: string) => {
            val = v;
        },
    ];
}

let [time, setTime] = state('10:00');
console.log(time());
setTime('10:00PM');
console.log(time());

let [nam, setNam] = state('Esm');
console.log(nam);
setNam('Mes');
console.log(nam);
