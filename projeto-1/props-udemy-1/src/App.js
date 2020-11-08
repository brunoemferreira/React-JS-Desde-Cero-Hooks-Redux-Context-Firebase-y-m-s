import React from 'react';
import Cumprimento from './component/cumprimento';
import Comentario from './component/Comentario';


function App() {
  return (
    <div className="container mt-5">
     <h1>Projeto do Zero</h1>
     <Cumprimento pessoa="Bruno" idade={40}/>
     <hr/>
     <h3>Caixa de Comentários</h3>
     <Comentario 
        urlImagem="https://picsum.photos/64"
        pessoa="Bruno"
        texto="Imagem 1"
     />
     <Comentario 
        urlImagem="https://picsum.photos/64"
        pessoa="Emanuele"
        texto="Imagem 2"
     />
     <Comentario 
        urlImagem="https://picsum.photos/64"
        pessoa="Victor"
        texto="Imagem 3"
     />
    </div>
  );
}

export default App;
