# Two Sum (JavaScript)

A straightforward JavaScript solution for the classic **Two Sum** algorithmic problem. Given an array of integers `nums` and an integer `target`, this function returns the indices of the two numbers such that they add up to `target`.

## Problem Statement

Given an array of integers `nums` and an integer `target`, return the indices of the two numbers such that they add up to `target`.

- You may assume that each input would have **exactly one solution**, and you may not use the same element twice.
- You can return the answer in any order.

## Approach

This implementation uses a **Brute Force** nested-loop approach:
1. Iterate through the array with pointer `i` to select the first number.
2. Iterate through the remaining elements with pointer `j` (starting at `i + 1`) to select the second number.
3. Check if `nums[i] + nums[j] === target`. If true, immediately return `[i, j]`.

## Code

```javascript
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    for (let i = 0; i <= nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) return [i, j];
        }
    }
};
```

> **Note:** In the outer loop condition (`i <= nums.length`), using `i < nums.length` (or `i < nums.length - 1`) is slightly cleaner so `i` does not reach out-of-bounds indices if no pair is found.

## Complexity Analysis

- **Time Complexity:** $O(n^2)$ — For each element in the array of size $n$, we potentially scan the rest of the array, leading to roughly $\frac{n(n-1)}{2}$ comparisons.
- **Space Complexity:** $O(1)$ — No extra data structures are used; memory usage remains constant regardless of input size.

## Usage Example

```javascript
const nums = [2, 7, 11, 15];
const target = 9;

console.log(twoSum(nums, target)); 
// Output: [0, 1] (because nums[0] + nums[1] == 2 + 7 == 9)
```