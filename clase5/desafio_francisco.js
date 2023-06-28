const numeros = {};

for (let i = 0; i <= 10000; i++) {
  randomNumber = Math.floor(Math.random() * 20 + 1);
  randomNumber in numeros
    ? (numeros[randomNumber] += 1)
    : (numeros[randomNumber] = 1);
}
console.log(numeros);