 //You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
// Merge nums1 and nums2 into a single array sorted in non-decreasing order.
// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.
//JAVASCRIPT
var merge = function(nums1, m, nums2, n) {
    // Merge the two arrays
    nums1.splice(m, n, ...nums2);
 
    // Sort the merged array
    nums1.sort((a, b) => a - b);  
};

// RUBY
// slice!(index) → obj or nil
// slice!(start, length) → new_ary or nil
// slice!(range) → new_ary or nil
// Deletes the element(s) given by an index (optionally up to length elements) or by a range.
// Returns the deleted object (or objects), or nil if the index is out of range.



// def merge(nums1, nums2, m, n)
//     // Merge the two arrays
//     nums1.slice!(m, nums1.length - m)
//     nums1.concat(nums2)

//     //sort the merged array
//     nums1.sort!

// end 




//  Given an integer array nums and an integer val, remove all occurrences of val in nums in-place. The order of the elements may be changed. Then return the number of elements in nums which are not equal to val.
// Consider the number of elements in nums which are not equal to val be k, to get accepted, you need to do the following things:
// Change the array nums such that the first k elements of nums contain the elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

var removeElement = function(nums, val) {
    let k = 0; // Pointer to the current element
    for (let j = 0; j < nums.length; j++) {
        if (nums[j] !== val) {
            nums[k] = nums[j];
            k++;
        }
    }
    return k;
};

function removeElementCopy(nums, val){
    let k =0; //pointer to the current element
    for (let j = 0; j < nums.length; j++){
        if (nums[j] !== val){
            nums[k] = nums[j];
            k++;
        }
    }
    return k;
};

// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.


var majorityElement = function(nums) {
    // iterate through nums
    // have count for each uniq element and for each element in arr add to count
    // return element with highest count
            // let count = 0;
            // let candidate = null;

            // for (let num of nums) {
            //     if (count === 0) {
            //         candidate = num;
            //     }

            //     count += (num === candidate) ? 1 : -1;
            // }

            // return candidate;

    let countMap = {};

    for (let num of nums) {
        countMap[num] = (countMap[num] || 0) + 1;
            //  countMap[num]: This part retrieves the current count of the number num in the countMap. If num is not already a key in countMap, it will return undefined.
            // (countMap[num] || 0): This part is using the logical OR (||) operator. If countMap[num] is undefined (which means num is not yet present in the countMap), it evaluates to 0. Otherwise, if countMap[num] has a value (i.e., countMap[num] is truthy), it keeps that value unchanged.
            // (countMap[num] || 0) + 1: This part increments the value obtained from step 2 by 1. If num is not yet present in the countMap, it starts the count at 1.
            // So, in summary, the line countMap[num] = (countMap[num] || 0) + 1; is effectively updating the count of num in the countMap, ensuring that it starts from 1 if num is encountered for the first time.
        if (countMap[num] > nums.length / 2) {
            return num;
        }
    }

    // If no majority element found, you might handle this case as per your requirement.
    // In this implementation, it's assumed that a majority element always exists.
};







// Given an array of nums. We define a running sum of an array as runningSum[i] = sum(nums[0]...nums[i]). Return the running sum of nums.
// Example: 
    //input: nums = [1, 2, 3, 4]
    //output: [1, 3, 6, 10]
    //explanation: Running sum is obtined as follows: [1, 1+2, 1+2+3, 1+2+3+4]

    var runningSum = function(nums){
        // create new array of nums
        let newNumsArray = new Array(nums.length)
        // inidex 0 will be the same for nums and newNumsArray
        newNumsArray[0] = nums[0]
        //iterate through nums array starting at 1,adding previous elements to current element and make it the current iindex of newNumsArray
        for( let i = 1; i < nums.length; i++){
            //add previous element of newNums to current element of nums
            newNumsArray[i] = newNumsArray[i-1] + nums[1]
        }
    }
