import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const CadastroUsuario = () => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { isLoading, error } = useQuery("usuario", () =>
    axios.post("https://fakestoreapi.com/users", {
      nome,
      email,
      senha,
    })
  );

  if (isLoading) {
    return (
      <div>
        <h1>Cadastro de Usuário</h1>
        <p>Carregando...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Cadastro de Usuário</h1>
        <p>Erro ao cadastrar o usuário</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Cadastro de Usuário</h1>
      <form onSubmit={cadastrarUsuario}>
        <input
          type="text"
          placeholder="Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <button type="submit">Cadastrar</button>
      </form>
    </div>
  );
};

const cadastrarUsuario = () => {
  useQuery("usuario", () =>
    axios.post("https://fakestoreapi.com/users", {
      nome,
      email,
      senha,
    })
  );
};

export default CadastroUsuario;
