const { input } = require("../input/day1");

function getNumberOfIncrements(array) {
    let counter = 0;

    for (let i = 1; i <= array.length; i++) {
        if (array[i] > array[i-1]) {
            counter++;
        }
    }
    
    return counter;
}

const result = getNumberOfIncrements(input);
console.log(result);