import { Button, Form, Row, Col } from "react-bootstrap";
import { useState, useEffect } from "react";

export default function FormBatePapo(props) {
  const [mensagem, setMensagem] = useState(props.mensagemSelecionada);

  useEffect(() => {
    setMensagem(props.mensagemSelecionada);
  }, [props.mensagemSelecionada]);

  function manipularMudanca(evento) {
    const { name, value } = evento.target;
    setMensagem({ ...mensagem, [name]: value });
  }

  function enviarMensagem(evento) {
    evento.preventDefault();
    if (!mensagem.texto.trim()) {
      alert("A mensagem não pode estar vazia!");
      return;
    }

    if (props.modoEdicao) {
      props.setListaDeMensagens(
        props.listaDeMensagens.map((item) =>
          item.id === mensagem.id ? mensagem : item
        )
      );
    } else {
      const novaMensagem = {
        ...mensagem,
        id: Date.now(),
        lida: false,
      };
      props.setListaDeMensagens([...props.listaDeMensagens, novaMensagem]);
    }

    limparFormulario();
    props.setExibirTabela(true);
  }

  function limparFormulario() {
    setMensagem({ id: 0, usuario: "", texto: "", lida: false });
    props.setModoEdicao(false);
    props.setMensagemSelecionada({ id: 0, usuario: "", texto: "", lida: false });
  }

  return (
    <Form onSubmit={enviarMensagem}>
      <Row className="mb-4">
        <Form.Group as={Col} md="6">
          <Form.Label>Usuário</Form.Label>
          <Form.Control
            required
            type="text"
            name="usuario"
            value={mensagem.usuario}
            onChange={manipularMudanca}
          />
        </Form.Group>
      </Row>
      <Row className="mb-4">
        <Form.Group as={Col} md="12">
          <Form.Label>Mensagem</Form.Label>
          <Form.Control
            required
            as="textarea"
            rows={3}
            name="texto"
            value={mensagem.texto}
            onChange={manipularMudanca}
          />
        </Form.Group>
      </Row>
      <Row className="mt-2">
        <Col md={1}>
          <Button type="submit" variant="success">
            {props.modoEdicao ? "Atualizar" : "Enviar"}
          </Button>
        </Col>
        <Col md={{ offset: 1 }}>
          <Button
            variant="secondary"
            onClick={() => {
              props.setExibirTabela(true);
            }}
          >
            Voltar
          </Button>
        </Col>
      </Row>
    </Form>
  );
}