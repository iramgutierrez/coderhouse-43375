import {faker} from '@faker-js/faker'

//faker.locale= 'es'

export const generateUser = () => {
    let numOfProducts = parseInt(faker.random.numeric(1,{bannedDigits:['0']}))
    let products = []
    for (let i = 0; i < numOfProducts; i++) {
        products.push(generateProduct())
    }

    return{
        name: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        products,
        sex: faker.name.sex(),
        phone: faker.phone.number(),
        id: faker.database.mongodbObjectId(),
        image: faker.internet.avatar()
    }
}

export const generateProduct = () => {
    return{
        title: faker.commerce.productName(),
        price: faker.commerce.price(),
        image: faker.image.image(),
        id: faker.database.mongodbObjectId(),
        department: faker.commerce.department(),
        stock: faker.random.numeric(1),

    }
}