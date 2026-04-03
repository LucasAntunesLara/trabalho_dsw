const express = require('express')
const router = express.Router()
const jogadoresController = require('../controllers/jogadoresController')

router.get('/', jogadoresController.listar)

router.post('/', jogadoresController.adicionar)

module.exports = router
