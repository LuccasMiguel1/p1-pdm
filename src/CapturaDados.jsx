import react from "react";

const CapturaDados = () => {
    return (
        <div className="container rounded">
            <h2>Simulador de Investimentos</h2>
            <p>Descubra quanto seu dinheiro pode render com juros compostos</p>
            <div className="row">
                <div className="col-md-6 mb-2">
                    <p>Valor Inicial (R$)</p>
                    <input type="text" className="form-control"/>
                </div>
                <div className="col-md-6">
                    <p>Aporte Mensal (R$)</p>
                    <input type="text" className="form-control"/>
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 mb-2">
                    <p>Taxa de juros (% ao mês)</p>
                    <input type="text" className="form-control"/>
                </div>
                <div className="col-md-6">
                    <p>Período (meses)</p>
                    <input type="text" className="form-control mb-1"/>
                </div>
            </div>
            <button className="col-8 me-5 mb-1 rounded">Calcular</button>
            <button className="col-3 rounded">Limpar</button>
        </div>
    )


}

export default CapturaDados;