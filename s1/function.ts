export const addNumbers = (n1: number, n2: number): number => {
    return n1 + n2;
};

export const addStrings = (str1: string, str2: string): string => {
    return `${str1} ${str2}`;
};

export const salute = (introduce: string, ...names: string[]): string =>
    `${introduce} ${names.join(' ')}`;

export const getName = (user: { first: string; last: string }): string =>
    `${user?.first ?? 'first'} ${user?.last ?? 'last'}`;
