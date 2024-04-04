let numbers = [2, 3, 13, 18, -5, 38, -10, 11, 0 ,104];

let evens = [];
let odds = [];

for (const number of numbers) {
    if (number % 2 === 0) {
        evens.push(number);
    } else {
        odds.push(number);
    }
}
console.log(evens);
console.log(odds);