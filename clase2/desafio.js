const objetos =  [
  {
   manzanas:3,
   peras:2,
   carne:1,
   jugos:5,
   dulces:2
  },
  {
   manzanas:1,
   sandias:1,
   huevos:6,
   jugos:1,
   panes:4
  }
 ]

 // ['manzanas', 'peras', 'carne']

 const fn = el => {
  const elArray = Object.keys(el)

  return elArray
 }
 const productos = objetos.map(fn)

 console.log(productos.flat())