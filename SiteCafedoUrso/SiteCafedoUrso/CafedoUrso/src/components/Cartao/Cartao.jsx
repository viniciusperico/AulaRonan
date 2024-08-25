import React, { useState, useEffect } from 'react';
import "./Cartao.css";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../database/firebaseConfig";

const Cartao = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const querySnapshot = await getDocs(collection(db, "items"));
      setItems(querySnapshot.docs.map((doc) => doc.data()));
    };

    fetchData();
  }, []);

  return (
    <div id="menu" className="conteudo-menu">
      {items.map((item, index) => (
        <div key={index}>
          <img src={item.imagem} alt={item.titulo} />
          <h3>{item.titulo}</h3>
          <p>{item.descricao}</p>
        </div>
      ))}
    </div>
  );
};
export default Cartao;
