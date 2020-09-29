
exports.min = function min (array) {
  if (!array || !array.length) {
    return 0;
  }

  let minNum = array[0];

  array.forEach((item, idx) => {
  for (let i = idx; i < array.length; i++) {
      if (array[i] < minNum) {
          minNum = array[i];
      }
    }
  });
  return minNum;
};

exports.max = function max (array) {
  if (!array || !array.length) {
    return 0;
  }

  let maxNum = array[0];

  array.forEach((item, idx) => {
    for (let i = idx; i < array.length; i++) {
        if (array[i] > maxNum) {
            maxNum = array[i];
        }
    }
  });
  return maxNum;
}

exports.avg = function avg (array) {
  if (!array || !array.length) {
    return 0;
  }

  let sum = array.reduce((acc, item) => acc + item);
  return sum/array.length;
}
