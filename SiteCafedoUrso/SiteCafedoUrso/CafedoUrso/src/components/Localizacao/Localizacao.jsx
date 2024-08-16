import React from 'react';
import "./Localizacao.css";

function Localizao() {

    return (
        <div id='localizacao' className='localizacao'>
            
        <div className='mapa'>
            <iframe
                width="100%"
                height="100%"
                src="https://www.openstreetmap.org/export/embed.html?bbox=-51.67153626680374%2C-24.241840930164607%2C-51.66976600885392%2C-24.24078438630563&amp;layer=mapnik&amp;marker=-24.241312659331722%2C-51.67065113782883"
            ></iframe>
        </div>
        
        </div>
    );
}

export default Localizao;
