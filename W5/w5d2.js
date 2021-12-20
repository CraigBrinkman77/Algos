const nums1 = [1, 3, 5, 6];
const searchNum1 = 6;
const expected1 = false;

const nums2 = [4, 5, 6, 8, 12];
const searchNum2 = 5;
const expected2 = true;

const nums3 = [3, 4, 6, 8, 12];
const searchNum3 = 3;
const expected3 = true;

// bonus, how many times does the search num appear?
const nums4 = [2, 2, 2, 2, 3, 4, 5, 6, 7, 8, 9];
const searchNum4 = 2;
const expected4 = 4;

/**
 * Efficiently determines if the given num exists in the given array.
 * - Time: O(?).
 * - Space: O(?).
 * @param {Array<number>} sortedNums
 * @param {number} searchNum
 * @returns {boolean} Whether the given num exists in the given array.
 */
function binarySearch(sortedNums, searchNum) {
    let highindex = sortedNums.length - 1
    let lowindex = 0
    while (highindex >= lowindex){
        let middleindex = Math.floor((highindex + lowindex) / 2)
        console.log(middleindex)
        if (sortedNums[middleindex] == searchNum){
            return true;
        }
        else if (sortedNums[middleindex] > searchNum){
            highindex = middleindex - 1;
        }
        else{
            lowindex = middleindex + 1;
        }
}
return false
} 

console.log(binarySearch(nums1,searchNum1))
console.log(binarySearch(nums2,searchNum2))
console.log(binarySearch(nums3,searchNum3))
console.log(binarySearch(nums4,searchNum4))

module.exports = { binarySearch };