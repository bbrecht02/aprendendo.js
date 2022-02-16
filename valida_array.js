function valida(array, number) {
    try {
        if (!array && !number) 
                throw new ReferenceError("Parametros faltantes");

        if (typeof(array) !== 'object') 
                throw new TypeError("O parametro passado deve ser um objeto array");

        if (typeof(number) !== 'number') 
                throw new TypeError("O parametro passado deve ser um numero");

        if (array.length !== number) 
                throw new RangeError("o tamanho do array passado nao eh o mesmo do numero"); 

        return array;
    }

    catch(e) {
        if (e instanceof ReferenceError) {

            console.log('It`s a Reference Error');
            console.log(e.stack);
        }

        if (e instanceof TypeError) {
            console.log('It`s a Type Error');
            console.log(e.stack);
        }

        else {
            console.log('It`s another type of Error');
            console.log(e.stack)
        }
    }
}
let arr = [6,6,6,6,6,6,6,6];
console.log(valida([1,2,3], 3)); 