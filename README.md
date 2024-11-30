# Kill Bill Bar & Grill - Cardápio do Restaurante

Bem-vindo ao projeto do cardápio do restaurante **Kill Bill Bar & Grill**! Este projeto foi desenvolvido utilizando Node.js no backend e EJS como engine de visualização para o frontend.

# Feito por:
Ian Firmino RA: 2868987
Alex Pereira RA: 2759913
Thiago Reis RA: 2881050
Stefanne Souza RA: 2757073

## Estrutura do Projeto

O projeto está organizado da seguinte forma:

```
/backend
    /config
    /controllers
    /models
    /services
/frontend
    /css
    /icons
    /js
    /views
        /partials
```

### Tecnologias Utilizadas

- **Backend**: Node.js
- **ORM**: Sequelize com MySQL
- **Frontend**: Vanilla JavaScript, EJS (Embedded JavaScript) e Booststrap

## Rotas da API

As seguintes rotas estão disponíveis para manipulação do cardápio:

### `/api/menu`

- `GET` - **MenuController.getAll**: Retorna todos os pratos cadastrados na tabela menu.
- `POST` - **MenuController.createItem**: Cria um novo prato na tabela menu.
- `DELETE` - **MenuController.deleteById**: Deleta um prato da tabela menu pelo ID.

### `/api/menu/:id`

- `GET` - **MenuController.getById**: Busca um prato na tabela menu pelo ID.

### `/api/menu/:category`

- `GET` - **MenuController.getByCategory**: Busca todos os pratos pela categoria do prato cadastrado.

## Páginas do Frontend

Existem três páginas principais no projeto:

- `/` - Tela inicial do projeto.
- `/new` - Criar um novo item para o cardápio:
![Texto Alternativo](https://github.com/IanFirmino/restaurant-menu.full/blob/main/frontend/icons/route-new.png)

- `/menu` - Visualizar todos os itens cadastrados (Na página `/menu`, você também pode deletar itens.):
![Texto Alternativo](https://github.com/IanFirmino/restaurant-menu.full/blob/main/frontend/icons/route-cardapio.png)

## Como Rodar o Projeto

Para executar o projeto localmente, siga os passos abaixo:

1. Clone o repositório:
   ```bash
   git clone <URL_DO_REPOSITORIO>
   ```

2. Navegue até o diretório do projeto:
   ```bash
   cd <NOME_DO_DIRETORIO>
   ```

3. Instale todas as dependências:
   ```bash
   npm install
   ```
4. Crie um banco de dados em MySQL localhost chamado "restaurant_menu".
   
6. Configure o arquivo `.env.development` com as credenciais do seu banco de dados.
   
8. Inicie o projeto:
   ```bash
   npm start
   ```

### Observações

- Ao iniciar o projeto, a tabela será criada automaticamente. Para isso, é necessário que o banco de dados esteja configurado corretamente e já existente.
- Certifique-se de ter o MySQL rodando e acessível.
