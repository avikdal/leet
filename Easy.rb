# You are given two integer arrays nums1 and nums2, sorted in non-decreasing order, and two integers m and n, representing the number of elements in nums1 and nums2 respectively.
# Merge nums1 and nums2 into a single array sorted in non-decreasing order.
# The final sorted array should not be returned by the function, but instead be stored inside the array nums1. To accommodate this, nums1 has a length of m + n, where the first m elements denote the elements that should be merged, and the last n elements are set to 0 and should be ignored. nums2 has a length of n.

# //JAVASCRIPT
# var merge = function(nums1, m, nums2, n) {
#     // Merge the two arrays
#     nums1.splice(m, n, ...nums2);
 
#     // Sort the merged array
#     nums1.sort((a, b) => a - b);  
# };

#  RUBY
#  slice!(index) → obj or nil
#  slice!(start, length) → new_ary or nil
#  slice!(range) → new_ary or nil
#  Deletes the element(s) given by an index (optionally up to length elements) or by a range.
#  Returns the deleted object (or objects), or nil if the index is out of range.


def merge(nums1, nums2, m, n)
    # Merge the two arrays
    nums1.slice!(m, nums1.length - m)
    nums1.concat(nums2)

    # sort the merged array
    nums1.sort!

end