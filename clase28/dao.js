const {MongoClient} = require('mongodb');

class MemoryDAO {
    constructor() {
        this.users = [];
        this.id = 0;
    }

    async create(user) {
        this.id +=1;
        this.users.id= this.id;
        this.users.push(user);
        return user;
    }

    async getAll() {
        return this.users;
    }


}

class MongoDAO {
    constructor() {
        this.uri= 'mongodb://localhost:27017';
        this.client = new MongoClient(this.uri);
        this.dbName= 'testbd';
        this.collectionName= 'users';
    }

    async create(user){
        await this.client.connect();
        const db = this.client.db(this.dbName);
        const collection = db.collection(this.collectionName);
        const result = await collection.insertOne(user);
        await this.client.close();
        return result;
    }

    async getAll(){
        await this.client.connect();
        const db = this.client.db(this.dbName);
        const collection = db.collection(this.collectionName);
        const result = await collection.find({}).toArray();
        await this.client.close();
        return result;
    }
}

module.exports = { MemoryDAO, MongoDAO };