import React, { Component } from 'react';
import './App.css';
import FormularioCadastro from './components/FormularioCadastro/FormularioCadastro';
import { Container, Typography } from '@material-ui/core';

class App extends Component {
  render() {
    return (
      <Container component="article" maxWidth="sm">
        <Typography variant="h3" align="center" component="h1">Formulário de Cadastro</Typography>
        <FormularioCadastro onSubmit={onSubmit} validarCpf={validarCpf} />
      </Container>
    );
  };
}

const onSubmit = (dados) => {
  console.log(dados);
};

const validarCpf = (cpf) => {
  if (cpf.length !== 11) {
    return {
      valido: false,
      texto: 'O CPF deve possuir 11 caracteres',
    }
  } else {
    return {
      valido: true,
      texto: '',
    }
  }
};

export default App;
