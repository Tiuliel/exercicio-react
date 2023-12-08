import Cabecalho from "./componentes/Cabecalho";
import Rodape from "./componentes/Rodape";
import Contato from "./pages/Rock";
import Home from "./pages/Home";
import Produtos from "./pages/Gospel";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Cabecalho />
        <Container>
          <Routes>
            <Route Component={Home} exac path="/" />
            <Route Component={Rock} path="/Rock" />
            <Route Component={Gospel} path="/Gospel" />
          </Routes>
        </Container>
        <Rodape />
      </BrowserRouter>
    </>
  );
}

export default App;
