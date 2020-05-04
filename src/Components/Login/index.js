import React, { Component } from 'react';
import './style.css';
import Api from '../../services/api';

export default class Login extends Component {
    
    state = {
        email: '',
        senha: '',
        senhaCorreta: false,
        emailCorreto: false,
        dados: []
        
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
                document.querySelector(".botao").classList.remove("disable")
            }
        } else {
            this.setState({rotacadastro: ''});
            this.setState({senhaCorreta: false})
                console.log("senha valida");
                document.querySelector(".botao").classList.add("disable")
            
        }
        this.setState({senha: event.target.value})
        console.log(this.state.senha);
        
        }

        logarEmail = async (event) => {
            event.preventDefault();
            try {
                let v_email = this.state.email;
                let res = await Api.get(`/Users?email=${v_email}`);

                console.log(res);
                if (res.data != null) {
                    const {id, email, password} = res.data[0];
                    
                    if (password === this.state.senha) {
                        sessionStorage.setItem('user_id', id)
                        sessionStorage.setItem('user_email', email)

                        sessionStorage.setItem('id', id)
                        this.props.history.push('/Cadastro')
                    } else {
                        console.log(`voce não esta logado`)
                    }
                }
            } catch (err){
                console.log(`Ocorreu um erro na consulta ${err}`)
            }
           
        }

      
 

    render() {
        return(
            <div className="container">
                <h1>LOGIN</h1>
                <form className="form-login">
                    <input type="text" className="email" placeholder="Email" id="email" name="email" onChange={this.validationemail}/>

                    <input type="password" className="senha" placeholder="Senha" id="senha" name="senha" onChange={this.validationsenha}/>

                    <div className="remember">
                    <input type="checkbox" className="check"/>
                    <label> Remember Me</label>
                    </div>

                    <input type="submit" className="botao disable" value="Sign in" onClick={this.logarEmail}/>
                    
                    
        
                </form>
            </div>
        )
    }
}