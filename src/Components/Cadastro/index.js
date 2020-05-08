import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Lista from '../Lista/index';

import './style.css';
import Api from '../../services/api';

export default class Cadastro extends Component {
    state = {
            showModal: false,
            dados : {
                title: "",
                due_date: "",
                description: ""
            },
            
            dadosLista: [],
            
            
    }

    componentDidMount() {
        console.log("estou carregando");
        this.carregarItems();
    }
    
    carregarItems = async () => {
        let user_id = sessionStorage.getItem('user_id');
        let dadosLista = await Api.get(`/tasks?user_id${user_id}`);
        dadosLista = dadosLista.data;
        this.setState({...this.state.dadosLista,dadosLista});
        console.log(this.state);
        
    }


            salvarDados = async (e) => {
                let list = []
                list.push(this.state.dados)
                this.setState({dadosLista: [...this.state.dadosLista, this.state.dados]});
                let task = {...this.state.dados,user_id: sessionStorage.getItem('user_id')};
                try {
                     let res = await Api.post(`/tasks`, task);
                     console.log(res);
                        this.setState({dados: {title: "", due_date: "",description: ""}})
                        console.log(this.state.dados);
                } catch(err) {
                    console.log(`Erro ao cadastrar ${err}`);
                
                }
                
            }


            updateDadosAtividade = (e) => {
                this.setState({ dados: Object.assign({}, this.state.dados, {title: e.target.value})});
                console.log(this.state.dados);
            }
           
            updateDadosData = (e) => {
                    this.setState({ dados: Object.assign({}, this.state.dados, {due_date: e.target.value})});
                console.log(this.state.dados);
            }

            updateDadosDescricao = (e) => {
                    this.setState({ dados: Object.assign({}, this.state.dados, {description: e.target.value})});
                console.log(this.state.dados);
            }

            

       

    render(props) {
    
        return(
            <>
            <div className="container2">

                <h2>Cadastrar Atividade</h2>

               <form className="form-cadastro" id="form-cadastro">
                 
                     <label>Atividade:</label>
                    <input type="text" className="atividade" id="atividade" value={this.state.dados.title} name="atividade" onChange={this.updateDadosAtividade}/>
                
                    <label className="data">Data:</label>
                    <input type="number" className="number" id="data" name="data" value={this.state.dados.due_date} onChange={this.updateDadosData}/>

                    
                    <label>Descrição:</label>
                    <textarea id="descricao" rows="3" cols="41" name="descricao" value={this.state.dados.description} onChange={this.updateDadosDescricao}></textarea>

                </form>

                     <input type="submit" value="Cadastrar" className="cadastro" onClick={this.salvarDados}/>
                    
                    
                       

                        <hr></hr>

                        <h2>Lista de atividades</h2>

                        {this.state.dadosLista.map((e) => {
                        return (
                        <Lista data={e.due_date} atividade={e.title} id={e.id}/>
                        )})}
            </div>

                
                </>
        )
    }
}