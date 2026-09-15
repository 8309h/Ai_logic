// Input: nums = [1, 2, 3]
// Output: [1, 3, 2]

// Input: nums = [3, 2, 1]
// Output: [1, 2, 3]


function nextPermutation(nums) {
      let n = nums.length;
      let i = n - 2;
      while (i >= 0 && nums[i] >= nums[i + 1]) {
            i--;

      }
      if (i >= 0) {
            let j = n - 1;
            while (nums[j] <= nums[i]) {
                  j--;
            }
            [nums[i], nums[j]] = [nums[j], nums[i]];
      }
     
      let left = i+1;
      let right=n-1;

      while(left<right){
            [nums[left],nums[right]]= [nums[right],nums[left]]
            left++;
            right--;
      }
}
let nums = [1,2,3]
nextPermutation(nums)
console.log(nums);