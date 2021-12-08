const { input } = require("../input/day2");

function getMultiplicationValue(array) {
    const results = array.reduce((prev, curr) => {
        const newReducedValue = prev;

        if (curr.includes("forward")) {
            const inputNumberValue = getSplitNumberValue(curr, "forward");
            newReducedValue.horizontal += inputNumberValue;

            if (prev.aim > 0)
                newReducedValue.depth += inputNumberValue * prev.aim;
        } else if (curr.includes("down")) {
            newReducedValue.aim += getSplitNumberValue(curr, "down");
        } else {
            newReducedValue.aim -= getSplitNumberValue(curr, "up");
        }

        return newReducedValue;
    }, {
        horizontal: 0,
        depth: 0,
        aim: 0
    });

    return results.horizontal * results.depth;
}

function getSplitNumberValue(stringInput, splitValue) {
    return parseInt(stringInput.split(splitValue)[1]);
}

const result = getMultiplicationValue(input);
console.log(result);