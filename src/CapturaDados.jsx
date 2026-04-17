import react from "react";
import { useState } from "react";

const CapturaDados = ({ onCalcular }) => {
    const [valor, setValor] = useState ('')
    const [aporte, setAporte] = useState ('')
    const [juros, setJuros] = useState ('')
    const [periodo, setPeriodo] = useState ('')    


    const calcular = () => {
        const ju = juros.replace(',', '.')
        const ap = Number(aporte.replace(',', '.'))
        const vl = Number(valor.replace(',', '.'))
        let total = vl
        for (let i = 0; i < periodo; i++) { total = total * (1 + (ju/100)) + ap}

        const invest = vl + (ap * periodo)
        const jurosAcumulados = total - invest
        const rent = invest === 0 ? 0 : ((total / invest) - 1) * 100

        onCalcular({
            acum: total, invest, juros: jurosAcumulados, aporte: periodo, rent
        })
    }

    const limpar = () => {
        setValor(''); setAporte(''); setJuros(''); setPeriodo('')
        onCalcular({
            acum: 0, invest: 0, juros: 0, aporte: 0, rent:0
        })
    }

    return (
        <div className="container rounded">
            <h2>Simulador de Investimentos</h2>
            <p>Descubra quanto seu dinheiro pode render com juros compostos</p>
            <div className="row">
                <div className="col-md-6 mb-2">
                    <p>Valor Inicial (R$)</p>
                    <input type="text" className="form-control" value={valor} onChange={(e) => setValor(e.target.value)} />
                </div>
                <div className="col-md-6">
                    <p>Aporte Mensal (R$)</p>
                    <input type="text" className="form-control" value={aporte} onChange={(e) => setAporte(e.target.value)} />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mb-2">
                    <p>Taxa de juros (% ao mês)</p>
                    <input type="text" className="form-control" value={juros} onChange={(e) => setJuros(e.target.value)} />
                </div>
                <div className="col-md-6">
                    <p>Período (meses)</p>
                    <input type="text" className="form-control mb-1" value={periodo} onChange={(e) => setPeriodo(Number(e.target.value))} />
                </div>
            </div>
            <button className="col-8 me-5 mb-1 rounded" onClick={calcular}>Calcular</button>
            <button className="col-3 rounded" onClick={limpar}>Limpar</button>
        </div>
    )

}

export default CapturaDados;