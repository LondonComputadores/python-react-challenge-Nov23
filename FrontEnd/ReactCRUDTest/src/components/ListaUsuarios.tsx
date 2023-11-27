import React, { useState } from "react";
import { useQuery } from "react-query";
import axios from "axios";

const ListaUsuarios = () => {
  const { data, isLoading, error } = useQuery("usuarios", () =>
    axios.get("https://fakestoreapi.com/users")
  );

  if (isLoading) {
    return (
      <div>
        <h1>Lista de Usuários</h1>
        <p>Carregando...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <h1>Lista de Usuários</h1>
        <p>Erro ao carregar os dados</p>
      </div>
    );
  }

  return (
    <div>
      <h1>Lista de Usuários</h1>
      <ul>
        {data.data.map((usuario) => (
          <li key={usuario.id}>{usuario.nome}</li>
        ))}
      </ul>
    </div>
  );
};

export default ListaUsuarios;
