import React from "react";
import './Cartao.css';

const Cartao = ({ titulo, descricao, imagem }) => {
    return (


        <div id='menu' className="conteudo-menu">

            <img src={imagem} alt={titulo} />
            <h3>{titulo}</h3>
            <p>{descricao}</p>

        </div>

    );
};
export default Cartao;