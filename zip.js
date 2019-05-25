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

exports.zip = zip;
