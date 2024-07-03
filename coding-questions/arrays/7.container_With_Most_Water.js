const maxArea = function (height) {
  let maximumArea = -Infinity;
  let i = 0;
  let j = height.length - 1;
  while (i < j) {
    const minHeight = Math.min(height[i], height[j]);
    const width = j - i;
    const area = minHeight * width;
    if (area > maximumArea) {
      maximumArea = area;
    }
    height[i] > height[j] ? j-- : i++;
  }
  return maximumArea;
};

console.log(maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7])); // 49
