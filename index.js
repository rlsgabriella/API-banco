
const express = require('express')

const app = express()
app.get('/home', (req, res) => {
    res.send('Hello World!');
  });

const PORT = 3000
app.listen(PORT, () => {
    console.log(`O servidor está rodando na porta ${PORT}`)
})