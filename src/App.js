import Pagina from "./componentes/layouts/Pagina";
import TelaCadastroUsuario from "./componentes/Telas/TelaCadastroUsuario";
import TelaCadastroBatePapo from "./componentes/Telas/TelaCadastroBatePapo";
import TelaMenu from "./componentes/Telas/TelaMenu";
import Tela404 from "./componentes/Telas/Tela404";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import TelaCadastroUsuarios from "./componentes/Telas/TelaCadastroUsuario";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        { //A ordem das rotas é importante 
        }
        <Routes>
          <Route path="/usuario" element={<TelaCadastroUsuarios />} />
          <Route path="/batepapo" element={<TelaCadastroBatePapo />} />
          <Route path="/" element={<TelaMenu />} />
          <Route path="*" element={<Tela404 />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
