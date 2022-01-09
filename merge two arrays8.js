function myFunction(arr1, arr2){
    let array= arr1.concat(arr2);
    array = [...new Set([...arr1,...arr2])];
     array.sort((a,b)=>a-b)
return array;
}

console.log(myFunction([1,2,3], [3, 4, 5]));
console.log(myFunction([-10,22,333, 42], [-11, 5, 22, 41, 42]));