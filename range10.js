
function myFunction(min, max) {
	let arr=[];
    for(let i=min; i<=max; i++){
        arr.push(i);
    }
    return arr;
}

 
console.log(myFunction(2, 10));
console.log(myFunction(1, 3));
console.log(myFunction(-5, 5));
console.log(myFunction(2, 7));