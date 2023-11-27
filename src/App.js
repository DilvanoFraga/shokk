import { useState } from 'react';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario';
import Funcao from './Componentes/Função';
import Rodape from './Componentes/Rodape';

function App() {

  const funcoes = [
    {
      nome: '-------------'
    },
    {
      nome: 'Duelista',
      corPrimaria: '#FF0000',
      corSecundaria: '#FFCCCC'
    },
    {
      nome: 'Iniciador',
      corPrimaria: '#003300',
      corSecundaria: '#99FF99'
    },
    {
      nome: 'Controlador',
      corPrimaria: '#000066',
      corSecundaria: '#CCFFFF'
    },
    {
      nome: 'Sentinela',
      corPrimaria: '#FFCC00',
      corSecundaria: '#FFFFCC'
    },
    {
      nome: 'Coringa',
      corPrimaria: '#330033',
      corSecundaria: '#FFCCFF'
    }

  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
      setColaboradores([...colaboradores, colaborador])

  }

  return (
    <div className="App">
      <Banner />

      <Formulario funcoes={funcoes.map(funcao => funcao.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {funcoes.map(funcao => <Funcao 
        key={funcao.nome} 
        nome={funcao.nome} 
        corPrimaria={funcao.corPrimaria}
        corSecundaria={funcao.corSecundaria}
        colaboradores={colaboradores.filter(colaborador => colaborador.funcao === funcao.nome)}/>)}

      <Rodape/>

      
    </div>
  );
}

export default App;
