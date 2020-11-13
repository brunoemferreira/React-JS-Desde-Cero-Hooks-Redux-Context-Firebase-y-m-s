import React, {useEffect} from 'react';
import { firebase } from './firebase';

function App() {

  useEffect(() => {
     
    const obterDados = async () => {
      try {
          // declarar a chamada di firestore como constante evita que 
          // haja loop de requisições sempre conferir o console do chrome
          // para ver a quantidade de requisições que são feitas na chamada 
          // da função de obter dados 
          const db = firebase.firestore();
          const data = await db.collection('tarefas').get()
          console.log(data);
      } catch(error) {
         console.log(error);
      }
    }
    obterDados()
  }, [])

  return (
    <div className="container">
       Teste
    </div>
  );
}

export default App;
