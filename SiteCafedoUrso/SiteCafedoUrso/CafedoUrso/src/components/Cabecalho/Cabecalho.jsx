import React from 'react';
import './Cabecalho.css';



function Cabecalho() {
    return (
        <div className='Cabecalho'>

            <img className="logo-icon" src="./src/assets/Icones/icon-logo.png" alt='logo_cafedourso'></img>

            <nav>
                <a href="#inicio">Inicio</a>
                <a href="#menu">Menu</a>
                <a href="#localizacao">Localização</a>
                <a href="#contato">Contato</a>
            </nav>

            <div>
                <a href='https://'>
                    <img className="icon-rede-social" src="./src/assets/Icones/icon-instagram.png" href='' />
                </a>
                <a href='https://'>
                    <img className="icon-rede-social" src="./src/assets/Icones/icon-facebook.png" href='' />
                </a>
                <a href="">
                    <img src="./src/assets/Icones/icon-whatsapp.png" className="icon-rede-social" />
                </a>
                <a href="/administrador">
                    
                    <img src="https://img.icons8.com/?size=32&id=YIZ59MTJsuUz&format=png&color=ffffff" className="icon-adm" />
                </a>
            </div>
        </div>
    );
}

export default Cabecalho;
