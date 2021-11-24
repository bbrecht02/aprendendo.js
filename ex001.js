// declarar uma var weight e retornar seu tipo 

let weight;

console.log(typeof weight);


let name = "Benny";
let age = 21;
let stars = 5.5;
let isSubscribed = true;   


let student = {};
console.log(typeof student);

const student = {
    name = "Benny",
    age = 21,
    weight = 60.5,
    isSubscribed = true
};

console.log(`${student.name} de idade ${student.age} 
pesa ${student.weight} kg`);

let students = [];

students[0] = student;

console.log(students[0]);

const student2 = {
    name = "Ana",
    age = 22,
    weight = 57.5,
    isSubscribed = true
};

students[1] = student2;



