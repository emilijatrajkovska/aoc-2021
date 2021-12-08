const { input } = require("../input/day3");

function getMultiplicationOfGammaAndEpsilon(array) {
    let gammaRate = "";
    let epsilonRate = "";

    const matrix = getInputMatrix(array);

    for (const row of matrix) {
        const numberOfZeroBits = row.filter(x => x.includes("0")).length;
        const numberOfOneBits = row.length - numberOfZeroBits;

        gammaRate += numberOfZeroBits > numberOfOneBits ? "0" : "1";
        epsilonRate += numberOfZeroBits > numberOfOneBits ? "1" : "0";
    }

    return parseInt(gammaRate, 2) * parseInt(epsilonRate, 2);
}

function getInputMatrix(array) {
    const n = array[0].length;
    const matrix = [];

    for (let i = 0; i < n; i++) {
        matrix[i] = [];
    }

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < n; j++) {
            const bitsArray = array[i].split("");
            matrix[j][i] = bitsArray[j];
        }
    }

    return matrix;
}

const result = getMultiplicationOfGammaAndEpsilon(input);
console.log(result);