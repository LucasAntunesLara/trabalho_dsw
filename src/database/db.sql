CREATE DATABASE IF NOT EXISTS jogos_retro;

USE jogos_retro;

CREATE TABLE
    IF NOT EXISTS jogos (
        id INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(100) NOT NULL,
        plataforma VARCHAR(50) NOT NULL,
        ano_lancamento INT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

CREATE TABLE
    IF NOT EXISTS jogadores (
        id INT PRIMARY KEY AUTO_INCREMENT,
        nome VARCHAR(100) NOT NULL,
        nickname VARCHAR(50) NOT NULL UNIQUE,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
    );

CREATE TABLE
    IF NOT EXISTS pontuacoes (
        id INT PRIMARY KEY AUTO_INCREMENT,
        jogo_id INT NOT NULL,
        jogador_id INT NOT NULL,
        pontuacao INT NOT NULL,
        data_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        -- Chaves estrangeiras
        CONSTRAINT fk_pontuacoes_jogo FOREIGN KEY (jogo_id) REFERENCES jogos (id) ON DELETE CASCADE ON UPDATE CASCADE,
        CONSTRAINT fk_pontuacoes_jogador FOREIGN KEY (jogador_id) REFERENCES jogadores (id) ON DELETE CASCADE ON UPDATE CASCADE
    );

INSERT INTO
    jogos (nome, plataforma, ano_lancamento)
VALUES
    ('Super Mario World', 'Super Nintendo', 1990),
    ('Sonic the Hedgehog', 'Mega Drive', 1991),
    ('Donkey Kong Country', 'Super Nintendo', 1994),
    ('Street Fighter II', 'Super Nintendo', 1992),
    ('Mortal Kombat', 'Mega Drive', 1992),
    ('The Legend of Zelda', 'NES', 1986),
    ('Pac-Man', 'Arcade', 1980),
    ('Space Invaders', 'Arcade', 1978),
    ('Tetris', 'Game Boy', 1989),
    ('Crash Bandicoot', 'PlayStation', 1996);

INSERT INTO
    jogadores (nome, nickname)
VALUES
    ('João Silva', 'jsilva'),
    ('Maria Santos', 'msantos'),
    ('Pedro Oliveira', 'poliveira'),
    ('Ana Costa', 'acosta'),
    ('Lucas Ferreira', 'lferreira'),
    ('Carla Mendes', 'cmendes'),
    ('Roberto Alves', 'ralves'),
    ('Patrícia Lima', 'plima'),
    ('Fernando Souza', 'fsouza'),
    ('Juliana Rocha', 'jrocha');

INSERT INTO
    pontuacoes (jogo_id, jogador_id, pontuacao)
VALUES
    -- Ranking Super Mario World
    (1, 1, 15000),
    (1, 2, 14200),
    (1, 3, 13800),
    (1, 4, 12500),
    (1, 5, 12000),
    (1, 6, 11500),
    (1, 7, 11000),
    (1, 8, 10500),
    (1, 9, 10000),
    (1, 10, 9500),
    (1, 1, 15500),
    (1, 2, 14800),
    -- Ranking Sonic 
    (2, 1, 8000),
    (2, 2, 8500),
    (2, 3, 8200),
    (2, 4, 7800),
    (2, 5, 7500),
    (2, 6, 7200),
    (2, 7, 7000),
    (2, 8, 6800),
    (2, 9, 6500),
    (2, 10, 6200),
    -- Ranking Donkey Kong 
    (3, 1, 12000),
    (3, 2, 11500),
    (3, 3, 11000),
    (3, 4, 10500),
    (3, 5, 10000),
    -- Ranking Street Fighter II 
    (4, 1, 5000),
    (4, 2, 4800),
    (4, 3, 4600),
    (4, 4, 4400),
    (4, 5, 4200),
    -- Ranking Mortal Kombat 
    (5, 1, 6000),
    (5, 2, 5800),
    (5, 3, 5600),
    (5, 4, 5400),
    (5, 5, 5200);