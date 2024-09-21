const obj = { oldKey: 1, nested: { oldKey: 2 } };

function renameKey(obj, oldKey, newKey) {
  function search(obj) {
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        // If the current key matches oldKey, rename it
        if (key === oldKey) {
          obj[newKey] = obj[oldKey];
          delete obj[oldKey];
        }
        // If the value is an object, continue searching recursively
        else if (typeof obj[key] === "object" && obj[key] !== null) {
          search(obj[key]);
        }
      }
    }
  }

  search(obj);
  console.log(obj);
}

// Example usage
renameKey(obj, "oldKey", "newKey");
