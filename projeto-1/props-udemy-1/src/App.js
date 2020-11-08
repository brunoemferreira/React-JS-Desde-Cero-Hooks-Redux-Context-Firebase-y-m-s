import React from 'react';
import Cumprimento from './component/cumprimento';


function App() {
  return (
    <div className="container mt-5">
     <h1>Projeto do Zero</h1>
     <Cumprimento pessoa="Bruno" idade={40}/>
    </div>
  );
}

export default App;
