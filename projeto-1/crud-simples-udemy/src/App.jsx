import React, {useState} from 'react';
import shortid from 'shortid';

function App() {
  const [tarefa, setTarefa] = useState(''); 
  const [tarefas, setTarefas] = useState([]);
  const [modoEdicao, setModoEdicao] = useState(false);

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
   
  const excluirTarefa = id => {
    /* É gerado um novo Array Filtrado das tarefas trazendo todas as 
       tarefas diferentes da que esta sendo passada no id, sendo assim 
       ao setar as tarefas ele manda tudo menos o item do id selecionado
     */
    const arrayFiltrado = tarefas.filter(item => item.id !== id );
    setTarefas(arrayFiltrado);

    }

    const editarTarefa = item => {
      setModoEdicao(true);
      setTarefa(item.nomeTarefa);
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
              <button 
                className="btn btn-danger btn-sm float-right mx-2"
                onClick={() => excluirTarefa(item.id)}
                >
                  Excluir
                </button>
              <button 
                className="btn btn-warning btn-sm float-right"
                onClick={() => editarTarefa(item)}
              >
                Editar
              </button>
            </li>
             ))
           }
          </ul>
        </div>
        <div className="col-4">
          <h4 className="text-center">
            { modoEdicao ? 'Editar Tarefa' : 'Inserir Tarefa' }
          </h4>
          <form onSubmit={gravarTarefa} >
            <input 
             type="text" 
             className="form-control mb-2"
             placeholder="Insira a Tarefa"
             onChange={ e => setTarefa(e.target.value)}
             value={tarefa}/>
             {
               modoEdicao ? (
                 <button className="btn btn-warning btn-block" type="submit">Editar</button>
               ) : ( <button className="btn btn-dark btn-block" type="submit">Inserir</button> )

             }
          </form>
          
        </div>
      </div>
    </div>
  );
}

export default App;
