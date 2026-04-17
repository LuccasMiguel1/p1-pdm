import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import CapturaDados from './CapturaDados'
import ExibeDados from './ExibeDados'
import { useState } from 'react'



const App = () => {
  const [resultados, setResultados] = useState({
  acum: 0,
  invest: 0,
  juros: 0,
  aporte: 0,
  rent: 0
  })

 return (
  <div className="container rounded">
    <CapturaDados onCalcular={setResultados} />
    <ExibeDados
      acum={resultados.acum}
      invest={resultados.invest}
      juros={resultados.juros}
      aporte={resultados.aporte}
      rent={resultados.rent}
    />       
  </div>
  )
}

const root = ReactDOM . createRoot (
document . getElementById ('root'))
root . render ( < App / >)
