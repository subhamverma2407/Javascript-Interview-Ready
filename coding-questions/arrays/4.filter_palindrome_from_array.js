const arr = ["radar", "hello", "level", "world", "madam", "bba", "racecar"];

console.log(arr.filter((v) => v.split("").reverse().join("") === v));
