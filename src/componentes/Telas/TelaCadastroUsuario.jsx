import FormCadUsuarios from "./Formularios/FormCadUsuarios";
import TabelaUsuarios from "./Tabelas/TabelaUsuarios";
import { useState } from "react";

export default function TelaCadastroUsuarios() {
  const [exibirTabela, setExibirTabela] = useState(true);
  const [listaDeUsuarios, setListaDeUsuarios] = useState([]);
  const [modoEdicao, setModoEdicao] = useState(false);
  const [usuarioSelecionado, setUsuarioSelecionado] = useState({
    id: 0,
    nome: "",
    email: "",
    urlAvatar: "",
  });

  return exibirTabela ? (
    <TabelaUsuarios
      listaDeUsuarios={listaDeUsuarios}
      setListaDeUsuarios={setListaDeUsuarios}
      setExibirTabela={setExibirTabela}
      setModoEdicao={setModoEdicao}
      setUsuarioSelecionado={setUsuarioSelecionado}
    />
  ) : (
    <FormCadUsuarios
      listaDeUsuarios={listaDeUsuarios}
      setListaDeUsuarios={setListaDeUsuarios}
      setExibirTabela={setExibirTabela}
      usuarioSelecionado={usuarioSelecionado}
      setUsuarioSelecionado={setUsuarioSelecionado}
      modoEdicao={modoEdicao}
      setModoEdicao={setModoEdicao}
    />
  );
}