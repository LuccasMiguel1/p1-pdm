import React from 'react'

const Historico = ({ historico }) => {
  return (
    <div className="container mt-3">
      <h3>Histórico de Simulações</h3>
      <div className="card-header border rounded">
        <div className="row ">
          <div className="col-md-6 mb-2">
            <p>Data</p>
          </div>
          <div className="col-md-6 text-end">
            <p>Valor final</p>
          </div>
        </div>
      </div>
      <div className='card-body border'>
        <ul className="list-group">
          {historico.map((item, index) => (
          <li key={index} className="list-group-item d-flex justify-content-between">
            <span>{item.data}</span>
            <span>R$ {item.valorFinal.toFixed(2)}</span>
          </li>
            ))}
        </ul>
      </div>
    </div>
  )
}

export default Historico
