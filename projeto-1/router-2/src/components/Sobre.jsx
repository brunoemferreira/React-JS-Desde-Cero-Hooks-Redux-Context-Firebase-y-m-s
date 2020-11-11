import React, {useEffect, useState} from 'react'

const Sobre = () => {
  
  const [equipe, setEquipe] = useState([]);

  useEffect(() => {
    // console.log('useEffect')
    obterDados(); 
  },[])

  const obterDados = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    const users = await data.json();
    // console.log(users);
    setEquipe(users);
;  }

  return (
    <div>
      <h1>Sobre</h1>
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
  )
}

export default Sobre
