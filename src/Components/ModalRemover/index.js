import React, { Component } from 'react';
import './style.css';

export default class Modal extends Component {


    

    render(props) {
        return(
            <div className={"modal-remover shoow-" + this.props.shoow}>
                <div className="container-modall">
                    <p>Deseja remover este item?</p>

                    <div className="btn-modal">
                        <a href="/Cadastro" className="remover" onClick={this.props.removerDetalhes}>Sim</a>
                        <button onClick={this.props.openModal}>Não</button>
                    </div>
                   
                </div>

            </div>
        )
    }
}