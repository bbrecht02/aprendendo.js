var fruit = ["Apple", "Banana", "Melon", "Pumpkin"];

//return array and ur size
console.log(fruit);
console.log(fruit.length);

// interate
fruit.forEach(function(item, i, array) {
    console.log(item, i);
});

// stack (LIFO)
// add and remove a item
fruit.push("Orange");
console.log(fruit);
fruit.pop();
console.log(fruit);

// add on first position
fruit.unshift("Mango");
console.log(fruit);

// remove on first position
fruit.shift();
console.log(fruit);

// return a index
console.log(`Pumpkin index: ${fruit.indexOf("Pumpkin")}, ${fruit}`);

// remove from until a index 
console.log(fruit.splice(1, 2));
console.log(fruit);