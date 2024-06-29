# Cadastro de Clientes

Este é um projeto de cadastro de clientes utilizando HTML, CSS, PHP e MySQL. O projeto implementa as quatro operações CRUD (Create, Read, Update, Delete) para gerenciar os dados dos clientes.

## Estrutura do Projeto

- **frontend/**
  - `index.html`: Página principal do projeto.
  - `styles.css`: Arquivo de estilo para a página.
  - `script.js`: Script JavaScript para manipulação do DOM e interação com o backend.

- **backend/**
  - `db.php`: Arquivo de conexão com o banco de dados.
  - `create.php`: Script PHP para inserir novos clientes.
  - `read.php`: Script PHP para listar clientes.
  - `update.php`: Script PHP para atualizar dados dos clientes.
  - `delete.php`: Script PHP para deletar clientes.

## Requisitos

- Servidor Web (Apache, Nginx, etc.)
- PHP
- MySQL

## Instalação

1. Clone o repositório:

    ```bash
    git clone https://github.com/seu-usuario/cadastro-clientes.git
    cd cadastro-clientes
    ```

2. Configure o banco de dados MySQL:

    ```sql
    CREATE DATABASE clienteDB;

    USE clienteDB;

    CREATE TABLE clientes (
        id INT AUTO_INCREMENT PRIMARY KEY,
        nome VARCHAR(100) NOT NULL,
        email VARCHAR(100) NOT NULL,
        telefone VARCHAR(15),
        endereco VARCHAR(255)
    );
    ```

3. Configure a conexão com o banco de dados no arquivo `db.php`:

    ```php
    // backend/db.php
    <?php
    $servername = "localhost";
    $username = "root";
    $password = "";
    $dbname = "clienteDB";

    $conn = new mysqli($servername, $username, $password, $dbname);

    if ($conn->connect_error) {
        die("Conexão falhou: " . $conn->connect_error);
    }
    ?>
    ```

4. Inicie o servidor web e acesse o projeto através do navegador:

    ```
    http://localhost/cadastro-clientes/frontend/index.html
    ```

## Uso

1. Preencha o formulário com os dados do cliente.
2. Clique em "Salvar" para cadastrar ou atualizar um cliente.
3. Os clientes cadastrados serão listados na tabela abaixo do formulário.
4. Use os botões "Editar" e "Deletar" para gerenciar os clientes.

## Estrutura do Código

### Frontend

- `index.html`: Estrutura básica da página, incluindo o formulário de cadastro e a tabela de listagem.
- `styles.css`: Estilização da página.
- `script.js`: Manipulação do DOM e requisições assíncronas para o backend.

### Backend

- `db.php`: Conexão com o banco de dados MySQL.
- `create.php`: Insere um novo cliente no banco de dados.
- `read.php`: Retorna uma lista de todos os clientes em formato JSON.
- `update.php`: Atualiza os dados de um cliente existente.
- `delete.php`: Deleta um cliente do banco de dados.

## Contribuição

1. Faça um fork do projeto.
2. Crie uma nova branch: `git checkout -b minha-nova-funcionalidade`
3. Faça as alterações e commit: `git commit -m 'Adiciona nova funcionalidade'`
4. Envie para o repositório original: `git push origin minha-nova-funcionalidade`
5. Crie uma pull request.

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.
