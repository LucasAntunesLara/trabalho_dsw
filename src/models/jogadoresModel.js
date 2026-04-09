const connection = require('../config/db')

exports.buscarTodos = callback => {
  connection.query('SELECT * FROM jogadores', callback)
}

exports.buscarPorId = (id, callback) => {
  connection.query('SELECT * FROM jogadores WHERE id = ?', [id], callback)
}

exports.inserir = ({nome, nickname}, callback) => {
  const sql = 'INSERT INTO jogadores (nome, nickname) VALUES (?, ?)'

  connection.query(sql, [nome, nickname], callback)
}
