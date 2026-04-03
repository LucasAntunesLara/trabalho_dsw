const connection = require('../config/db')

exports.inserir = ({jogo_id, jogador_id, pontuacao}, callback) => {
  const sql =
    'INSERT INTO pontuacoes (jogo_id, jogador_id, pontuacao) VALUES (?, ?, ?)'
  connection.query(sql, [jogo_id, jogador_id, pontuacao], callback)
}

exports.listarJogosMaisPopulares = callback => {
  connection.query(
    `SELECT
        j.id,
        j.nome,
        j.plataforma,
        j.ano_lancamento,
        COUNT(p.id) AS total_pontuacoes,
        MAX(p.pontuacao) AS maior_pontuacao,
        AVG(p.pontuacao) AS media_pontuacao,
    COUNT(DISTINCT p.jogador_id) AS total_jogadores_distintos
    FROM jogos j
    INNER JOIN pontuacoes p ON j.id = p.jogo_id
    GROUP BY j.id, j.nome, j.plataforma, j.ano_lancamento
    ORDER BY total_pontuacoes DESC
    LIMIT 3;`,
    callback,
  )
}

exports.listarRanking = (idJogo, callback) => {
  const sql = `
    SELECT
        j.nome AS jogo,
        jg.nickname AS jogador,
        jg.nome AS nome_completo,
        p.pontuacao,
        p.data_registro
    FROM pontuacoes p
    INNER JOIN jogos j ON p.jogo_id = j.id
    INNER JOIN jogadores jg ON p.jogador_id = jg.id
    WHERE p.jogo_id = ?
    ORDER BY p.pontuacao DESC
    LIMIT 10;`
  connection.query(sql, [idJogo], callback)
}
