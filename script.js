// complete the given function

const palindromeChecker = (str) => {
  let temp = str.toLowerCase();
  let left = 0
  let right = str.length()-1
  while(left < right) {
	  let char_left = temp.charAt(left)
	  let char_right = temp.charAt(right)
	  if(char_left != char_right) {
		  return false;
	  }
  }
	return true
};
module.exports = palindrome
