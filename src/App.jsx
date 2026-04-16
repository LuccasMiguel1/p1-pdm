import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import CapturaDados from './CapturaDados'
import ExibeDados from './ExibeDados'


const App = () => {
 return (
  <div className="container rounded">
    <CapturaDados />
    <ExibeDados />
                 
  </div>
  )
}

const root = ReactDOM . createRoot (
document . getElementById ('root'))
root . render ( < App / >)
