function a () {
  console.log("a")
}

function b () {
  console.log("b")
  for (let i = 0; i <= 1000000000; i++) {

  }

  console.log("b2")
}

function c () {
  console.log("c")
}

b()
a()
c()