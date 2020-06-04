function removeKthLinkedListNode(head, k) {
  // take in the current node, its next value and the counter
  const recurseRemove = (prevNode, currentNode) => {
    if (currentNode === null) {
      return 0;
    }
    const counterFromTail = recurseRemove(currentNode, currentNode.next) + 1;

    // if counter equal to k, update prev.next to equal current.next (removes node we are on)
    if (
      counterFromTail === k ||
      (prevNode === head && counterFromTail + 1 === k)
    ) {
      if (prevNode === head) {
        head = prevNode.next;
      } else {
        prevNode.next = currentNode.next;
      }

      return counterFromTail;
    }

    return counterFromTail;
  };

  recurseRemove(head, head.next);
  return head;
}

//************************************************************************************************************************************* */

function balancedBrackets(string) {
  const validBrackets = new Set(["[", "]", "(", ")", "{", "}", "|"]);
  const openBracket = new Set(["[", "(", "{", "|"]);
  const closeBracket = {
    "]": "[",
    ")": "(",
    "}": "{",
    "|": "|",
  };

  const bracketStack = [];

  const stringArr = [...string];

  // edge case
  if (stringArr.length <= 1) {
    return false;
  }

  // reduce to T/F
  const checkBrackets = stringArr.reduce((acc, character) => {
    // if acc is ever false, we have a mismatch so keep returning false
    if (!acc || !validBrackets.has(character)) {
      return acc;
    }

    if (character === "|") {
      if (
        bracketStack.length > 0 &&
        bracketStack[bracketStack.length - 1] === character
      ) {
        bracketStack.pop();
        return acc;
      } else {
        bracketStack.push(character);
        return acc;
      }
    } else if (openBracket.has(character)) {
      bracketStack.push(character);
      return acc;
    } else {
      const lastCharacter = bracketStack.pop();
      if (closeBracket[character] != lastCharacter) {
        return false;
      }
      return acc;
    }
  }, true);

  if (bracketStack.length === 0) {
    return checkBrackets;
  } else {
    return false;
  }
}

//********************************************************************************************************* */

function threeNumberSum(arr, target) {
  //return an array of arrays
  // sub arrays should be ordered in ascending order
  // sub arrays should contain 3 values that sum to the target
  // sub arrays possible values are within arr
  // re-using values is OK for other sub arrays

  // so if we take the target and begin subtracting values in the array from it, if we ever reach 0, we have found a sub array
  // naive solution will be 3 nested loops
  // for each index, we pull the value out and loop over the values in the remaining array, pulling out a value and checking if the       remaining values will sum to the target

  // once we remove an item from the outermost array and check everything is sums with we can discard it since there we'll have               found all combinations it works with.
  const output = [];

  // recursively find all combinations that add up to the target
  const findSubArrays = (currentValue = null, arr) => {
    if (arr.length < 2) {
      return;
    }

    for (const secondValue of arr) {
      for (const thirdValue of arr) {
        if (secondValue !== thirdValue) {
          if (currentValue + secondValue + thirdValue === target) {
            const subArr = [currentValue, secondValue, thirdValue].sort(
              (first, second) => first - second
            );
            output.push(subArr);
          }
        }
      }
    }

    findSubArrays(arr.pop(), arr);
  };

  const currentValue = arr.pop();

  findSubArrays(currentValue, arr);

  const checkArraysEqual = (arr1, arr2) => {
    for (var i = 0; i < arr1.length; ++i) {
      if (arr1[i] !== arr2[i]) {
        return false;
      }
    }
    return true;
  };

  if (output.length === 1) {
    return output;
  }
  console.log(output);
  const filteredOutput = output.reduce((acc, subArray) => {
    if (acc.length === 0) {
      return [subArray];
    }

    let alreadyContains = false;

    for (const accSubArr of acc) {
      if (alreadyContains) {
        return acc;
      }

      alreadyContains = checkArraysEqual(accSubArr, subArray);
    }

    if (!alreadyContains) {
      return [...acc, subArray];
    } else {
      return acc;
    }
  }, []);

  // *****************************************
  const sortedFilteredOutput = filteredOutput.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0] - b[0];
    }
    if (a[1] !== b[1]) {
      return a[1] - b[1];
    }
    return a[2] - b[2];
  });
  // *****************************************
  return filteredOutput;
}
