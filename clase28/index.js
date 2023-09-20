const express = require('express');
const { MemoryDAO, MongoDAO } = require('./dao');

const app = express();
const PORT = 3000;

const memoryDAO = new MemoryDAO();
const mongoDAO = new MongoDAO();

app.use(express.json());

// CRUD para DAO de memoria
app.post('/memory/users', async (req, res) => {
    const newUser = await memoryDAO.create(req.body);
    res.status(201).json(newUser);
});

app.get('/memory/users', async (req, res) => {
    const users = await memoryDAO.getAll();
    res.json(users);
});

// CRUD para DAO de MongoDB
app.post('/mongo/users', async (req, res) => {
    const newUser = await mongoDAO.create(req.body);
    res.status(201).json(newUser);
});

app.get('/mongo/users', async (req, res) => {
    const users = await mongoDAO.getAll();
    res.json(users);
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});


