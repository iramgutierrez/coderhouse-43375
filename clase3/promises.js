const dividir = (a , b) => {
  return new Promise((resolve, reject) => {
    if (b === 0) {
      return reject('Error: No puedes dividir sobre 0')
    }
    
    return resolve(a / b)
  })
}

(async () => {
  try {
    let resultado = await dividir(4, 0)
    console.log(resultado)
  } catch (e) {
    console.log(e)
  }
  
})();

/*
dividir(4, 2)
  .then((result) => {
    console.log({ result })

    return dividir(9, 0)
  })
  .then((result2) => {
    console.log({ result2 })

    return dividir(10, 0)
  })
  .then((result3) => {
    console.log({ result3 })
  })
  .catch((err) => {
    console.log({ err })
  })*/