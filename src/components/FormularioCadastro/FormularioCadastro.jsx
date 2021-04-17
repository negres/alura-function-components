import React, { useState } from 'react';
import { Button, TextField, Switch, FormControlLabel } from '@material-ui/core';

const FormularioCadastro = ({ onSubmit, validarCpf }) => {

  const [nome, setNome] = useState('');
  const [sobrenome, setSobrenome] = useState('');
  const [cpf, setCpf] = useState('');
  const [promocoes, setPromocoes] = useState(true);
  const [novidades, setNovidades] = useState(false);
  const [errors, setErrors] = useState({
    cpf: {
      valido: true,
      texto: '',
    }
  });

  return (
    <form onSubmit={(event) => {
      event.preventDefault();
      onSubmit({
        nome,
        sobrenome,
        cpf,
        novidades,
        promocoes
      });

    }}>
      <TextField
        value={nome}
        onChange={(event) => setNome(event.target.value)}
        onBlur={(event) => {
          const isValido = validarCpf(cpf);
          setErrors({cpf: isValido})
        }}
        id="nome"
        fullWidth="true"
        label="Nome"
        margin="normal"
        variant="outlined"
      />
      <TextField
        value={sobrenome}
        onChange={(event) => setSobrenome(event.target.value)}
        id="nome"
        fullWidth="true"
        label="Sobrenome"
        margin="normal"
        variant="outlined"
      />
      <TextField
        value={cpf}
        onChange={(event) => setCpf(event.target.value)}
        error={!errors.cpf.valido}
        helperText={errors.cpf.texto}
        id="nome"
        label="CPF"
        fullWidth="true"
        margin="normal"
        variant="outlined"
      />
      <FormControlLabel
        control = {
          <Switch
            checkd={promocoes}
            onChange={(event) => {
              setPromocoes(event.target.checked);
            }}
            name="Promoções"
            inputProps={{ 'aria-label': 'primary checkbox' }}
          />
        }
        label="Promoções"
      />
      <FormControlLabel
        control = {
          <Switch
            checked={novidades}
            onChange={(event) => {
              setNovidades(event.target.checked);
            }}
            name="Novidades"
            inputProps={{ 'aria-label': 'secondary checkbox' }}
          />
        }
        label="Novidades"
      />
      <Button
        variant="contained"
        color="primary"
        type="submit"
      >
        Cadastrar
      </Button>
    </form>
  );
};

export default FormularioCadastro;
