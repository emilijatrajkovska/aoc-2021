const { input } = require("../input/day2");

function getMultiplicationValue(array) {
    const results = array.reduce((prev, curr) => {
        const newReducedValue = prev;

        if (curr.includes("forward")) {
            newReducedValue.horizontal += getSplitNumberValue(curr, "forward");
        } else if (curr.includes("down")) {
            newReducedValue.depth += getSplitNumberValue(curr, "down");
        } else {
            newReducedValue.depth -= getSplitNumberValue(curr, "up");
        }

        return newReducedValue;
    }, {
        horizontal: 0,
        depth: 0
    });

    return results.horizontal * results.depth;
}

function getSplitNumberValue(stringInput, splitValue) {
    return parseInt(stringInput.split(splitValue)[1]);
}

const result = getMultiplicationValue(input);
console.log(result);