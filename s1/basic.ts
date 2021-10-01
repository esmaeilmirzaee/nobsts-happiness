const PI: number = 3.1415;
const user: string = 'Earth';
const isHoliday: boolean = true;

interface Person {
    name: string;
    age: number;
}

let me: Person = { name: 'E', age: 25 };
console.log(me.name, me.age);
