import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import styled from 'styled-components';




const Btn = styled.button`
 
    height: 50px;
    cursor: pointer;
    font-size: 14px;
    font-weight: 700;
    line-height: 19px;
    text-align: center;
    border: 1px;
    border-style: solid;
    border-radius: 50px;
    border-color:#a984f8; 
    color:  #e1e1e6;
    background: #5100ff; 
    text-transform: uppercase;
    transition: all .3s ease;
 

  @media (min-width: 320px){
    padding: 12px 24px;
    justify-content: center;
}

&:hover {
  background-color:#e13b25; 
    color: white;
    
    box-shadow: rgb(100 100 111 / 50%) 0 7px 29px 0;
  }
  
`;















const Livros = () => {
    const [livros, setLivros] = useState([]);
  
    useEffect(() => {
      const fetchAllLivros = async () => {
        try {
          const res = await axios.get("http://localhost:8800/livros");
          setLivros(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchAllLivros();
    }, []);
  
    console.log(livros);
  
    const Deletar = async (id) => {
      try {
        await axios.delete(`http://localhost:8800/livros/${id}`);
        window.location.reload()
      } catch (err) {
        console.log(err);
      }
    };
return (
    <div>
      <h1>EvoBookStore</h1>
      <div className="livros">
        {livros.map((livro) => (
          <div key={livro.id} className="livro">
            <img src={livro.cover} alt="" />
            <h2>{livro.titulo}</h2>
            <p>{livro.descricao}</p>
            <span>${livro.preco}</span>
            <Btn className="deletar" onClick={() => Deletar(livro.id)}>Deletar</Btn>
            <Btn className="atualizar">
              <Link
                to={`/atualizar/${livro.id}`}
                style={{ color: "inherit", textDecoration: "none" }}
              >
               Atualizar
              </Link>
            </Btn>
          </div>
        ))}
      </div>

      <Btn className="atualizar">
        <Link to="/adicionar" style={{ color: "inherit", textDecoration: "none" }}>
         Adicionar novo livro!
        </Link>
      </Btn>
    </div>
  );
};

export default Livros;
