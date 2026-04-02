const connection = require('../../config/db')

connection.query(`CREATE TABLE
    IF NOT EXISTS jogos (
        id INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(100) NOT NULL,
        plataforma VARCHAR(50) NOT NULL,
        ano_lancamento INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
`)

connection.query(`CREATE TABLE
    IF NOT EXISTS jogadores (
        id INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(100) NOT NULL,
        nickname VARCHAR(50) NOT NULL UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );
`)

connection.query(`CREATE TABLE
    IF NOT EXISTS pontuacoes (
        id INT PRIMARY KEY AUTO_INCREMENT,
        jogo_id INT NOT NULL,
        jogador_id INT NOT NULL,
        pontuacao INT NOT NULL,
        data_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        FOREIGN KEY (jogo_id) REFERENCES jogos(id),
        FOREIGN KEY (jogador_id) REFERENCES jogadores(id)
    );
`)

connection.end()

console.log('Tabelas criadas com sucesso!')
