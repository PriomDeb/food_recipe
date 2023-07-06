const express = require('express')

const app = express()

app.get("/", (req, res) => {
    res.send({
        message: "Welcome to recipe app"
    })
})

const PORT = 9090

app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
})