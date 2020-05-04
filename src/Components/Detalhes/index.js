import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Modal from '../Modal/modal';
import Api from '../../services/api';

export default class Detalhes extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            showModal: false,
            dadosModal: '',
            listaFiltrada: {}
            
        }

    }

    componentDidMount() {
        console.log("estou carregando");
        this.carregarDetalhes();
    }

    carregarDetalhes = async () => {
        let id = this.props.match.params.id;
        let filtro = await Api.get(`/tasks?id=${id}`);
        filtro = filtro.data[0];
        await this.setState({listaFiltrada: filtro});
        console.log(this.state.listaFiltrada);

    }
    

    dadosModal = (event) => {
        this.setState({dadosModal: event.target.value})
        console.log(this.state.dadosModal);
    } 


 
    modal = () => {
                this.setState({showModal:!this.state.showModal})
            }

    render(props) {
        const {title, due_date, description}=this.state.listaFiltrada
        return(
            <>
            <div className="container3">
                <h2>Detalhes da atividade</h2>

                <div className="dados-detalhes">
                    <p>Atividade{title}</p>
                    <p>Data:{due_date}</p>
                    <p>Descrição:{description}</p>
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
