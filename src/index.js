import express from 'express';

const app = express();

const port = 3001

app.use('/', (req, res) => {
    res.send("Hola mundo")
})

app.listen(port, () => {
    console.log("Server running on port", port)
})