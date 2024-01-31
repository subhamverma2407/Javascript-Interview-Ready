function fetchData(url, callback) {
  // Simulating an asynchronous operation
  setTimeout(() => {
    const data = { result: "Some data from " + url };
    callback(null, data);
  }, 1000);
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
