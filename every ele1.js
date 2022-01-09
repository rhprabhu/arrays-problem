function myFunction(array) {
    var index = array[0];
    return array.every(function(element) {
        return element === index;
    });
}

console.log(myFunction([true, true, true, true]));
console.log(myFunction(['test', 'test','test']));
console.log(myFunction(['10', 10, 10, 10]));
console.log(myFunction([1, 1, 1, 2]));
