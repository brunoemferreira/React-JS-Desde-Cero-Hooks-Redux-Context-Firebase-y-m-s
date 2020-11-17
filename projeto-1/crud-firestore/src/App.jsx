import React, {useEffect, useState} from 'react';
import { firebase } from './firebase';

function App() {

  const [tarefas, setTarefas] = useState([]);
  const [tarefa, setTarefa] = useState('');
  const [modoEdicao, setModoEdicao] = useState(false);
  const [id, setId] = useState('');

  useEffect(() => {
    // Traz os dados do banco para o app 
    const obterDados = async () => {
      try {
          // declarar a chamada di firestore como constante evita que 
          // haja loop de requisições sempre conferir o console do chrome
          // para ver a quantidade de requisições que são feitas na chamada 
          // da função de obter dados 
          const db = firebase.firestore();
          const data = await db.collection('tarefas').get()
          const arrayData = await data.docs.map(doc => ({id: doc.id, ...doc.data()}))
          setTarefas(arrayData);
          console.log(arrayData);
      } catch(error) {
         console.log(error);
      }
    }
    obterDados()
  }, [])

  // Cadastra Nova Tarefa 
  const cadastrar = async (e) => {
     e.preventDefault();

     if(!tarefa.trim()) {
       console.log('está vazio')
       return
     }

     try {
       const db = firebase.firestore()
       const novaTarefa = {
         name: tarefa,
         data: Date.now()
       }
       const data = await db.collection('tarefas').add(novaTarefa)
       setTarefas([
         ...tarefas,
         {...novaTarefa, id: data.id}
       ])
       setTarefa('');

     } catch (error) {
       
     }
     console.log(tarefa);
  }
  
  // Exclui a Tarefa 
  const excluir = async (id) => {
    try {
       const db = firebase.firestore()
       await db.collection('tarefas').doc(id).delete();

       const arrayFiltrado = tarefas.filter(item => item.id !== id);
       setTarefas(arrayFiltrado);

    } catch (error) {
      console.log(error);
    }
  }

  const ativarEdicao = (item) => {
     setModoEdicao(true);
     setTarefa(item.name);
     setId(item.id);
  }
  
  const editar = async (e) => {
    e.preventDefault();

    if(!tarefa.trim()) {
      console.log('Está Vazio')
      return
    }
    try {
       const db = firebase.firestore();
       await db.collection('tarefas').doc(id).update({
         name: tarefa
       })
       
       const arrayEditado = tarefas.map( item => (
         item.id === id ? {id: item.id, data: item.data, name: tarefa } : item
       ))
       setTarefas(arrayEditado);
      
       setModoEdicao(false);
       setTarefa('');
       setId('');

    } catch (error) {
      console.log(error)
    } 
  }

  return (
    <div className="container mt-3">
       <div className="row">
         <div className="col-md-6">
            <ul className="list-group">
              {
                tarefas.map(item => (
                  <li className="list-group-item" key={item.id}>
                    {item.name}
                    <button className="btn btn-danger btn-sm float-right"
                            onClick={() => excluir(item.id)}>Excluir</button>
                    <button className="btn btn-warning btn-sm float-right mr-2"
                            onClick={() => ativarEdicao(item)}>Editar</button>
                  </li>
                ))
              }
            </ul>
         </div>
         <div className="col-md-6">
           <h3>{
                  modoEdicao ? 'Editar Tarefa' : 'Incluir Tarefa'
               }
           </h3>  
           <form onSubmit={ modoEdicao ? editar : cadastrar}>
              <input type="text"
                     placeholder="Insira uma tarefa"
                     className="form-control mb-2"
                     onChange={e => setTarefa(e.target.value)}
                     value={tarefa}/> 
               <button 
                  className= { 
                      modoEdicao ? 'btn btn-warning btn-block' : 'btn btn-dark btn-block'
                    }
                        type="submit"
                >
                    {
                       modoEdicao ? 'Editar' : 'Incluir'
                    }     
               </button>   
                                      
           </form> 
         </div>
       </div>
    </div>
  );
}

export default App;
