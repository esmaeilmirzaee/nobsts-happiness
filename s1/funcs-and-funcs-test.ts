import { arrayMutate, printToFile } from './funcs-and-funcs';

printToFile('lorem', () => console.log('ipsum'));
let response = arrayMutate([1, 2, 3], (v) => v * 10);
console.log(response);
