const connection = require('../../config/db')

connection.query('DROP TABLE IF EXISTS pontuacoes;')
connection.query('DROP TABLE IF EXISTS jogadores;')
connection.query('DROP TABLE IF EXISTS jogos;')

connection.end()

console.log('Tabelas deletadas com sucesso!')
