import { useState } from "react";
import TabelaBatePapo from "./TabelaBatePapo";
import FormBatePapo from "./FormBatePapo";

export default function TelaBatePapo() {
  const [exibirTabela, setExibirTabela] = useState(true);
  const [listaDeMensagens, setListaDeMensagens] = useState([]);
  const [modoEdicao, setModoEdicao] = useState(false);
  const [mensagemSelecionada, setMensagemSelecionada] = useState({
    id: 0,
    usuario: "",
    texto: "",
    lida: false,
  });

  return exibirTabela ? (
    <TabelaBatePapo
      listaDeMensagens={listaDeMensagens}
      setListaDeMensagens={setListaDeMensagens}
      setExibirTabela={setExibirTabela}
      setModoEdicao={setModoEdicao}
      setMensagemSelecionada={setMensagemSelecionada}
    />
  ) : (
    <FormBatePapo
      listaDeMensagens={listaDeMensagens}
      setListaDeMensagens={setListaDeMensagens}
      setExibirTabela={setExibirTabela}
      mensagemSelecionada={mensagemSelecionada}
      setMensagemSelecionada={setMensagemSelecionada}
      modoEdicao={modoEdicao}
      setModoEdicao={setModoEdicao}
    />
  );
}