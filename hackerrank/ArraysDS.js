// https://www.hackerrank.com/challenges/arrays-ds/problem
// Complete the reverseArray function below.
function reverseArray(a) {
  return a.reverse();
}

function reverseArray(a) {
  const newArr = [];
  while (a.length > 0) {
    newArr.push(a.pop());
  }
  return newArr;
}
