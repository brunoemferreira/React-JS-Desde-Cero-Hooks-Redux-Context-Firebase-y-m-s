import React, {useEffect, useState} from 'react';
import { firebase } from './firebase';

function App() {

  const [tarefas, setTarefas] = useState([]);
  const [tarefa, setTarefa] = useState('');

  useEffect(() => {
     
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

  const cadastrar = async (e) => {
     e.preventDefault();

     if(!tarefa.trim()) {
       console.log('está vazio')
       return
     }

     console.log(tarefa);
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
                  </li>
                ))
              }
            </ul>
         </div>
         <div className="col-md-6">
           <h3>Formulario</h3>  
           <form onSubmit={cadastrar}>
              <input type="text"
                     placeholder="Insira uma tarefa"
                     className="form-control mb-2"
                     onChange={e => setTarefa(e.target.value)}
                     value={tarefa}/> 
               <button className="btn btn-dark btn-block"
                        type="submit">Cadastrar</button>                  
           </form> 
         </div>
       </div>
    </div>
  );
}

export default App;
