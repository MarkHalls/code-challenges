function isZigzag(numbers) {
    const zigZagArr = [];

    for (let i = 0; i < numbers.length - 2; i++) {
        const a = numbers[i];
        const b = numbers[i + 1];
        const c = numbers[i + 2];

        if ((a < b && b > c) || (a > b && b < c)) {
            zigZagArr.push(1);
        } else {
            zigZagArr.push(0);
        }
    }

    return zigZagArr;
}

function prefixStrings(a, b) {
    const possiblePrefixes = [a[0]];

    a.reduce((acc, pref) => {
        const newPref = acc + pref;
        possiblePrefixes.push(newPref);
        return newPref;
    });

    return b.reduce((acc, str) => {
        if (acc === false) {
            return acc;
        }

        const checkStr = possiblePrefixes.includes(str);

        //if our current string isn't in the possible prefixes, return false
        if (!checkStr) {
            return false;
        }

        return acc;
    }, true);
}

function coolFeature(a, b, query) {
    let newA = a;
    let newB = b;

    const queryZero = (i, x) => (newB[i] = x);

    const queryOne = (sumTarget) => {
        totalFound = 0;

        newA.map((number) => {
            newB.map((number2) => {
                if (number + number2 === sumTarget) {
                    totalFound++;
                }
            });
        });

        return totalFound;
    };

    return query.reduce((acc, q) => {
        const type = q[0];

        if (type === 0) {
            const i = q[1];
            const x = q[2];

            queryZero(i, x);
        }
        if (type === 1) {
            const x = q[1];

            acc.push(queryOne(x));
        }

        return acc;
    }, []);
}


// Input:
// a: [1, 2, 3]
// b: [3, 4]
// query:
// [[1, 5],
// [0, 0, 1],
// [1, 5]]
// Expected Output:
// [2, 1]


function coolFeature(a, b, query) {
    let newA = a;
    let newB = b;

    const queryZero = (i, x) => (newB[i] = x);

    const queryOne = (sumTarget) => {
        totalFound = 0;
        CACHE = {};
        newA.map((number) => {
            if (CACHE[number2]) {
                totalFound++;
                return;
            }
            newB.map((number2) => {
                if (number + number2 === sumTarget) {
                    totalFound++;
                    CACHE[number] = number;
                }
            });
        });

        return totalFound;
    };

    return query.reduce((acc, q) => {
        const type = q[0];

        if (type === 0) {
            const i = q[1];
            const x = q[2];

            queryZero(i, x);
        }
        if (type === 1) {
            const x = q[1];

            acc.push(queryOne(x));
        }

        return acc;
    }, []);
}
