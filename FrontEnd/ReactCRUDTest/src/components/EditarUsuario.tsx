import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const AtualizarUsuario = ({ id }) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const { data, isLoading, error } = useQuery("usuario", () =>
    axios.get(`https://fakestoreapi.com/users/${id}`)
  );

  if (isLoading) {
    return (
      <div>
        <h1>Atualização de Usuário</h1>
        <p>Carregando...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Atualização de Usuário</h1>
        <p>Erro ao carregar os dados</p>
      </div>
    );
  }

  const data;
  const usuario = data.data;

  setNome(usuario.nome);
  setEmail(usuario.email);
  setSenha(usuario.senha);

  const atualizarUsuario = () => {
    useQuery("usuario", () =>
      axios.put(
        `https://fakestoreapi.com/users/${id}`,
        {
          nome,
          email,
          senha,
        }
      )
    );
  };

  return (
    <div>
      <h1>Atualização de Usuário</h1>
      <form onSubmit={atualizarUsuario}>
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
        <button type="submit">Atualizar</button>
      </form>
    </div>
  );
};

export default AtualizarUsuario;
