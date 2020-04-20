import React from 'react';
import './style.css';
import { Link } from 'react-router-dom';

const Detalhes = (props) => {
        return(
            <div className="container3">
                <h2 className="detalhes-atividade">Detalhes da atividade</h2>

                <div className="dados-detalhes">
                    <p>Atividade:{props.atividade}</p>
                    <p>Data:{props.data}</p>
                    <p>Descrição:{props.descricao}</p>
                    <p>Comentário:</p>
                </div>
                

                        <div className="botoes">
                            <button className="editar">Editar</button>
                            <button className="remover">Remover</button>
                        </div>
                        
                    
                            <div>
                                <Link to="/Cadastro" className="voltar">voltar</Link>
                            </div>
                            
                        </div>
                    
                
        )
    }
export default Detalhes;