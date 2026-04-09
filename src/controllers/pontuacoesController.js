const pontuacoesModel = require('../models/pontuacoesModel')
const jogosModel = require('../models/jogosModel')
const jogadoresModel = require('../models/jogadoresModel')

exports.listarRanking = (req, res) => {
  const jogoId = Number(req.params.idJogo)

  jogosModel.buscarPorId(jogoId, (err, jogoResults) => {
    if (err) return res.status(500).send('Erro ao verificar o jogo informado.')

    if (jogoResults.length === 0)
      return res.status(404).send('Jogo não encontrado.')

    pontuacoesModel.listarRanking(jogoId, (err, results) => {
      if (err) return res.status(500).send('Erro ao listar ranking desse jogo.')

      if (results.length === 0)
        return res.status(404).send('Esse jogo ainda não possui pontuações.')

      res.json(results)
    })
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
  const jogoId = Number(jogo_id)
  const jogadorId = Number(jogador_id)
  const pontuacaoValor = Number(pontuacao)

  if (jogo_id == null || jogador_id == null || pontuacao == null)
    return res.status(400).send('Todos os campos são obrigatórios.')

  if (!Number.isInteger(jogoId) || jogoId <= 0)
    return res.status(400).send('O id do jogo deve ser positivo.')

  if (!Number.isInteger(jogadorId) || jogadorId <= 0)
    return res.status(400).send('O id do jogador deve ser positivo.')

  if (!Number.isInteger(pontuacaoValor) || pontuacaoValor < 0)
    return res
      .status(400)
      .send('A pontuação deve ser um número inteiro maior ou igual a zero.')

  jogosModel.buscarPorId(jogoId, (err, jogoResults) => {
    if (err) return res.status(500).send('Erro ao validar o jogo informado.')
    if (jogoResults.length === 0)
      return res.status(400).send('Jogo informado não existe.')

    jogadoresModel.buscarPorId(jogadorId, (err, jogadorResults) => {
      if (err)
        return res.status(500).send('Erro ao validar o jogador informado.')
      if (jogadorResults.length === 0)
        return res.status(400).send('Jogador informado não existe.')

      pontuacoesModel.inserir(
        {jogo_id: jogoId, jogador_id: jogadorId, pontuacao: pontuacaoValor},
        err => {
          if (err) return res.status(500).send('Erro ao adicionar pontuação')

          res.status(201).send('Pontuação adicionada com sucesso')
        },
      )
    })
  })
}
