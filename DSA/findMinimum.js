
let nums = [4, 5, 6, 7, 0, 1, 2]
// Output: 1

// Input: nums = [4, 5, 6, 7, 0, 1, 2]
// Output: 0


function findMin(nums){

      let left =0;
      let right = nums.length -1;
       while(left <right){
            const mid = Math.floor((left+right)/2);

            if(nums[mid] > nums[right]) {
                  left = mid+1;

            }else {
                  right = mid;
            }
       }
       return nums[left];
}

console.log(findMin(nums))