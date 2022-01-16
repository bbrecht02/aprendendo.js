function number() {
    return 1;
}

number();

number = number();
console.log(number);

// arrow function 

const sayMyName = (nome) => {console.log("benny");}

// callback 
sayMyName(
    () => {
        console.log("callback")
    }
)

// construtor 

function Person(nome) {
    this.nome = nome;
}

let benny = new Person("benny");
console.log(benny);


// advanced topics 

//arrow funcs 

let sum = (a,b) => a + b;

console.log(sum(1,5));

// hoisting

// function call before create
log("teste");

function log(value) {
    console.log(value);
};

// object

let obj = {
    sum: function sum(a, b) {
        return a + b;
    }
};

console.log(obj.sum(1,5));

// args 

const test = (...args) => {
    console.log(args)
}

test(5,5,5,5);


// return multiply of all args passing by comand line
const multiply = (...args) => args.reduce((acc, value) => acc * value, 1);

console.log(multiply(7,3,5,4,1));

// symbols

const uniqueid = Symbol("Hello");

// well known symbols 

Symbol.iterator;
Symbol.split;
Symbol.toStringTag;

// example

const arr = [1,2,3,4];

const it = arr[Symbol.iterator]();

while(true) {
    let {value, done} = it.next();

    if (done) {
        break;
    }

    console.log(value);
}

// most used
for(let value of arr) {
    console.log(value);
} 