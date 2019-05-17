function zip(arr1, arr2) {
    if (!Array.isArray(arr1) || !Array.isArray(arr2)) {
        throw TypeError('The arguments to zip must be arrays');
    }

    var zippedArray = [];
    var shortestLength = Math.min(arr1.length, arr2.length);

    for (var index = 0; index < shortestLength; index++) {
        zippedArray.push(arr1[index]);
        zippedArray.push(arr2[index]);
    }

    return zippedArray;
}

// zip function should exist
zip([], []);

var testResult;
var testName;
var expectedResult;
testName = "zip should return an array";
testResult = zip([], []);
if (!Array.isArray(testResult)) {
    throw Error(`Failed test: ${testName}`);
} else {
    console.log(`Passed test: ${testName}`);
}

testName = "zip should return a single array containing each item from two single item arrays";
testResult = zip(['a'], ['b']);
expectedResult = 'a,b';

if (expectedResult !== testResult.join(",")) {
    throw Error(`Failed test: ${testName}`);
} else {
    console.log(`Passed test: ${testName}`);
}

testName = "zip should return a single array containing each item equal length arrays";
testResult = zip(['a', 'c'], ['b', 'd']);
expectedResult = 'a,b,c,d';
if (expectedResult !== testResult.join(",")) {
    throw Error(`Failed test: ${testName}`);
} else {
    console.log(`Passed test: ${testName}`);
}

testName = "When the first array is longer than the second array, return the correct zipped array that contains all elements from the second array";
testResult = zip([42, 100], [13]);
expectedResult = '42,13';
if (expectedResult !== testResult.join(",")) {
    throw Error(`Failed test: ${testName}\nExpected ${testResult.join(",")} to equal ${expectedResult}`);
} else {
    console.log(`Passed test: ${testName}`);
}

testName = "When the first array is shorter than the second array, return the correct zipped array that contains all elements from the first array";
testResult = zip(['hello', 'world'], [3, 5, 7, 11, 13]);
expectedResult = 'hello,3,world,5';
if (expectedResult !== testResult.join(",")) {
    throw Error(`Failed test: ${testName}\nExpected ${testResult.join(",")} to equal ${expectedResult}`);
} else {
    console.log(`Passed test: ${testName}`);
}

testName = "Throws an error when the first parameter is not an array";
var didThrowError = false;
try {
    testResult = zip('hello', [3, 5, 7, 11, 13]);
} catch (e) {
    if (e instanceof TypeError) {
        console.log(`Threw error ${e}`);
        didThrowError = true;
    } else {
        throw e;
    }
}

if (!didThrowError) {
    throw Error(`Failed test: ${testName}`);
} else {
    console.log(`Passed test: ${testName}`);
}

testName = "Throws an error when the second parameter is not an array";
var didThrowError = false;
try {
    testResult = zip([3, 5, 7, 11, 13], 'hello');
} catch (e) {
    if (e instanceof TypeError) {
        console.log(`Threw error ${e}`);
        didThrowError = true;
    } else {
        throw e;
    }
}

if (!didThrowError) {
    throw Error(`Failed test: ${testName}`);
} else {
    console.log(`Passed test: ${testName}`);
}

console.log("************************");
console.log("Finished running zip tests!");
console.log("************************");