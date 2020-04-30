import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';


const Lista = (props) => {
    return(
        <div>
            <div className="lista-atividades">

                <div className="detalhes-lista">
                    <p>Atividade:{props.atividade}</p>
                    <p>Data:{props.data}</p>
                </div>
    
                <div className="detalhes-listaa">
                    <Link to={`/Detalhes`} className="click-botao">ver detalhes</Link>
                </div>
            </div>

            <div className="divisao-atividades"></div>
        </div>
    );

}

export default Lista;