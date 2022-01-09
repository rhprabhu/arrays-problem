function myFunction(arr, val){
let index = arr.indexOf(val);
if(index > -1){
arr.splice(index, 1);
}
return arr;
}

console.log(myFunction([1,2,3], 2));
console.log(myFunction([1,2,'2'], '2'));
console.log(myFunction([false,'2',1], false));
console.log(myFunction([1 ,2, '2', 1], 1));