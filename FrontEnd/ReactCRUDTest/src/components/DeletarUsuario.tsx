import React, { useState, useEffect } from "react";
import { useQuery } from "react-query";

const DeletarUsuario = ({ id }) => {
  const [isLoading, error] = useState(false);

  const atualizarUsuario = () => {
    axios.delete(`https://fakestoreapi.com/users/${id}`).then(() => {
      window.location.reload();
    });
  };

  return (
    <div>
      <h1>Deletar Usuário</h1>
      <p>Tem certeza que deseja deletar o usuário?</p>
      <button onClick={atualizarUsuario}>Deletar</button>
    </div>
  );
};

export default DeletarUsuario;
