/// A função slice ela retorna uma copia da parte de um array 
// Para outro array (subarray)

// Ele ira copiar a parte de um array da posicao 1 a 4 e colocar
// em outro array

let carros = ["Gol","Fuscao","Ford KA","Sandero","Uno"]

let garagem = carros.slice(1,5);

console.log("Carros na Garagem",garagem)