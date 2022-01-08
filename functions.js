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
