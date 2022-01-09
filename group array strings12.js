
const myFunction=arr => {
   const map = arr.reduce((acc, val) => {
      let char = val.charAt(0).toUpperCase();
      acc[char] = [].concat((acc[char] || []), val);
      return acc;
   }, {});
   const res = Object.keys(map).map(el => ([el , map[el]]));
    return res;
};

console.log(myFunction(['Alf', 'Alice', 'Ben']));
console.log(myFunction(['Ant', 'Bear', 'Bird']));
console.log(myFunction(['Berlin', 'Paris', 'P']));