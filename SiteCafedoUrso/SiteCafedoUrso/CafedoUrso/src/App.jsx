import React, { useState, useEffect } from "react";
import "./App.css";
import Cabecalho from "./components/Cabecalho/Cabecalho";
import Inicio from "./components/Inicio/Inicio";
import Cartao from "./components/Cartao/Cartao";
import Secao from "./components/Secao/Secao";
import Titulo from "./components/Titulo/Titulo";
import Localizao from "./components/Localizacao/Localizacao";
import Contato from "./components/Contato/Contato";
import Rodape from "./components/Rodape/Rodape";
import Botao from "./components/Botao/Botao";
import LoginAdmin from "./components/Administrador/LoginAdmin";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>+
      <Routes>
        <Route
          path="/login"
          element={
            <div>
              <Cabecalho />
              <LoginAdmin />
            </div>
          }
        />

        <Route
          path="/"
          element={
            <div>
              <Cabecalho />
              <Inicio />
              <Secao>
                <Titulo texto="Menu" />

                <div className="menu-global">
                  {/* <Cartao
                  descricao="Um texto descritivo"
                  imagem=".\src\assets\Imagens\menu-cafe-1.png"
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
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
