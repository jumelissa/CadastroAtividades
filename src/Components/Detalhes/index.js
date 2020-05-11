import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import Modal from '../Modal/modal';
import Api from '../../services/api';
import { FaArrowLeft } from "react-icons/fa";
import ModalRemover from "../ModalRemover/index";

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
            dadosModal: '',
            comments: '',
            task_id: '',
            modal: false
            
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


        dadosModal = (e) => {
            let dadosModal = this.state.dadosModal
            this.setState({dadosModal: this.state.dadosModal, comments: e.target.value})
            console.log(dadosModal);
    } 

        salvarComentario = async (e) => {
            let id_task = this.props.match.params.id;
            let comments = await Api.post(`/comments`,{id_task, comments: this.state.comments})
            this.setState({showModal: false})
            console.log(comments)

        }



 
    modal = () => {
                this.setState({showModal:!this.state.showModal})
            }

            modall = () => {
                this.setState({modal:!this.state.modal})
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
                            <input type="text" value={this.state.comments} name="comments" onChange={this.atualizarEstado} disabled={this.state.editarDisabled} className="input-detalhes"/>
                        </div>

                    </form>
                
                

                        <div className="botoes">
                            <button className="botao-comentario" onClick={this.modal}>Comentario</button>
                            <button onClick={this.editarDetalhes} className="editar">
                                {
                                    this.state.editarDisabled ? "Editar" : "Salvar"
                                }</button>
                            <button onClick={this.modall} className="remover">Remover</button>
                        </div>
                        

                            
                        </div>

                        <Modal comments={this.state.comments} show={this.state.showModal} toggleModal={this.modal} dadosModal={this.dadosModal} salvarComentario={this.salvarComentario}/>

                        <ModalRemover openModal={this.modall} shoow={this.state.modal} removerDetalhes={this.removerDetalhes}/>
                    </>
                
        )
    } 
}
