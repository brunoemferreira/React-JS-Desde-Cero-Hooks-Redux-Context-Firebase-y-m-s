import React from 'react';

function App() {
  return (
    <div className="container mt-5">
      <h1 className="text-center">CRUD Simples</h1>
      <hr/>
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de Tarefas</h4>
          <ul className="list-group">
            <li className="list-group-item">
              <span className="lead">Nome da tarefa</span>
              <button className="btn btn-danger btn-sm float-right mx-2">Excluir</button>
              <button className="btn btn-warning btn-sm float-right">Editar</button>
            </li>
          </ul>
        </div>
        <div className="col-4">
          Formulário
        </div>
      </div>
    </div>
  );
}

export default App;
