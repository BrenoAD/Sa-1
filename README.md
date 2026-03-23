# API Sa-1 - Node.Js + Express
API REST simples para gerenciar tarefas
 
## Pré-requisitos
- Node.js instalado
 
##   Como rodar
 
### Instalar dependências
```bash
npm i
```
 
### Iniciar  servidor
```bash
node index.js
```
 
### Acessar
Abra o nevegador em: `http://localhost:3000`
 
### Endpoints

### Tarefas

| Método | Endpoint | Descrição |
|--------|----------|----------|
| GET | `/tarefas` | Lista todos os alunos |
| GET | `/tarefas/:id` | Buscar um aluno específíco |
| POST | `/tarefas` | Cria um novo aluno |
| PUT | `/tarefas/:id` | Atualiza um aluno |
| DELETE | `/tarefas/:id` | Remove um aluno |



## Tecnologias
- Node.js
- Express

## Notas
- Os dados são armazenados em memórias (reiniciar o servidor apaga tudo)
