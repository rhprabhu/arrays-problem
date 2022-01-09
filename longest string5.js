function myFunction(arr){
    var words = "";

    arr.forEach(function(word) {
      if(word.length > words.length) {
        words = word;
      }
    });
  
    return words;
}

console.log(myFunction(['help', 'me']));
console.log(myFunction(['I', 'need', 'candy']));