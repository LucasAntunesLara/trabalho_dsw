const express = require('express')
const router = express.Router()
const jogoController = require('../controllers/jogosController')

router.get('/', jogoController.listar)

router.get('/:id', jogoController.buscarPorId)

router.post('/', jogoController.adicionar)

router.put('/:id', jogoController.atualizar)

router.delete('/:id', jogoController.deletar)

module.exports = router
