
let array = [5,4,3,2,1];

bubble = (array) => {

    let len = array.length

    for (let i = 0; i < len; i++) {
        for (let j = 0; j < len; j++) {
            if (array[j] > array[j + 1]) {
                let aux = array[j];
                array[j] = array[j + 1];
                array[j + 1] = aux;
            }
        }
    }

    console.log(array);
}

bubble(array);

//console.log(array.sort())