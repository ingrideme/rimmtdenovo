
import React from 'react';
import Data from '../Data';

const Produto = ({id, title, img, preco, marca, info }) => {

  return (
    <article className="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10" id={id}>
      <div className="tc">
        <img src={img} class="br-100 h4 w4 dib ba b--black-05 pa2" title={title} />
        <h1 className="f3 mb2">{marca}</h1>
        <h2 className="f5 fw4 gray mt0">{info}</h2>

        <button className="f6 link dim br3 ph3 pv2 mb2 dib white bg-dark-green bn">Comprar</button>
        <span>$ {preco}</span>
      </div>
    </article>
  );
};

export default Produto;