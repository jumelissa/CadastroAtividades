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
                    <div className="dado-api">
                        <p>Atividade:</p> <p className="dado"> {this.props.atividade}</p>
                    </div>
                   
                   <div className="dado-api">
                        <p>Data:</p> <p className="dado">{this.props.data}</p>
                   </div>
                    
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

