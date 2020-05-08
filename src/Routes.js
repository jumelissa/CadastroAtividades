import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Login from './Components/Login/index';
import Cadastro from './Components/Cadastro/index';
import Detalhes from './Components/Detalhes/index';

const Router = () => {
    return(
        <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route path="/Cadastro" component={Cadastro} />
            <Route path="/Detalhes/:id"  component={Detalhes}/>


            
        </Switch>
    </BrowserRouter>
    )
}

export default Router;