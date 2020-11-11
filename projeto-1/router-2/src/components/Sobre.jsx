import React, {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';

const Sobre = () => {
  
  const [equipe, setEquipe] = useState([]);
  const [civilizacao, setCivilizacao] = useState([]);

  useEffect(() => {
    // console.log('useEffect')
    obterDados(); 
    obterDadosAgeOfEmpires();
  },[])

  const obterDados = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await data.json();
    setEquipe(users);
  }
   
  const obterDadosAgeOfEmpires = async () => {
    const dados = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations');
    const civilizacaoAPI = await dados.json();
    setCivilizacao(civilizacaoAPI.civilizations);
  }

  return (
    <>
    <div>
      <h1>Usuários</h1>
      <ul>
        {
          equipe.map(item => (
            <li key={item.id}>
               {item.name} - {item.email}
            </li>
          ))
        }
      </ul>
    </div>
    <div>
    <h1>Civilizações</h1>
    <ul>
      {
        civilizacao.map(item => (
          <li key={item.id}>
            <Link to={`/sobre/${item.id}`} >
                {item.name} - {item.expansion}
            </Link>
          </li>
        ))
      }
    </ul>
  </div>
  </>
  )
}

export default Sobre
