import React, {useEffect, useState} from 'react'
import { useParams } from "react-router-dom"

const User = () => {
   
  const {id} = useParams();
  console.log(id);

  const [civilizacao, setCivilizacao] = useState([]);

  useEffect(() => {
    obterDadosAgeOfEmpires();
  },[])
    
  const obterDadosAgeOfEmpires = async () => {
    const dados = await fetch(`https://age-of-empires-2-api.herokuapp.com/api/v1/civilization/${id}`);
    const civilizacaoAPI = await dados.json();
    setCivilizacao(civilizacaoAPI);
  }

  return (
    <div>
        <h3>{civilizacao.name}</h3>
        <p>{civilizacao.team_bonus}</p>
    </div>
  )
}

export default User
