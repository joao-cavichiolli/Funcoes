
// A funçao splice ela altera um array ela pode remover elementos
// substituir elementos de um array

// remover 1 elemento a partir da posição do indice de memoria

let numeros = [1,2,3,4,5]

numeros.splice(2,1)

console.log("Resultado Remoção",numeros);

let numeros2 = [1,2,3,4,5]

numeros2.splice(2,2,500,100);

console.log("Resultado Substituição Array",numeros2);