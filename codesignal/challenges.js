function checkPalindrome(inputString) {
    const strArr = inputString.split('');

    let startIndex = 0;
    let endIndex = strArr.length - 1;

    for (let i = 0; i < Math.floor(strArr.length / 2); i++) {
        if (strArr[startIndex] !== strArr[endIndex]) {
            return false;
        }
        startIndex++;
        endIndex--;
    }

    return true;
}