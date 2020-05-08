import React, { Component } from 'react';
import './style.css';
import Api from '../../services/api';
import { FaRegTimesCircle } from 'react-icons/fa';

export default class Modal extends Component {
        constructor(props) {
            super(props)
            this.state = {
                dadosModal: ''
            }
    
        }


        render() {
            return(
        
                <div className={"modal show-" + this.props.show}>

                        <div className="container-modal">

                                <div className="icon">
                                    <FaRegTimesCircle className="fechar-modal" onClick={this.props.toggleModal}/>
                                </div>

                                    <h4>Deixe um comentário</h4>

                                <div className="input-btn">
                                    <input type="text" className="input-comentario" id="comentario" name="comentario" onChange={this.props.dadosModal}/>
                                    <input type="submit" value="salvar" className="btn-salvar" onClick={this.props.salvarComentario}/>
                                </div>
                        
                        </div>
                    
                </div>
        
    
    )
}
}
