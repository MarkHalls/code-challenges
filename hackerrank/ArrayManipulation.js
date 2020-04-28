// https://www.hackerrank.com/challenges/crush

// n is the length of the array, queries is the list of operations
function arrayManipulation(n, queries) {
  // query format [ [ 1, 2, 100 ], [ 2, 5, 100 ], [ 3, 4, 100 ] ]
  const arr = [];

  // Populate arr with zeroes
  for (let i = 0; i < n; i++) {
    arr.push(0);
  }

  const maxValue = queries.reduce((acc, query) => {
    // query format
    // [ 1, 2, 100 ]
    // [startIndex, endIndex, valueToAdd]

    const [startIndex, endIndex, valueToAdd] = query;

    for (let i = startIndex; i <= endIndex; i++) {
      arr[i - 1] += valueToAdd;
      if (arr[i - 1] > acc) {
        acc = arr[i - 1];
      }
    }
    return acc;
  }, 0);

  //   const maxValue = Math.max(...arrayToSum);
  return maxValue;
}

function arrayManipulation2(n, queries) {
  // expanding instruction sets into their own arrays

  const arr = [];

  // Populate arr with zeroes
  for (let i = 0; i < n; i++) {
    arr.push(0);
  }

  queries.map((query) => {
    // query format
    // [ 1, 2, 100 ]
    // [startIndex, endIndex, valueToAdd]

    const [startIndex, endIndex, valueToAdd] = query;

    for (let i = startIndex; i <= endIndex; i++) {
      arr[i - 1] += valueToAdd;
    }
  });

  const maxValue = Math.max(...arr);
  return maxValue;
}
