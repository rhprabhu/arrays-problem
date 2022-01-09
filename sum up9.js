function myFunction(num,n) {
   let sum= num.filter(x => x > n)
   .reduce((add, a) =>add + a, 0);
   return sum;
}

console.log(myFunction([1, 2, 3, 4, 5, 6, 7], 2));
console.log(myFunction([1, 2, 3, 4, 5, 6, 7], 2));
console.log(myFunction([78, 99, 100, 101, 401], 99));
