import React, { useState, useEffect } from "react";
import "./Principal.css";
import Cabecalho from "../Cabecalho/Cabecalho";
import Inicio from "../Inicio/Inicio";
import Cartao from "../Cartao/Cartao";
import Secao from "../Secao/Secao";
import Titulo from "../Titulo/Titulo";
import Localizao from "../Localizacao/Localizacao";
import Contato from "../Contato/Contato";
import Rodape from "../Rodape/Rodape";
import Botao from "../Botao/Botao";

function Principal() {
  return (
   <>
            <div>
              <Cabecalho />
              <Inicio />
              <Secao>
                <Titulo texto="Menu" />

                <div className="menu-global">
                  {/* <Cartao
                  descricao="Um texto descritivo"
                  imagem="..\src\assets\Imagens\menu-cafe-1..png"
                  titulo="Café Espresso"
                /> */}
                 
                  <Cartao />
                </div>
                <Botao />
              </Secao>
              <Secao>
                <Titulo texto="Localização" />
                <Localizao />
              </Secao>
              <Secao>
                <Titulo texto="Contato" />
                <Contato />
              </Secao>
              <Rodape />
            </div>
    </>
  );
}

export default Principal;
