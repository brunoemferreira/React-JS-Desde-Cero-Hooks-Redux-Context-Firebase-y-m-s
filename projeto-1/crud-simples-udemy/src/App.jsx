import React, {useState} from 'react';
import shortid from 'shortid';

function App() {
  const [tarefa, setTarefa] = useState(''); 
  const [tarefas, setTarefas] = useState([]);


  const gravarTarefa = e => {
    e.preventDefault()
    // Verifica se o campo está vazio
    if(!tarefa.trim()) {
      console.log('Elemento Vazio')
      return
    }
    console.log(tarefa)

    setTarefas([
      ...tarefas,
      {id: shortid.generate(), nomeTarefa:tarefa}
    ])

    // Limpa a Tarefa
    setTarefa('');
  }

  return (
    <div className="container mt-5">
      <h1 className="text-center">CRUD Simples</h1>
      <hr/>
      <div className="row">
        <div className="col-8">
          <h4 className="text-center">Lista de Tarefas</h4>
          <ul className="list-group">
           {
             tarefas.map(item => (
            <li className="list-group-item" key={item.id}>
              <span className="lead">{item.nomeTarefa}</span>
              <button className="btn btn-danger btn-sm float-right mx-2">Excluir</button>
              <button className="btn btn-warning btn-sm float-right">Editar</button>
            </li>
             ))
           }
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">Formulário</h4>
          <form onSubmit={gravarTarefa} >
            <input 
             type="text" 
             className="form-control mb-2"
             placeholder="Insira a Tarefa"
             onChange={ e => setTarefa(e.target.value)}
             value={tarefa}/>
             <button className="btn btn-dark btn-block" type="submit">Inserir</button>
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default App;
