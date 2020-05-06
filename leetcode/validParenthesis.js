//https://leetcode.com/problems/valid-parentheses/submissions/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const validBrackets = new Set(["[", "]", "(", ")", "{", "}"]);
  const openBracket = new Set(["[", "(", "{"]);
  const closeBracket = {
    "]": "[",
    ")": "(",
    "}": "{",
  };
  const bracketStack = [];
  const stringArr = [...s];

  const checkBrackets = stringArr.reduce((acc, character) => {
    // if acc is ever false, we have a mismatch so keep returning false
    if (!acc || !validBrackets.has(character)) {
      return acc;
    }

    if (openBracket.has(character)) {
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
};
