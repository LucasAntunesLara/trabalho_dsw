const pontuacoesModel = require('../models/pontuacoesModel')

exports.listarRanking = (req, res) => {
  pontuacoesModel.listarRanking(req.params.idJogo, (err, results) => {
    console.log(req.params.idJogo, results)

    if (err) return res.status(500).send('Erro ao listar ranking desse jogo.')

    if (results.length === 0)
      return res.status(404).send('Esse jogo ainda nao possui pontuações.')

    res.json(results)
  })
}

exports.listarJogosMaisPopulares = (req, res) => {
  pontuacoesModel.listarJogosMaisPopulares((err, results) => {
    if (err) return res.status(500).send('Erro ao buscar jogos mais populares')

    res.json(results)
  })
}

exports.adicionar = (req, res) => {
  const {jogo_id, jogador_id, pontuacao} = req.body

  if (!jogo_id || !jogador_id || !pontuacao)
    return res.status(400).send('Todos os campos são obrigatórios.')

  pontuacoesModel.inserir(req.body, err => {
    if (err) return res.status(500).send('Erro ao adicionar pontuação')

    res.status(201).send('Pontuação adicionada com sucesso')
  })
}
