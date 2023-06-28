objectTest = {};
for (let index = 0; index < 10000; index++) {
  const aleatorio = Math.floor(Math.random() * 20 + 1);

  objectTest[aleatorio]
    ? (objectTest[aleatorio] += 1)
    : (objectTest[aleatorio] = 1);
}
console.log(objectTest);