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

let Person = (nome) => {
    this.nome = nome
}

let Benny = new Person("benny")