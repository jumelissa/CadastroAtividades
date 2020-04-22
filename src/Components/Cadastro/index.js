import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from '../Modal/modal';
import Lista from '../Lista/index';

import './style.css';

export default class Cadastro extends Component {
    state = {
            showModal: false,
            dados : {
                atividade: "ir ao mercado",
                data: "17/04/2020",
                descricao: "preciso comprar ingredientes para fazer um bolo"
            },
            
            dadosLista: [],
            
            dadosModal: ''
    }

        dadosModal = (event) => {
        this.setState({dadosModal: event.target.value})
        console.log(this.state.dadosModal);
    } 


 
            modal = () => {
                this.setState({showModal:!this.state.showModal})
            }

            salvarDados = (e) => {
                let list = []
                list.push(this.state.dados)
                this.setState({dadosLista: [...this.state.dadosLista, this.state.dados]});
                console.log(this.state.dadosLista);
            }

            updateDadosAtividade = (e) => {
                this.setState({ dados: Object.assign({}, this.state.dados, {atividade: e.target.value})});
                console.log(e.target.value);
            }
           
            updateDadosData = (e) => {
                    this.setState({ dados: Object.assign({}, this.state.dados, {data: e.target.value})});
                console.log(this.state.dados);
            }

            updateDadosDescricao = (e) => {
                    this.setState({ dados: Object.assign({}, this.state.dados, {descricao: e.target.value})});
                console.log(this.state.dados);
            }


       

    render(props) {
    
        return(
            <>
            <div className="container2">

                <h2 className="cadastrar-atividade">Cadastrar Atividade</h2>

               <div className="container-cadastro">
               <div>
                     <label>Atividade:</label><br></br>
                    <input type="text" className="atividade" id="atividade" name="atividade" onChange={this.updateDadosAtividade}></input><br></br>
                
                    <label className="data">Data:</label><br></br>
                    <input type="text" id="data" name="data" onChange={this.updateDadosData}></input><br></br>

                    
                    <label>Descrição:</label><br></br>
                    <textarea id="descricao" rows="3" cols="41" onChange={this.updateDadosDescricao}></textarea>
                    </div>
                    
                    <div className="botoes-comentario-cadastrar">
                        <div className="botao-comentario">
                        <button onClick={this.modal}>Comentario</button>
                        </div>
                        
                        <Link to="#" className="next" onClick={this.salvarDados}>Cadastrar</Link>
                    </div>

               </div>

                    <div className="line"></div>

                    <h3 className="lista-de-atividades">Lista de atividades</h3>

                    {this.state.dadosLista.map((e) => {
                        return (
                        <Lista data={e.data} atividade={e.atividade} />
                    )})}
            </div>
                <Modal show={this.state.showModal} toggleModal={this.modal} dadosModal={this.dadosModal}/>
                </>
        )
    }
}