import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.css';


export default class Cadastro extends Component {
    constructor(props) {
        super(props) 
        this.state = {
           
        }

    }


    render(props) {
    return(
        <div>
            <div className="lista-atividades">

                <div className="detalhes-lista">
                    <p>Atividade:{this.props.atividade}</p>
                    <p>Data:{this.props.data}</p>
                </div>
    
                <div className="detalhes-listaa">
                    <Link to={`/Detalhes/${this.props.id}`} className="click-botao">ver detalhes</Link>
                </div>
            </div>

            <div className="divisao-atividades"></div>
        </div>
    );

}  
 }

