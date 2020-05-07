import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Modal from '../Modal/modal';
import Api from '../../services/api';
import { FaArrowLeft } from "react-icons/fa";

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
            description: '',
            dadosModal: ''
            
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
            if (filtro) {
                let {title, due_date, description} = filtro;
                await this.setState({title, due_date, description});
                console.log(this.state.listaFiltrada);
        }
        

    }
    

    dadosModal = (event) => {
        this.setState({dadosModal: event.target.value})
        console.log(this.state.dadosModal);
    } 

        salvarComentario = async (e) => {
            let id = this.props.match.params.id;
            // let task_id = sessionStorage.getItem('task_id');
            let task_id = {comment: this.state.dadosModal, task_id: id};
            // let comment = await Api.put(`/comments`, comment);
            console.log(task_id);
    }


 
    modal = () => {
                this.setState({showModal:!this.state.showModal})
            }

    editarDetalhes = async () => {
                let id = this.props.match.params.id;
                let tasks = {title:this.state.title, due_date:this.state.due_date, description:this.state.description}
                this.setState({editarDisabled: false});
                if (this.state.editarDisabled == false) {
                    try {
                        if (await Api.put(`/tasks/${id}`, tasks)) {
                            this.setState({editarDisabled: true})
                        }
                    } catch (error) {
                        console.log(error)
                    }
                }

                
                
            }

    removerDetalhes = async () => {
             let id = this.props.match.params.id;
             let remover = await Api.delete(`/tasks/${id}`)
             console.log(remover)

    }

    atualizarEstado = (event) => {
            this.setState({[event.target.name]: event.target.value})
    }

    render(props) {
        const {title, due_date, description}=this.state
        return(
            <>
            <div className="container3">

                <div className="header-detalhes">
                    <Link to="/Cadastro" className="link">
                        <FaArrowLeft className="icon-voltar"/>
                    </Link>
                    
                    <h2>Detalhes da atividade</h2>
                </div>
                

                
                    <form className="dados-detalhes">

                        <div className="div-dados">
                            <label>Atividade:</label>
                            <input type="text" value={title} name="title" onChange={this.atualizarEstado} disabled={this.state.editarDisabled} className="input-detalhes"/>
                        </div>

                        <div className="div-dados">
                            <label>Data:</label>
                            <input type="text" value={due_date} name="due_date" onChange={this.atualizarEstado} disabled={this.state.editarDisabled} className="input-detalhes"/>
                        </div>

                        <div className="div-dados">
                            <label>Descrição:</label>
                            <input type="text" value={description} name="description" onChange={this.atualizarEstado} disabled={this.state.editarDisabled} className="input-detalhes"/>
                        </div>

                        <div className="div-dados">
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
                        

                            
                        </div>

                        <Modal show={this.state.showModal} toggleModal={this.modal} dadosModal={this.dadosModal} salvarComentario={this.salvarComentario}/>
                    </>
                
        )
    } 
}
