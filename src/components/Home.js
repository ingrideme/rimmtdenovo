import React, { useState } from 'react';
import xioamiNote8 from '../img/xioamiNote8.jpg';
import xioamiNote9 from '../img/xioamiNote9.jpg';
import './Home.css'
import { connect } from 'react-redux';
import { addBasket } from '../actions/addAction';
import { getNumbers } from '../actions/getAction';
import { useEffect } from 'react';

const Home = (props) => {
    console.log(props)
        useEffect(() => {
            getNumbers()
        }, []);


        return(
    <div className="containerdocard">
        <div className="imagem">
            <img src={xioamiNote8} alt="Xioami Note 8"/>
            <h3>Xioami Note 8 </h3>
            <h3>1000,00</h3>
            <a onClick={() =>props.addBasket('xiaomiNote8')} className="addCarrinho cart1" href="#">Adicionar ao Carrinho</a>
        </div>
 
        <div className="imagem">
            <img src={xioamiNote9} alt=""/>
            <h3>Xioami Note 9 </h3>
            <h3>1100,00</h3>
            <a onClick={() =>props.addBasket('xiaomiNote9')} className="addCarrinho cart2" href="#">Adicionar ao Carrinho</a>
        </div>

        <div className="imagem">
            <img src={xioamiNote8} alt="Xioami Note 8"/>
            <h3>Xioami Note 8 de novo </h3>
            <h3>1000,00 </h3>
            <a onClick={() =>props.addBasket('xiaomiNote8denovo')} className="addCarrinho cart3" href="#">Adicionar ao Carrinho</a>
        </div>
    </div>    


)
};




export default connect(null, { addBasket } )(Home);

