import React from 'react';

const Cumprimento = (props) => {
  return (
    <div>
       <h2>{ `Cumprimentando ${props.pessoa}` }</h2>
       <p>Idade: {props.idade}</p>
    </div>
  )
}

export default Cumprimento;
