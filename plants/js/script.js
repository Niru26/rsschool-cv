function convertToString(num) {
    let string = num + '';
    return `'${string}'`;
}

console.log(convertToString(67));
console.log(typeof (convertToString(-213)));