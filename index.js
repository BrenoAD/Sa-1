const express = require("express")
const app = express()

app.use(express.json())

const tarefas =[
    {
        id:1,
        titulo: "Organizar a papelada",
        descricao: "Organizar os papéis sobre a empresa.",
        status: "Concluida"
        
    },

    {
        id:2,
        titulo: "Falar com funcionários novos",
        descricao: "Falar com funcionários novos da empresa.",
        status: "Em andamento"
        
    },

    {
        id:3,
        titulo: "Limpar a sala de reuniões",
        descricao: "Limpar a sala onde ocorre as reuniões da empresa.",
        status: "Pendente"
        
    }
]





app.post("/tarefas", (req, res) => {
    const {titulo, descricao, status} = req.body;

     if(!titulo || !descricao || !status ){
        return res.status(400).json({ erro: "Todos os campos sao obrigatórios"})
    }

    const novaTarefa = {
        id: tarefas.length + 1,
        titulo,
        descricao,
        status,
       
    };
    tarefas.push(novaTarefa);
    return res.status(201).json(novaTarefa)
});

app.get("/tarefas", function(req, res){
    const titulo = req.query.titulo

    if (!titulo){
        return res.json(tarefas)
    }
    const tarefasFiltradas = tarefas.filter(f => f.titulo == titulo)
    
    res.json(tarefasFiltradas)
});


app.get("/tarefas/:id", function(req, res){
    const id = req.params.id

    const tarefasFiltradas = tarefas.find(f => f.id == id)
    if (!tarefas){
        return res.status(404).json({erro: "Tarefa não encontrada"})
    }
    
    
    res.json(tarefasFiltradas)
});

app.put("/tarefas/:id", function (req, res) {
    const id = parseInt(req.params.id)


    const { titulo, descricao, status } = req.body


    if (!titulo || !descricao || !status) {
        return res.status(400).json("Titulo, descrição, status são obrigatórios")
    }


    const indexDasTarefas= tarefas.findIndex(a => a.id == id)

    if (tarefas[indexDasTarefas].status === "Concluida") {
        return res.status(400).json("Não pode ser alterada")
    }

    if (indexDasTarefas === -1) {
        return res.status(404).json("Tarefa não encontrada")
    }

    tarefas[indexDasTarefas].status = status
    tarefas[indexDasTarefas].titulo = titulo
    tarefas[indexDasTarefas].descricao = descricao

    return res.json(tarefas[indexDasTarefas])
});

app.delete("/tarefas/:id", function (req, res) {
    const id = parseInt(req.params.id)
    const index = tarefas.findIndex(a => a.id === id)

    const tarefaremovida = tarefas.splice(index, 1)

    return res.status(204).json("Tarefa deletada com sucesso!")
})




app.listen(3000, () => {
    console.log("Servidor rodando em http://localhost:3000")
});