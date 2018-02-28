"use strict";

/**
 * Accepts string SMILE notation and returns longest possible chain
 * @param input
 * @returns {number}
 */
exports.getLongestChain = function (input = '') {
    const parsed = input.split('');
    const endVertices = getEndVertices(parsed);
    let longestChain = 0;

    //Parse all termination index permutations
    for (let i = 0; i < endVertices.length; i++) {
        let current = 0;

        //Parse array to a specific termination index
        for (let j = 0; j < endVertices[i]; j++) {
            if (parsed[j] === 'C') {
                current++;
            }

            if (parsed[j] === ')') {
                //Traces backwards until the first closing terminal point, marks visited nodes as null
                for (let k = j; j > 0; k--) {
                    if (parsed[k] === '(') {
                        parsed[k] = null;
                        break;
                    }
                    parsed[k] = null;
                }
            }
        }

        if (current > longestChain) longestChain = current;
    }

    console.log('%s has longest chain of %s', input, longestChain);
    return longestChain;
};

/**
 * Find all termination index for end vertices
 * @param parsed
 * @returns {Array}
 */
function getEndVertices(parsed) {
    const endVertices = [];

    parsed.forEach((item, index) => {
        if (item === ')') {
            endVertices.push(index + 1);
        }
    });

    if (!endVertices[parsed.length]) endVertices.push(parsed.length);
    return endVertices;
};


