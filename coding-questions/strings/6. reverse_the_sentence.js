function reverseWords(str) {
  // Helper function to reverse a portion of the string in place
  function reverse(arr, start, end) {
    while (start < end) {
      const temp = arr[start];
      arr[start] = arr[end];
      arr[end] = temp;
      start++;
      end--;
    }
  }

  // Convert the string to an array of characters
  const arr = str.split("");

  // Step 1: Reverse the entire string
  reverse(arr, 0, arr.length - 1);

  // Step 2: Reverse each word in the reversed string
  let start = 0;
  for (let end = 0; end <= arr.length; end++) {
    if (end === arr.length || arr[end] === " ") {
      reverse(arr, start, end - 1);
      start = end + 1;
    }
  }

  // Convert the array of characters back to a string
  return arr.join("");
}

const str = "the sky is blue";
console.log(reverseWords(str)); // Output: "blue is sky the"
