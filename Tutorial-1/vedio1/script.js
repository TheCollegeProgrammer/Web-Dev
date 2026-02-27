// let arr = [1, 2, 3, 4, 5];
// let sum = arr.reduce((acc, val) => acc + val, 0);
// console.log(`The sum of the array is: ${sum}`);


// function greet(val) {
//     alert(`Hello ${val}, welcome to my website!`);
// }
// greet('John');
//Create a closure counter function
function createCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    }
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
console.log(counter());
