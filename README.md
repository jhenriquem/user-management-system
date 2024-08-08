<h1 align="center"> 👨‍💻  User management system </h1> 

Um sistema de gerenciamento de usuários, permite realizar a ação de cadastro e login, tendo uma página de perfil pessoal para o usuário. Cada página contém o respectivo fluxo de trabalho da ação a ser realizada( login, cadastro ou load das informações no perfil)

##### :point_right: [ Project Live ](https://jhenriquem.github.io/user-management-system/) or [ API Link ](https://user-management-system-api-ez1z.onrender.com/api/user/)

---
## 🌐 API
Todo o código da API estar na pasta server e na branch [server](https://github.com/jhenriquem/user-management-system/tree/server) 

### 📋 Funcionalidades e características 

- Uso da arquitetura REST
- Toda a API foi criada no ambiente node.js/express com typescript
- MongoDB para armazenar os dados
- O sistema de autenticação usa JWT para validar os usuários

### 🔑 Chave
A chave da API é um sistema de segurança entre cliente e servidor. Você a cria e a disponibiliza para que o cliente possa fazer requisições.

É aconselhável armazená-la em uma variável de ambiente.

### 🚩 Endpoints

Todos os endpoints exigem um cabeçalho de autorização com a chave da API, como: `Authorization: Basic <apikey>`

#### GET `/api/user/`
Obtém os dados do usuário autenticado

Exemplo de resposta:
```json
{
    "statusMessage": "Successful",
    "data" : {
        "name" : "João",
        "lastname" : "Santos",
        "registration_date" : "",
    }
}
```

#### POST `/api/user/`
Adicionar um novo usuário

Requer um corpo JSON com os seguintes campos:
- `name`: nome d usuário
- `lastname` : sobrenome do usuário
- `date_of_birth` : data de nascimento do usuário
- `registration_date` : data de registro do usuário
- `email` : e-mail do usuário
- `password` : senha do usuário

Exemplo de resposta:
```json
{
"statusMessage": "Success registering new user",
}
```

#### POST `/api/user/auth`
Autenticar o usuário

Requer um corpo JSON com os seguintes campos:
- `email` : e-mail do usuário
- `password` : senha do usuário

Exemplo de resposta:

```json
{
"statusMessage": "Authenticated",
"token": "jwt token"
}
```

#### ❌ Se houver um erro
Se houver algum erro interno na API

Exemplo de resposta:
```json
{
"statusMessage": "Error",
"error" : "error message"
}

```

