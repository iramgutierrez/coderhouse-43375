import  express from "express";

import usersRouter from "./routes/users.js";

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/api/users', usersRouter);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
})