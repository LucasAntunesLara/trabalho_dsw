# 🕹️ API de Jogos Retrô - DSW

## Descrição do Projeto

API RESTful desenvolvida para a disciplina de Desenvolvimento de Serviços Web, com o objetivo de gerenciar jogos clássicos, jogadores e suas pontuações, permitindo a criação de rankings competitivos.

## Tecnologias Utilizadas

- **Node.js** - Ambiente de execução JavaScript
- **Express** - Framework para construção da API
- **MySQL** - Banco de dados relacional

## Estrutura do Projeto

```
projeto/
├── src/
│   ├── controllers/
│   │   ├── jogosController.js
│   │   ├── jogadoresController.js
│   │   └── pontuacoesController.js
│   ├── routes/
│   │   ├── jogos.js
│   │   ├── jogadores.js
│   │   └── pontuacoes.js
│   ├── models/
│   │   ├── jogosModel.js
│   │   ├── jogadoresModel.js
│   │   └── pontuacoesModel.js
│   ├── config/          # Configurações
│   │   └── db.js
│   └── app.js           # Configuração principal do Express
├── server.js            # Ponto de entrada da aplicação
├── database/            # Scripts SQL
│   └── db.sql       # Criação das tabelas
├── .env                 # Variáveis de ambiente
├── package.json
└── README.md
```

## Configuração do Banco de Dados

1. Crie um banco de dados MySQL:

```sql
CREATE DATABASE jogos_retro;
```

2. Execute o script disponível em `database/db.sql` para criar as tabelas necessárias.

## Instalação e Execução

1. Clone este repositório:

```bash
git clone https://github.com/LucasAntunesLara/trabalho_dsw.git
cd trabalho_dsw
```

2. Instale as dependências:

```bash
npm install
```

3. Configure as variáveis de ambiente no arquivo `.env`:

```
DB_HOST=localhost
DB_USER=seu_usuario
DB_PASSWORD=sua_senha
DB_NAME=jogos_retro
PORT=3000
```

4. Inicie o servidor:

```bash
npm start
```

A API estará disponível em `http://localhost:3000`.

## Endpoints da API

### Módulo de Jogos

| Método | Rota         | Descrição                          |
| ------ | ------------ | ---------------------------------- |
| GET    | `/jogos`     | Retorna todos os jogos cadastrados |
| GET    | `/jogos/:id` | Retorna um jogo específico         |
| POST   | `/jogos`     | Cadastra um novo jogo              |
| PUT    | `/jogos/:id` | Atualiza um jogo existente         |
| DELETE | `/jogos/:id` | Exclui um jogo                     |

**Exemplo de corpo para POST/PUT:**

```json
{
  "nome": "Super Mario World",
  "plataforma": "Super Nintendo",
  "ano_lancamento": 1990
}
```

### Módulo de Jogadores

| Método | Rota         | Descrição                  |
| ------ | ------------ | -------------------------- |
| GET    | `/jogadores` | Retorna todos os jogadores |
| POST   | `/jogadores` | Cadastra um novo jogador   |

**Exemplo de corpo para POST:**

```json
{
  "nome": "João Silva",
  "nickname": "jsilva"
}
```

### Módulo de Pontuações

| Método | Rota               | Descrição                              |
| ------ | ------------------ | -------------------------------------- |
| POST   | `/pontuacoes`      | Registra uma nova pontuação            |
| GET    | `/ranking/:idJogo` | Retorna o ranking do jogo (top 10)     |
| GET    | `/jogos/populares` | Retorna os 3 jogos com mais pontuações |

**Exemplo de corpo para POST /pontuacoes:**

```json
{
  "jogo_id": 1,
  "jogador_id": 1,
  "pontuacao": 1500
}
```

## Regras de Negócio

- **Jogos**: ano de lançamento não pode ser futuro
- **Jogadores**: nickname deve ser único no sistema
- **Pontuações**:
  - Valor não pode ser negativo
  - Jogo e jogador informados devem existir
  - Ranking ordenado por pontuação decrescente (máx. 10 registros)

## Códigos de Status HTTP

- `200 OK` - Sucesso na operação
- `201 Created` - Recurso criado com sucesso
- `400 Bad Request` - Erro na requisição (dados inválidos)
- `404 Not Found` - Recurso não encontrado
- `500 Internal Server Error` - Erro no servidor

## Testes da API

Recomenda-se utilizar ferramentas como **Postman**, **Insomnia** ou **REST Client** para testar os endpoints.
