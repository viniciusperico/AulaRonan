import React, { useState } from 'react';
import './Contato.css';

const Contato = () => {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [mensagem, setMensagem] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Obrigado pela mensagem, ${nome}!`);
    
    };

    return (
        <div className='contato-global'>
            <div className="contato-container">
                <h2>Mande uma mensagem para gente! :)</h2>
                <div className="contato-content">
                    <form onSubmit={handleSubmit} className="contato-form">
                        <div className="form-group">
                            <label htmlFor="nome">Nome:</label>
                            <input
                                type="text"
                                id="nome"
                                value={nome}
                                onChange={(e) => setNome(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-mail:</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="mensagem">Mensagem:</label>
                            <textarea
                                id="mensagem"
                                value={mensagem}
                                onChange={(e) => setMensagem(e.target.value)}
                                required
                            ></textarea>
                        </div>
                        <button type="submit">Enviar</button>
                    </form>
                    <div className="social-icons">
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <img src="./src/assets/Icones/icon-instagram.png" alt="Instagram" className="icon-contato" />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <img src="./src/assets/Icones/icon-facebook.png" alt="Facebook" className="icon-contato" />
                        </a>
                        <a href="" target="_blank" rel="noopener noreferrer">
                            <img src="./src/assets/Icones/icon-whatsapp.png" alt="WhatsApp" className="icon-contato" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contato;
