require('dotenv').config()

const express = require('express')

const jogosRoutes = require('./routes/jogos')
const jogadoresRoutes = require('./routes/jogadores')
const pontuacoesRoutes = require('./routes/pontuacoes')

const app = express()

const PORT = process.env.PORT

app.use(express.json())

app.use('/', pontuacoesRoutes)
app.use('/jogadores', jogadoresRoutes)
app.use('/jogos', jogosRoutes)

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`)
})
