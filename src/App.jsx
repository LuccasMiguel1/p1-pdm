import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import CapturaDados from './CapturaDados'
import ExibeDados from './ExibeDados'
import { useState } from 'react'
import Historico from './Historico'



const App = () => {
  const [resultados, setResultados] = useState({
  acum: 0,
  invest: 0,
  juros: 0,
  aporte: 0,
  rent: 0
  })

  const [historico, setHistorico] = useState([])

  const handleCalculo = (dados) => {
  setResultados(dados) 

  const novaSimulacao = {
    data: new Date().toLocaleString(),
    valorFinal: dados.acum
  }

  setHistorico([...historico, novaSimulacao])
}

 return (
  <div className="container rounded">
    <CapturaDados onCalcular={handleCalculo} />
    <ExibeDados
      acum={resultados.acum}
      invest={resultados.invest}
      juros={resultados.juros}
      aporte={resultados.aporte}
      rent={resultados.rent}
    />       
    <Historico historico={historico}/>
  </div>
  )
}

const root = ReactDOM . createRoot (
document . getElementById ('root'))
root . render ( < App / >)
