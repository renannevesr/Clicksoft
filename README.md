## Desafio da Clicksoft utilizando AdonisJS.

> Principais características deste desafio:

### Aluno
+ Cadastro do Aluno
+ Editar dados do Aluno
+ Excluir dados do Aluno
+ Consulta dados dos Aluno
+ Consultar todas as salas que deverá comparecer

### Professor
+ Cadastro do Professor
+ Editar dados do Professor
+ Excluir dados do Professor
+ Consulta dados dos Professor
+ Cadastro da Sala
+ Editar dados da Sala
+ Excluir dados da Sala
+ Consulta dados da Sala
+ Alocar Aluno em uma Sala
+ Consultar todos os alunos de uma sala 

## Tecnologias utilizadas:

<table>
  <tr>
    <td>NodeJS</td>
    <td>AdonisJS</td>
    <td>Lucid</td>
    <td>SQLite</td>
  </tr>
  <tr>
    <td>18.15.0</td>
    <td>5.9.0</td>
    <td>18.3.0</td>
    <td>3.41.1</td>
  </tr>
</table>



## Para rodar a aplicação

```
npm install
node ace migration:run
node ace serve 
```

## Observações:
- A rota padrão da url é http://127.0.0.1:3333/api;

- Na rota de listar alunos da sala deve ser passada na rota GET o id da sala ("/alocacoes/:idSala/alunos"), por exemplo ("/alocacoes/9/alunos");

- Na rota do aluno listar suas salas deve ser passada na rota GET o id do aluno ("/alocacoes/:id/salas"), por exemplo ("/alocacoes/2/salas/");

- Na rota de excluir um aluno de uma sala deve ser passada na rota GET o id do Aluno o id da sala e o id do professor ("/alocacoes/:idAluno/salas/:idSala/professores/:idProfessor"), por exemplo ("/alocacoes/7/salas/9/professores/7");

