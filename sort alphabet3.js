// function myFunction(){

// })


let array = ["b", "c", "d", "a"];

// // sort your own way descending
// let arrayOfNames = ["George", "Veronica", "Mounika", "Shaunik"];
// console.log("Before Sorting: " + arrayOfNames );
// // sort your own way descending
// arrayOfNames.sort((firstElement, secondElement) => { if (firstElement > secondElement) {
//     return -1;
//   }
// } 
// );
// console.log("After Sorting Descending: " + arrayOfNames);

function myFunction(array){
    array.sort();
    return array;
}

console.log(myFunction(["b", "c", "d", "a"]));
console.log(myFunction(["z", "c", "d", "a", "y", "a", "w"]));