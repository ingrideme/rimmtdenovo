import React from 'react';
import CampoInput from '../CampoInput';
import BotaoEnviar from '../BotaoEnviar';
import '../index.css';

class Cadastro  extends React.Component {
      
    render() {
    return(
        <div className="container">
        <div className="loginForm">
           
            <p>Cadastro de conta </p>
        <CampoInput type='text' placeholder="Digite seu nome completo   "/>
        <CampoInput type='text' placeholder="Digite seu endereço"/>
        <CampoInput type='text' placeholder="Digite seu CPF"/>
        <CampoInput type='text' placeholder="Digite seu e-mail"/>
        <CampoInput type='text' placeholder="Digite uma senha para acesso"/>
        <CampoInput type='text' placeholder="Confirme sua senha"/>
        <BotaoEnviar
            text='Cadastre-se'    
        />   
         <BotaoEnviar
            text='Voltar para login'/>   
        </div>
        </div>
    );
}
}  

export default Cadastro;