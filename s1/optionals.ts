function printIngredients(qty: string, ing: string, extra?: string) {
    console.log(`${qty} ${ing} ${extra ? extra : ''}`);
}

printIngredients('1c', 'flour');
printIngredients('1c', 'flour', 'beer');

interface User {
    name: string;
    info?: {
        email: string;
    };
}

function getEmail(user: User): string {
    if (user.info) {
        return user.info.email!;
    }

    return '';
}

function getEmailEasy(user: User): string {
    return user?.info?.email ?? '';
}

console.log(getEmail({ name: 'E' }));
console.log(getEmailEasy({ name: 'E' }));
console.log(getEmail({ name: 'E', info: { email: 'e@e.co' } }));
console.log(getEmail({ name: 'E', info: { email: 'e@e.co' } }));

function addWithCallback(x: number, y: number, callback?: () => void) {
    console.log([x, y]);
    callback?.();
}
