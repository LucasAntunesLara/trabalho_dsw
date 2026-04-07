const jogoModel = require('../models/jogosModel')

exports.listar = (req, res) => {
  jogoModel.buscarTodos((err, results) => {
    if (err) return res.status(500).send('Erro ao listar jogos')

    res.json(results)
  })
}

exports.buscarPorId = (req, res) => {
  jogoModel.buscarPorId(req.params.id, (err, results) => {
    if (err) return res.status(500).send('Erro ao buscar jogo')

    if (results.length === 0) return res.status(404).send('Jogo não encontrado')

    res.json(results[0])
  })
}

exports.adicionar = (req, res) => {
  const {nome, plataforma, ano_lancamento} = req.body

  if (nome === null)
    return res.status(400).send('O nome do jogo não pode ser nulo!')

  if (!nome || !plataforma || !ano_lancamento)
    return res.status(400).send('Todos os campos são obrigatórios.')

  if (ano_lancamento > new Date().getFullYear())
    return res
      .status(400)
      .send('Ano de lancamento não pode ser uma data futura.')

  jogoModel.inserir(req.body, err => {
    if (err) return res.status(500).send('Erro ao adicionar jogo')

    res.status(201).send('Jogo adicionado com sucesso!')
  })
}

exports.atualizar = (req, res) => {
  const {nome, plataforma, ano_lancamento} = req.body

  if (!nome || !plataforma || !ano_lancamento) {
    return res.status(400).send('Todos os campos são obrigatórios.')
  }

  jogoModel.atualizar(req.params.id, req.body, (err, result) => {
    if (err) return res.status(500).send('Erro ao atualizar jogo')

    if (result.affectedRows === 0)
      return res.status(404).send('Jogo não encontrado')

    res.send('Jogo atualizado com sucesso!')
  })
}

exports.deletar = (req, res) => {
  jogoModel.deletar(req.params.id, (err, result) => {
    if (err) return res.status(500).send('Erro ao deletar jogo')

    if (result.affectedRows === 0)
      return res.status(404).send('Jogo não encontrado')

    res.send('Jogo deletado com sucesso!')
  })
}
