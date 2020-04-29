import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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

                    <form>
                     <label>Atividade:</label>
                    <input type="text" className="atividade" id="atividade" name="atividade" onChange={this.updateDadosAtividade}/>
                
                    <label className="data">Data:</label>
                    <input type="text" id="data" name="data" onChange={this.updateDadosData}/>

                    
                    <label>Descrição:</label>
                    <textarea id="descricao" rows="3" cols="41" onChange={this.updateDadosDescricao}></textarea>
                    
                    
                    <input type="submit" value="Cadastrar" className="next" onClick={this.salvarDados}/>
                        </form>

               </div>

                    <hr></hr>

                    <h3 className="lista-de-atividades">Lista de atividades</h3>

                    {this.state.dadosLista.map((e) => {
                        return (
                        <Lista data={e.data} atividade={e.atividade} />
                    )})}
            
                
                </>
        )
    }
}