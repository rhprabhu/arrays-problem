function myFunction(...array) {
    let mergedArray = [];

    array.forEach(arr => {
        mergedArray = [...mergedArray, ...arr]
    });

    return mergedArray;
}

console.log(myFunction([1,2,3], [4, 5, 6]));
console.log(myFunction(['a','b','c'], [4, 5, 6]));
console.log(myFunction([true, true],[1,2], ['a','b']));
