import react from "react";

const ExibeDados = (props) => {
    return (
        <div className="container mt-4 rounded">
            <div className="card border">
                <div className="card-header">
                    <p>Valor Final Acumulado </p>
                    <h1 className="text-success">R$ {props.acum.toFixed(2)}</h1>

                </div>
                <div className="card-body">
                    <div className="row ">
                        <div className="col-md-6 mb-2">
                            <p>Total investido<br />
                                <b>R$ {props.invest.toFixed(2)}</b>
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>Juros acumulados<br />
                                <b>R$ {props.juros.toFixed(2)} </b>
                            </p>
                        </div>
                    </div>
                    <div className="row ">
                        <div className="col-md-6 mb-2">
                            <p>Nº de aportes <br />
                                <b>{props.aporte}</b>
                            </p>
                        </div>
                        <div className="col-md-6">
                            <p>Rentabilidade <br />
                                <b className="text-success">+{props.rent.toFixed(2)}%</b>
                            </p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ExibeDados;