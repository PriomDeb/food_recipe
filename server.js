import express from 'express';
import colors from 'colors';
import dotenv from 'dotenv';

dotenv.config();

const app = express()

app.get("/", (req, res) => {
    res.send("<h1>Welcome to Recipe Website .</h1>")
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
    console.log(`Server running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan.white);
})