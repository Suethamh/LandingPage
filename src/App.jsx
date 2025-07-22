import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import SobreMim from "./componentes/SobreMim/SobreMim";
// import MeuTrabalho from "./componentes/MeuTrabalho/MeuTrabalho";
import Clientes from "./componentes/Clientes/Clientes";
import FAQ from "./componentes/FAQ/FAQ";
import Contato from "./componentes/Contato/Contato";
import Main from "./componentes/Main";
import NavBar from "./componentes/NavBar/NavBar";

function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar/>
        <Main/>
      </BrowserRouter>
    </>
  );
}

export default App;