//Coding Q2 - Longest Substring Without Repeating Characters
// Input: s = "abcabcbb"
// Output: 3(substring "abc")

// Input: s = "bbbbb"
// Output: 1(substring "b")

// we need to calculate length of longest substring in ON


function lengthOfLongestSubstring(s){
      let left  =0 ;
      let right=0;
      let maxLength = 0;
      const set = new Set();
      for(let right = 0;right < s.length;right++){
            while(set.has(s[right])){
                  set.delete(s[left]);
                  left++;
            }
            set.add(s[right]);

            maxLength = Math.max(maxLength,right- left+1)

      }
       return maxLength
}
let s = "bbbbb"
const result =  lengthOfLongestSubstring(s);
console.log(result)