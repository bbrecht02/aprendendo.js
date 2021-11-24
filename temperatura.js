toCelsius = (temperatura) => {
    return (temperatura - 32) * 5/9
}

toFahrenheit = (temperatura) => {
    return (temperatura * (9/5)) + 32
}


let string1 = "30C"
let string2 = "88F"


console.log(`30 celsius equivale a ${toFahrenheit(30)} fahrenheit`)
console.log(`88 fahrenheit equivale a ${toCelsius(88)} celsius`)