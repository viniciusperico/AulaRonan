// FormCadastro.js
import React, { useState } from 'react';
import { db } from '../../database/firebaseConfig';
import { collection, addDoc } from 'firebase/firestore';
import "./LoginAdmin.css";

const FormCadastro = () => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');
  const [imagem, setImagem] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addDoc(collection(db, 'items'), {
        titulo,
        descricao,
        imagem
      });
      setTitulo('');
      setDescricao('');
      setImagem('');
    } catch (err) {
      console.error("Erro ao adicionar documento: ", err);
    }
  };

  return (
    
    <form className='incluir-cards' onSubmit={handleSubmit}>
      <h3>INCLUSÃO DE CARDS NA PAGINA INICIAL</h3>
      <input 
        type="text" 
        placeholder="Título" 
        value={titulo} 
        onChange={(e) => setTitulo(e.target.value)} 
        required 
      />
      <input 
        type="text" 
        placeholder="Descrição" 
        value={descricao} 
        onChange={(e) => setDescricao(e.target.value)} 
        required 
      />
      <input 
        type="text" 
        placeholder="URL da Imagem" 
        value={imagem} 
        onChange={(e) => setImagem(e.target.value)} 
        required 
      />
      <button type="submit">Adicionar</button>
    </form>
  );
};

export default FormCadastro;
