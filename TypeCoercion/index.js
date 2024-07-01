// 1. Adding an array and an object
console.log([] + {}); // '[object Object]'
// [] = '' , {} = [onject Object] hence

// 2. Adding null and a number
console.log(null + 1); // 1
// null -> 0, 0+1 = 1

// 3. Adding a number and an array
console.log(1 + [2]); // '12'
// [2] => '2'. 1+'2' = '12'

// 4. Subtracting a number from a string
console.log("5" - 1); // 4

// 5. Multiplying two strings
console.log("5" * "2"); // 10

// 6. Subtracting one string from another
console.log("5" - "2"); // 3

// 7. Comparing an array with the negation of another array
console.log([] == ![]); // true
// [] => '', ![] will convert to boolean Boolean of [] is true and !true is false
// '' converts to 0 and false converts to 0 hence true

// 8. Comparing an array with false
console.log([] == false); // true
// []-> '' -> 0

// 9. Comparing a string 'false' with the boolean false
console.log("false" == false); // false
// "false" to Number is NaN, //NaN == false is false

// 10. Comparing a string 'true' with the boolean true
console.log("true" == true); // false
// "true" is NaN

// 11. Adding an array and a boolean false
console.log([] + false); // 'false'
//[] is ''

// 12. Adding a boolean true and an array
console.log(true + []); // 'true'

// 13. Dividing a string by another string
console.log("10" / "2"); // 5

// 14. Subtracting one string from another
console.log("10" - "2"); // 8

// 15. Comparing a number with an array
console.log(0 == []); // true

// 16. Comparing a number with an object
console.log(0 == {}); // false

// 17. Comparing a string '0' with the number 0
console.log("0" == 0); // true

// 18. Adding two boolean true values
console.log(true + true); // 2

// 19. Adding a boolean false and a number
console.log(false + 1); // 1

// 20. Comparing undefined with null
console.log(undefined == null); // true
