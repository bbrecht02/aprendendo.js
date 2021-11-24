let gerenciamento = {
    receitas: [100,350,200],
    despesas: [50,60,70,80,12,13,43]
} 

total = (array) => {
    let total = 0

    for (let value of array) {
        total += value
    }
    return total
}


totalReceitas = total(gerenciamento.receitas)
totalDespesas = total(gerenciamento.despesas)

console.log('Receitas:' + totalReceitas)
console.log('Despesas:' + totalDespesas)


saldo = (totalReceitas, totalDespesas) => {
    return totalDespesas > totalReceitas
}

if (saldo(totalReceitas, totalDespesas)) {
    console.log("Saldo Negativo: " + (totalReceitas - totalDespesas) )
}
else {
    console.log("Saldo Positivo: " + (totalReceitas - totalDespesas))
}