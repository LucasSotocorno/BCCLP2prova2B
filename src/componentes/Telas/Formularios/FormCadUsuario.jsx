import { Button } from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useState } from 'react';

export default function FormCadUsuarios(props) {
  const [usuario, setUsuario] = useState(props.usuarioSelecionado);
  const [formValidado, setFormValidado] = useState(false);

  function manipularSubmissao(evento) {
    const form = evento.currentTarget;
    if (form.checkValidity()) {
      if (!props.modoEdicao) {
        // Cadastrar o usuário
        props.setListaDeUsuarios([...props.listaDeUsuarios, usuario]);
        // Exibir tabela com o usuário incluído
        props.setExibirTabela(true);
      } else {
        // Editar o usuário
        props.setListaDeUsuarios(
          props.listaDeUsuarios.map((item) =>
            item.id !== usuario.id ? item : usuario
          )
        );
        // Voltar para o modo de inclusão
        props.setModoEdicao(false);
        props.setUsuarioSelecionado({
          id: 0,
          nome: '',
          email: '',
          senha: '',
          urlAvatar: '',
        });
        props.setExibirTabela(true);
      }
    } else {
      setFormValidado(true);
    }
    evento.preventDefault();
    evento.stopPropagation();
  }

  function manipularMudanca(evento) {
    const elemento = evento.target.name;
    const valor = evento.target.value;
    setUsuario({ ...usuario, [elemento]: valor });
  }

  return (
    <Form noValidate validated={formValidado} onSubmit={manipularSubmissao}>
      <Row className="mb-4">
        <Form.Group as={Col} md="6">
          <Form.Label>ID</Form.Label>
          <Form.Control
            required
            type="text"
            id="id"
            name="id"
            value={usuario.id}
            disabled={props.modoEdicao}
            onChange={manipularMudanca}
          />
          <Form.Control.Feedback type="invalid">
            Por favor, informe o ID do usuário!
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-4">
        <Form.Group as={Col} md="6">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            required
            type="text"
            id="nome"
            name="nome"
            value={usuario.nome}
            onChange={manipularMudanca}
          />
          <Form.Control.Feedback type="invalid">
            Por favor, informe o nome do usuário!
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-4">
        <Form.Group as={Col} md="6">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            id="email"
            name="email"
            value={usuario.email}
            onChange={manipularMudanca}
          />
          <Form.Control.Feedback type="invalid">
            Por favor, informe um email válido!
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-4">
        <Form.Group as={Col} md="6">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            required
            type="password"
            id="senha"
            name="senha"
            value={usuario.senha}
            onChange={manipularMudanca}
          />
          <Form.Control.Feedback type="invalid">
            Por favor, informe uma senha!
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mb-4">
        <Form.Group as={Col} md="6">
          <Form.Label>URL do Avatar</Form.Label>
          <Form.Control
            required
            type="text"
            id="urlAvatar"
            name="urlAvatar"
            value={usuario.urlAvatar}
            onChange={manipularMudanca}
          />
          <Form.Control.Feedback type="invalid">
            Por favor, informe a URL do avatar do usuário!
          </Form.Control.Feedback>
        </Form.Group>
      </Row>
      <Row className="mt-2 mb-2">
        <Col md={1}>
          <Button type="submit">
            {props.modoEdicao ? 'Alterar' : 'Confirmar'}
          </Button>
        </Col>
        <Col md={{ offset: 1 }}>
          <Button
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