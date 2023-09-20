import ContactDTO from "../dto/Contact.dto.js";

export default class ContactsRepository {
    constructor(dao) {
        this.dao = dao;
    }

    getContacts = async () => {
        let result = await this.dao.get();
        return result;
    }

    createContact = async (contact) => {
        let contactToInsert = new ContactDTO(contact);
        let result = await this.dao.insert(contactToInsert);
        return result;
    }
}