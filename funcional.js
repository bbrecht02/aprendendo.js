// map 
const arr = [1,2,3,4,5,6,7,8,9,10];

console.log(arr.map((i) => i * 2));

// filter 
console.log(arr.filter((i) => i > 5));


// return only pairs numbers
console.log(arr.filter((i) => i % 2 === 0));

let sum = arr.reduce((acc, num) => {return acc += num}, 0)

console.log(sum);