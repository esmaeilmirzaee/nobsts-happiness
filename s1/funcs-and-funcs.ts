export function printToFile(text: string, callback: () => void) {
    console.log(text);
    callback();
}

export type MutateFunction = (v: number) => number;

export const arrayMutate = (numbers: number[], mutate: MutateFunction) => {
    return numbers.map(mutate);
};

type AdderFunctionType = (value: number) => number;

export const createAdder = (num: number): AdderFunctionType => {
    return (val: number) => val + num;
};
