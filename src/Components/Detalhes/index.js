import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Modal from '../Modal/modal';

export default class Detalhes extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            showModal: false,
            dadosModal: ''
        }

    }

    dadosModal = (event) => {
        this.setState({dadosModal: event.target.value})
        console.log(this.state.dadosModal);
    } 


 
    modal = () => {
                this.setState({showModal:!this.state.showModal})
            }

    render(props) {
        return(
            <>
            <div className="container3">
                <h2>Detalhes da atividade</h2>

                <div className="dados-detalhes">
                    <p>Atividade{this.props.atividade}</p>
                    <p>Data:{this.props.data}</p>
                    <p>Descrição:{this.props.descricao}</p>
                    <p>Comentário:</p>
                </div>
                

                        <div className="botoes">
                            <button onClick={this.modal}>Comentario</button>
                            <button className="editar">Editar</button>
                            <button className="remover">Remover</button>
                        </div>
                        
                    
                            <div>
                                <Link to="/Cadastro" className="voltar">voltar</Link>
                            </div>
                            
                        </div>

                        <Modal show={this.state.showModal} toggleModal={this.modal} dadosModal={this.dadosModal}/>
                    </>
                
        )
    }
}
