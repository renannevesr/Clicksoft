# Clicksoft
Desafio da Clicksoft utilizando AdonisJS

Para rodar a aplicação

```
npm install
node ace migration:run
node ace serve 
```

A rota padrão da url é http://127.0.0.1:3333/api;

Na rota de listar alunos da sala deve ser passada na rota GET o id da sala ("/alocacoes/:idSala/alunos"), por exemplo ("/alocacoes/9/alunos");

Na rota do aluno listar suas salas deve ser passada na rota GET o id do aluno ("/alocacoes/:id/salas"), por exemplo ("/alocacoes/2/salas/");

Na rota de excluir um aluno de uma sala deve ser passada na rota GET o id do Aluno o id da sala e o id do professor ("/alocacoes/:idAluno/salas/:idSala/professores/:idProfessor"), por exemplo ("/alocacoes/7/salas/9/professores/7");

