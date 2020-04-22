import React, { Component } from 'react';
import './style.css';

const Modal = (props) => {

    // const validationModal = (event) => {
    //     this.setState({dadosModal: event.target.value})
    //     console.log(this.state.dadosModal);
    //  } 

     return(
        
        <div className={"modal show-" + props.show}>
                <div className="container-modal">
                <h4>Deixe um comentário</h4>
                <input type="text" className="input-comentario" id="comentario" name="comentario" onChange={props.dadosModal}></input>
                <button onClick={props.toggleModal}>Fechar</button>

            </div>
            
        </div>
    )
}

export default Modal;