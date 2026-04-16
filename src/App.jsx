import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'
import CapturaDados from './CapturaDados'


const App = () => {
 return (
  <div className="container rounded">
    <CapturaDados />

                 
  </div>
  )
}

const root = ReactDOM . createRoot (
document . getElementById ('root'))
root . render ( < App / >)
