const str = "hello this is javascript";

console.log(
  str
    .split(" ")
    .map((v) => v.split("").reverse().join(""))
    .join(" ")
);
