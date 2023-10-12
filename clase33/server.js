const { gretting } = require('iram-clase33')

// console.log('Hola desde el servidor mod')

const response = {
  settings: {
    nullValue: null,
    height: 400,
    animationDuration: 0,
    headerText: '',
    showSplashScreen: false
  }
};

const undefinedValue = response.settings.undefinedValue ?? 'some other default'; // result: 'some other default'
const nullValue = response.settings.nullValue ?? 'some other default'; // result: 'some other default'
const headerText = response.settings.headerText ?? 'Hello, world!'; // result: ''
const animationDuration = response.settings.animationDuration ?? 300; // result: 0
const showSplashScreen = response.settings.showSplashScreen ?? true; // result: false

/**
 * 
 * El operador || toma como no validos los valores de: null, undefined, '', 0 y false
 * Mientras el operador ?? (nullish) toma como no validos los valores de: null y undefined
 */

const value = null || 'value'

console.log(value)

const defaultBalance = 10

const user = {
  name: 'Iram',
  balance: 0
}

// const userBalance = user.balance || defaultBalance
const userBalance = user.balance ?? defaultBalance

console.log({ userBalance })

console.log(gretting('Santiago'))

