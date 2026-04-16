import react from "react";

const ExibeDados = () => {
    return (
        <div className="container mt-4 rounded">
            <div class="card border">
                <div class="card-header">
                    <p>Valor Final Acumulado
                        <h1 className="text-success">R$</h1>
                    </p>
                </div>
                <div class="card-body">
                    <div className="row ">
                        <div className="col-md-6 mb-2">
                            <p>Total investido <br />
                                <b>R$ </b>
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>Juros acumulados <br />
                                <b>R$ </b>
                            </p>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-md-6 mb-2">
                            <p>Nº de aportes <br />
                                <b>R$ </b>
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>Rentabilidade <br />
                                <b className="text-success">+ %</b>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ExibeDados;