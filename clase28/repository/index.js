// import { Contact } from "../dao/factory.js";
// import ContactsRepository from "./Contacts.repository";

// export const contactsRepository = new ContactsRepository(new Contacts());

const productDAO = require('../dao/productDAO');
const productRepository = require('../repository/productRepository');

const productDAO = new productDAO();
const productRepository = new productRepository(productDAO);

module.exports = {
    productRepository
};