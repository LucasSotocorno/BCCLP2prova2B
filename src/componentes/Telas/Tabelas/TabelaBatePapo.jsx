import { Button, Container, Table } from "react-bootstrap";

export default function TabelaBatePapo(props) {
  function editarMensagem(mensagem) {
    props.setModoEdicao(true);
    props.setMensagemSelecionada(mensagem);
    props.setExibirTabela(false);
  }

  function excluirMensagem(mensagem) {
    if (window.confirm(`Deseja realmente excluir a mensagem: "${mensagem.texto}"?`)) {
      props.setListaDeMensagens(
        props.listaDeMensagens.filter((item) => item.id !== mensagem.id)
      );
    }
  }

  function alternarLida(mensagem) {
    const atualizada = { ...mensagem, lida: !mensagem.lida };
    props.setListaDeMensagens(
      props.listaDeMensagens.map((item) =>
        item.id === mensagem.id ? atualizada : item
      )
    );
  }

  return (
    <>
      <Container>
        <Button
          className="mb-3"
          variant="primary"
          onClick={() => {
            props.setExibirTabela(false);
          }}
        >
          Nova Mensagem
        </Button>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>ID</th>
              <th>Usuário</th>
              <th>Mensagem</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {props.listaDeMensagens?.map((mensagem) => (
              <tr key={mensagem.id}>
                <td>{mensagem.id}</td>
                <td>{mensagem.usuario}</td>
                <td>{mensagem.texto}</td>
                <td>
                  <Button
                    variant={mensagem.lida ? "success" : "secondary"}
                    onClick={() => alternarLida(mensagem)}
                  >
                    {mensagem.lida ? "Lida" : "Não Lida"}
                  </Button>
                </td>
                <td>
                  <Button
                    onClick={() => editarMensagem(mensagem)}
                    variant="warning"
                    className="me-2"
                  >
                    Editar
                  </Button>
                  <Button
                    onClick={() => excluirMensagem(mensagem)}
                    variant="danger"
                  >
                    Excluir
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
        <p>Total de mensagens: {props.listaDeMensagens.length}</p>
      </Container>
    </>
  );
}