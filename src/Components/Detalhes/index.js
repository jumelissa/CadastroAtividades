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
            listaFiltrada: {},
            editarDisabled: true,
            title: '',
            due_date: '',
            description: ''
            
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
        let {title, due_date, description} = filtro;
        await this.setState({title, due_date, description});
        console.log(this.state.listaFiltrada);

    }
    

    dadosModal = (event) => {
        this.setState({dadosModal: event.target.value})
        console.log(this.state.dadosModal);
    } 


 
    modal = () => {
                this.setState({showModal:!this.state.showModal})
            }

    editarDetalhes = () => {
                this.setState({editarDisabled: false});
                let task_save = Api.put(`id`)
            }

    removerDetalhes = async () => {
                let remover = await Api.delete(`id`)
                console.log(remover);

    }

    atualizarEstado = (event) => {
            this.setState({[event.target.name]: event.target.value})
    }

    render(props) {
        const {title, due_date, description}=this.state
        return(
            <>
            <div className="container3">
                <h2>Detalhes da atividade</h2>

                
                    <form className="dados-detalhes">

                        <div className="divisao-detalhes">
                            <label>Atividade:</label>
                            <input type="text" value={title} name="title" onChange={this.atualizarEstado} disabled={this.state.editarDisabled} className="input-detalhes"/>
                        </div>

                        <div className="divisao-detalhes">
                            <label>Data:</label>
                            <input type="text" value={due_date} name="due_date" disabled={this.state.editarDisabled} className="input-detalhes"/>
                        </div>

                        <div className="divisao-detalhes-textarea">
                            <label>Descrição:</label>
                            <textarea rows="3" cols="41" value={description} name="description" disabled={this.state.editarDisabled} className="textarea-descricao"></textarea>
                        </div>

                        <div className="divisao-detalhes">
                            <label>Comentário:</label>
                            <input type="text" value="" className="input-detalhes"/>
                        </div>

                    </form>
                
                

                        <div className="botoes">
                            <button className="botao-comentario" onClick={this.modal}>Comentario</button>
                            <button onClick={this.editarDetalhes} className="editar">
                                {
                                    this.state.editarDisabled ? "Editar" : "Salvar"
                                }</button>
                            <button onClick={this.removerDetalhes} className="remover">Remover</button>
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
