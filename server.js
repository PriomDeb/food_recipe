import express from 'express';
import colors from 'colors';

const app = express()

app.get("/", (req, res) => {
    res.send("<h1>Welcome to Recipe Website.</h1>")
});

const PORT = 9090

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`.bgCyan.white);
})