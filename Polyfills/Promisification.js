function fetchData(url, callback) {
  // Simulating an asynchronous operation
  // setTimeout(() => {
  //   const data = { result: "Some data from " + url };
  //   callback(null, data);
  // }, 1000);

  setTimeout(() => {
    // Simulating an asynchronous operation
    const errorChance = Math.random(); // Simulating random errors
    if (errorChance < 0.3) {
      // 30% chance of error
      const error = new Error("Failed to fetch data");
      callback(error); // Pass error to the callback
    } else {
      const data = { result: "Some data from " + url };
      callback(null, data); // Pass data to the callback
    }
  }, 1000); // Simulate delay of 1 second
}

// Promisification
function promisify(fn) {
  return function (...args) {
    return new Promise((resolve, reject) => {
      fn(...args, (err, res) => {
        if (err) reject(err);
        else resolve(res);
      });
    });
  };
}

//Normal usage of funtcion without promise

fetchData("https://example.com", (error, result) => {
  if (error) {
    console.error("Error:", error);
  } else {
    console.log("Result:", result);
  }
});

//Promisified Version
const promisifiedFunction = promisify(fetchData);

promisifiedFunction("https://example.com")
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
