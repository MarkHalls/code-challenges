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

function adjacentElementsProduct(inputArray) {
    let largest;

    for (let i = 0; i < inputArray.length - 1; i++) {
        const product = inputArray[i] * inputArray[i + 1];

        if (!largest || product > largest) {
            largest = product;
        }
    }

    return largest;
}

function shapeArea(n) {
    if (n === 1) {
        return n;
    }

    const side = n - 1;
    const perimeter = side * 4;

    return shapeArea(side) + perimeter;
}
