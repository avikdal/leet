 //You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.

// Merge nums1 and nums2 into a single array sorted in non-decreasing order.

// The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

var merge = function(nums1, m, nums2, n) {
    // Merge the two arrays
 nums1.splice(m, n, ...nums2);
 
 // Sort the merged array
 nums1.sort((a, b) => a - b);  
};




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

// Given an array nums of size n, return the majority element.
// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.


var majorityElement = function(nums) {
    let count = 0;
   let candidate = null;

   for (let num of nums) {
       if (count === 0) {
           candidate = num;
       }

       count += (num === candidate) ? 1 : -1;
   }

   return candidate;
};