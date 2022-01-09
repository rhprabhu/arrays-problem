function myFunction(arr) {
//  arr.reduce((a,b) => a + b,0) / arr.length;
//  return arr;

let sum=0;
arr.forEach(function (item, idx) {
    sum += item;
  });
  // Returning the average of the numbers
  return sum / arr.length;
}


console.log(myFunction([10, 100, 40]));
console.log(myFunction([10, 100, 1000]));
console.log(myFunction([-50, 0, 50,200]));