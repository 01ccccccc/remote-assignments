function twoSum(nums, target) {
    // your code here
    let numsIndexes = {};

    for (let i = 0; i < nums.length; i++) {
        let currentDifference = target - nums[i];

        if (numsIndexes[currentDifference] !== undefined && numsIndexes[currentDifference] !== i) {
            return [numsIndexes[currentDifference], i];
        } else {
            numsIndexes[nums[i]] = i;
        }
    }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([2, 3, 4, 5, 7, 11], 9));
console.log(twoSum([1, 2, 3, 4, 6, 7], 8));

// https://blog.techbridge.cc/2017/01/21/simple-hash-table-intro/
// https://levelup.gitconnected.com/how-to-solve-two-sum-in-javascript-d1ebd9dfd3d3
 
// Need to know more about Hash Table

/*
For example:
twoSum([2, 7, 11, 15], 9);
Should returns:
[0, 1]
Because:
nums[0]+nums[1] is 9
*/

/* 
Given an array of integers, return indices of the two numbers such that they add up to a specific target. You may assume that each input would have exactly one solution, and you may not use the same element twice.
*/