function myFunction(arr, n){
let arry=arr.slice(-n);
console.log(arry);
}

console.log(myFunction([1, 2, 3, 4, 5], 2));
console.log(myFunction([1, 2, 3], 6));
console.log(myFunction([1, 2, 3,4, 5, 6, 7, 8], 3));