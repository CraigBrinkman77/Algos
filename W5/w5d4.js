/* 
  Given an int to represent how much change is needed
  calculate the fewest number of coins needed to create that change,
  using the standard US denominations
*/

const cents1 = 25;
const expected1 = { quarter: 1 };

const cents2 = 50;
const expected2 = { quarter: 2 };

const cents3 = 9;
const expected3 = { nickel: 1, penny: 4 };

const cents4 = 99;
const expected4 = { quarter: 3, dime: 2, penny: 4 };

/**
 * Calculates the fewest coins of the standard American denominations needed
 *    to reach the given cents amount.
 * - Time: O(?).
 * - Space: O(?).
 * @param {number} cents
 * @param {string} sick
 * @returns {Object<string, number>} - A denomination table where the keys are
 *    denomination names and the value is the amount of that denomination
 *    needed.
 */
function fewestCoinChange(cents) {
    frequencyCounter = {'quarter' : Math.floor(cents / 25),
                        'dime' : Math.floor((cents % 25)/10),
                        'nickle' : Math.floor(((cents % 25)%10)/5),
                        'penny' :  (((cents % 25)%10)%5)/1
}
return frequencyCounter
}
function fewestValues(cents){
    frequencyCounter = {}
    if (Math.floor(cents / 25)){
        frequencyCounter.quarter = Math.floor(cents / 25)
    }
    if (Math.floor((cents % 25)/10)){
        frequencyCounter.dime = Math.floor((cents % 25)/10)
    }
    if (Math.floor(((cents % 25)%10)/5)){
        frequencyCounter.nickel = Math.floor(((cents % 25)%10)/5)
    }
    if ((((cents % 25)%10)%5)/1){
        frequencyCounter.penny = (((cents % 25)%10)%5)/1
    }
    return frequencyCounter

}
console.log(fewestValues(cents1))
console.log(fewestValues(cents2))
console.log(fewestValues(cents3))
console.log(fewestValues(cents4))

console.log(fewestCoinChange(cents1));
console.log(fewestCoinChange(cents2))
console.log(fewestCoinChange(cents3))
console.log(fewestCoinChange(cents4))

module.exports = { fewestCoinChange };