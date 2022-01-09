function myFunction(ele, num){
if(num<6){
    num = 11;
}
let arr=[];
arr.push(num);
arr.push(...ele);
return arr;
}

console.log(myFunction([1, 2, 3], 6));
console.log(myFunction(['a', 'b'], 2));
console.log(myFunction([null, false], 11));