// Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. The relative order of the elements should be kept the same.
// Since it is impossible to change the length of the array in some languages, you must instead have the result be placed in the first part of the array nums. More formally, if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. It does not matter what you leave beyond the first k elements.
// Return k after placing the final result in the first k slots of nums.

// Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

// Custom Judge:
// The judge will test your solution with the following code:
// int[] nums = [...]; // Input array
// int[] expectedNums = [...]; // The expected answer with correct length
// int k = removeDuplicates(nums); // Calls your implementation
// assert k == expectedNums.length;
// for (int i = 0; i < k; i++) {
//     assert nums[i] == expectedNums[i];
// }
// If all assertions pass, then your solution will be accepted.

 
// Example 1:
// Input: nums = [1,1,1,2,2,3]
// Output: 5, nums = [1,1,2,2,3,_]
// Explanation: Your function should return k = 5, with the first five elements of nums being 1, 1, 2, 2 and 3 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).


var removeDuplicates = function(nums) {
    // Edge case: If the array has 0 or 1 elements, no duplicates to remove.
   if (nums.length <= 1) {
       return nums.length;
   }

   // Initialize variables to keep track of the current index and count of duplicates.
   let currentIndex = 1; // We start from the second element.
   let duplicateCount = 1; // The first occurrence of any element.

   // Loop through the array starting from the second element.
   for (let i = 1; i < nums.length; i++) {
       // Check if the current element is equal to the previous one.
       if (nums[i] === nums[i - 1]) {
           // Increment the duplicate count.
           duplicateCount++;

           // Check if the duplicate count is less than or equal to 2.
           if (duplicateCount <= 2) {
               // If yes, update the array at the currentIndex and move to the next index.
               nums[currentIndex] = nums[i];
               currentIndex++;
           }
       } else {
           // If the current element is different from the previous one, reset duplicate count to 1.
           duplicateCount = 1;

           // Update the array at the currentIndex and move to the next index.
           nums[currentIndex] = nums[i];
           currentIndex++;
       }
   }

   // The length of the modified array is given by the currentIndex.
   return currentIndex;
};