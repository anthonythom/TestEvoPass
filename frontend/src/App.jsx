import react from "react";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
  BrowserRouter,
} from "react-router-dom";

import Livros from "./Pages/Livros";
import Adicionar from "./Pages/Adicionar";
import Atualizar from "./Pages/Atualizar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Livros/> }/>
          <Route path="/adicionar" element={<Adicionar/> }/>
          <Route path="/atualizar" element={<Atualizar/> }/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
