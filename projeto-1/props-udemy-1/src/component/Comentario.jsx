import React from 'react'
import Imagem from './Imagem';

const Comentario = (props) => {
  return (
    <div className="media">
      <Imagem urlImagem={props.urlImagem} /> 
      <div className="media-body">
        <h5 className="mt-0">
          {props.pessoa}
        </h5>
        {props.texto}
      </div>  
    </div>
  )
}

export default Comentario
