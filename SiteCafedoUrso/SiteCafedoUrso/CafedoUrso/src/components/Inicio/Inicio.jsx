import React from 'react';
import './Inicio.css';

function Inicio() {
    return (
        <div id='inicio' className='Inicio'>
            <section>
                <div className='content'>
                    {/* <h3>CAFÉ DO URSO</h3> */}
                    <img className="logo-principal" src="./src/assets/Icones/tipografia-logo.png" alt='logo_cafedourso'></img>
                    <p>A vida começa depois do <span>café</span>. Descubra o sabor da <span>felicidade</span>.</p>

                    <a href='https://wa.me/5543996095172?text='>

                        <button>Garanta já o seu !</button>
             
                    </a>

                </div>
            </section>
        </div>
    );
}

export default Inicio;
