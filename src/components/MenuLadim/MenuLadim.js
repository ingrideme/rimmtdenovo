import React from 'react';
import './MenuLadim.css';

const menuLadim = props => {
    let menuClasses = 'menu-ladim';
    if (props.show) {
        menuClasses = 'menu-ladim open';
    }
    return(
    <nav className={menuClasses}>
        <ul>
            <li><a href="/cadastro">Cadastro</a></li>
            <li><a href="/carrinho">Carrinho</a></li>
            <li><a href="/login">Login</a></li>
            <li><a href="/produtos">Produtos</a></li>
        </ul>
    </nav>
    )};

export default menuLadim;