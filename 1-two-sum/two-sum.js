/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = new Map(); // value -> index

    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];

        // If complement exists, we found the answer
        if (map.has(complement)) {
            return [map.get(complement), i];
        }

        // Store current number with its index
        map.set(nums[i], i);
    }
};
