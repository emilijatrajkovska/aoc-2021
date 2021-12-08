const { input } = require("../input/day1");

function getSlidingWindowNumberOfIncrements(array) {
    let counter = 0;
    let previousSum;

    for (let i = 0; i <= array.length-3; i++) {
        let sum = 0;

        for (let j = i; j <= i+2; j++) {
            sum += array[j];
        }
        
        if (previousSum && sum > previousSum)
            counter++;

        previousSum = sum;
    }

    return counter;
}

const result = getSlidingWindowNumberOfIncrements(input);
console.log(result);