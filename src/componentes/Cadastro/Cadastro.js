import React, { useState, useEffect } from "react";
import Input from "../Input.js";

import "./Cadastro.scss";

const Cadastro = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [confirmEmail, setConfirmEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [id, setId] = useState(1);

  const gerarPersonagem = () => {
    setId(id + 1)
  }

  const handleSubmit = e => {
    e.preventDefault();
  };


  useEffect(()=>{
    fetch(`https://rickandmortyapi.com/api/character/${id}`, {
      method: "GET"
    }).then(result=>{
      return result.json()
    }).then(data=>{
      console.log(data)
    }).catch(() => {
      console.error('deu ruim')
    })
  },[id])


  return (
    <div className="Cadastro">
      <h1>Faça seu cadastro</h1>
      <button onClick={gerarPersonagem}>Gerar Personagem</button>
      <form onSubmit={handleSubmit}>
        <Input
          value={nome}
          type="text"
          label="Nome"
          placeholder="Nome"
          atualizarState={setNome}
          obrigatorio
        />
        <Input
          value={email}
          type="email"
          label="Email"
          placeholder="Digite seu email"
          atualizarState={setEmail}
          obrigatorio
        />
        <Input
          value={confirmEmail}
          type="email"
          label="Confirmar Email"
          placeholder="Confirme seu email"
          atualizarState={setConfirmEmail}
          obrigatorio
        />
        <Input
          value={senha}
          type="password"
          label="Senha"
          placeholder="Digite sua senha"
          atualizarState={setSenha}
          obrigatorio
        />
        <button>Cadastrar</button>
      </form>
    </div>
  );
};

export default Cadastro;