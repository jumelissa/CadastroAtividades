import React, { Component } from 'react';
import './style.css';
import { Link } from 'react-router-dom';

export default class Login extends Component {
    
    state = {
        email: '',
        senha: '',
        rotacadastro: '',
        senhaCorreta: false,
        emailCorreto: false
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
                        this.setState({emailCorreto: true})
                        if (this.state.emailCorreto === true && this.state.senhaCorreta ) {
                            this.setState({rotacadastro: '/Cadastro'});
                        }
                        validor = true;
                    }
                } )

            } else {
                this.setState({rotacadastro: ''});
                this.setState({emailCorreto: false})
                console.log("O email tem que ter um dominio");
            }

        } else { 
            this.setState({rotacadastro: ''});
            this.setState({emailCorreto: false})
            console.log("O email tem que ter mais de 7 letras");
        } if (validor) {
            console.log("seu email esta valido");
        }


    }

    validationsenha = (event) => {
        let string = event.target.value;
        let pattern = /(?=.*[a-zA-Z])/g;
        let pattern2 = /(?=.*[0-9])/;
        if (pattern.test(string)) {
            console.log("A senha precisa ter numeros");
            if (pattern2.test(string)) {
                this.setState({senhaCorreta: true})
                if (this.state.emailCorreto === true && this.state.senhaCorreta ) {
                    this.setState({rotacadastro: '/Cadastro'});
                }
                console.log("senha ok")
            }
        } else {
            this.setState({rotacadastro: ''});
            this.setState({senhaCorreta: false})
                console.log("senha valida");
            
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
                    <a href={this.state.rotacadastro} className="click-botao">Sign in</a>
                    </div>
        
                </form>
            </div>
        )
    }
}