// V2

import { Route, Routes } from "react-router-dom";

import ListaUsuarios from "./components/ListaUsuarios";
import CadastroUsuario from "./components/CadastroUsuario";
import EditarUsuario from "./components/EditarUsuario";
import DeletarUsuario from "./components/DeletarUsuario";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<ListaUsuarios />} />
        <Route path="/cadastrar" element={<CadastroUsuario />} />
        <Route path="/editar/:id" element={<EditarUsuario.name />} />
        <Route path="/deletar/:id" element={<DeletarUsuario.name />} />
      </Routes>
    </div>
  );
};

export default App;



// V1

// import React from 'react';
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
// import ListUsers from './pages/ListUsers';
// import AddUser from './pages/AddUser';
// import EditUser from './pages/EditUser';
// import DeleteUser from './pages/DeleteUser';

// const App: React.FC = () => {
//   return (
//     <Router>
//       <div>
//         <nav>
//           <ul>
//             <li>
//               <Link to="/users">List Users</Link>
//             </li>
//             <li>
//               <Link to="/add/user">Add User</Link>
//             </li>
//             <li>
//               <Link to="/edit/user/:id">Edit User</Link>
//             </li>
//             <li>
//               <Link to="/delete/user/:id">Delete User</Link>
//             </li>
//           </ul>
//         </nav>

//         <Routes>
//           <Route path="/users" element={<ListUsers />} />
//           <Route path="/add/user" element={<AddUser.name />} />
//           <Route path="/edit/user/:id" element={<EditUser.name />} />
//           <Route path="/delete/user/:id" element={<DeleteUser.name />} />
//         </Routes>
//       </div>
//     </Router>  
    
//   );
// };

// export default App;
