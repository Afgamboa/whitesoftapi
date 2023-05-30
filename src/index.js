import express from 'express';

const app = express();

const port = 3001

app.use('/', () => {
    console.log("hola mundo")
})

app.listen(port, () => {
    console.log("Server running on port", port)
})