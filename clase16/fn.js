const fn = {
  name: 'fn_test',
  test:  () => {
    console.log(this.name)
  }
}

fn.test()

/*class Test {
  constructor () {
    this.name = 'Iram'
  }
  hello() {

    const fn = function() {
      console.log(this.name)
    }

    fn()
    
  }
}

const instance = new Test()

instance.hello()*/

