import React from 'react'
import ReactDOM from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@fortawesome/fontawesome-free/css/all.css'


const App = () => {
 return (
  <div className="container rounded">
    <h1>Hello, Investimentos</h1>          
  </div>
  )
}

const root = ReactDOM . createRoot (
document . getElementById ('root'))
root . render ( < App / >)
