const mostrarLista = (arr) => {
  if (arr.length < 1) return "Lista vacia";
  for (let index = 0; index < arr.length; index++) {
    console.log(arr[index]);
  }
  return `La lista tiene ${arr.length} elementos`;
};
const arr = []
console.log(arr.length === 0)

console.log(mostrarLista([1, 2, 3]))