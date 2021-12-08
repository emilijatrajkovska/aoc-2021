const { input } = require("../input/day3");

function getGasGeneratorRating(array, gasType) {
    let binaryNumberIndex = 0;
    
    while (binaryNumberIndex < array[0].length) {
        if (array.length === 1)
            return parseInt(array[0], 2);

        const arrayOfZeros = [];
        const arrayOfOnes = [];

        for (let i = 0; i < array.length; i++) {
            const bitsArray = array[i].split("");

            if (bitsArray[binaryNumberIndex] === "0") {
                arrayOfZeros.push(array[i]);
            } else {
                arrayOfOnes.push(array[i]);
            }
        }
        
        if (gasType === "oxygen")
            array = arrayOfZeros.length > arrayOfOnes.length ? arrayOfZeros : arrayOfOnes;
        else
            array = arrayOfZeros.length > arrayOfOnes.length ? arrayOfOnes : arrayOfZeros;

        binaryNumberIndex++;
    }

    return parseInt(array[0], 2);

}

const oxygenRating = getGasGeneratorRating(input, "oxygen");
const c02Rating = getGasGeneratorRating(input, "c02");
console.log(oxygenRating * c02Rating);
