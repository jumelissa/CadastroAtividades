import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default class Login extends Component {
    
    state = {
        email: '',
        senha: ''
    }



    validationemail = async (event) => {
        let validor = false;
        await this.setState({email: event.target.value})
        let finalTermo = this.state.email.slice(this.state.email.length-4, this.state.email.length)
        if (this.state.email.length > 7) {
            if (finalTermo === ".com")
            {
                const email=this.state.email.split("");
                email.forEach(letra => {
                    if (letra === "@") {
                        validor = true;
                    }
                } )

            } else {
                console.log("O email tem que ter um dominio")
            }

        } else { 
            console.log("O email tem que ter mais de 7 letras")
        } if (validor) {
            console.log("seu email esta valido")
        }


    }

    validationsenha = (event) => {
        let string = event.target.value;
        let pattern = /(?=.*[a-zA-Z])/g;
        let pattern2 = /(?=.*[0-9])/;
        if (pattern.test(string)) {
            console.log("Valido");
            if (pattern2.test(string)) {
                console.log("senha ok")
            }
        } else {
                console.log("senha incorreta");
            
        }




        this.setState({senha: event.target.value})
        console.log(this.state.senha);
        
        }
    


    render() {
        return(
            <div className="container">
                <h1>LOGIN</h1>
                <form>
                    <input type="text" className="email" placeholder="Email" id="email" name="email" onChange={this.validationemail}></input><br></br>

                    <input type="password" className="senha" placeholder="Senha" id="senha" name="senha" onChange={this.validationsenha}></input><br></br>

                    <div className="remember">
                    <input type="checkbox" className="check"></input>
                    <label> Remember Me</label>
                    </div>

                    <div className="botao">
                    <Link to="/Cadastro" className="click-botao">Sign in</Link>
                    </div>
        
                </form>
            </div>
        )
    }
}