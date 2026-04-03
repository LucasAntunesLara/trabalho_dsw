const express = require('express')
const router = express.Router()
const pontuacoesController = require('../controllers/pontuacoesController')

router.get('/ranking/:idJogo', pontuacoesController.listarRanking)

router.get('/jogos/populares', pontuacoesController.listarJogosMaisPopulares)

router.post('/pontuacoes/', pontuacoesController.adicionar)

module.exports = router
