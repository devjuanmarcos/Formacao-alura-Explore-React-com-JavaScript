import { Button } from "@material-ui/core";
import { Container, Titulo, InputContainer } from "./styles";
import { Input, InputLabel, InputAdornment } from "@material-ui/core";
import { useNavigate } from "react-router-dom";

function Login({ nome, setNome, saldo, setSaldo }) {
  const navigate = useNavigate();

  return (
    <Container>
      <Titulo>Insira o seu nome</Titulo>
      <InputContainer>
        <InputLabel>Nome</InputLabel>
        <Input
          value={nome}
          onChange={(event) => setNome(event.target.value)}
          type='text'
        />
      </InputContainer>
      <InputContainer>
        <InputLabel>Saldo</InputLabel>
        <Input
          value={saldo}
          onChange={(event) => setSaldo(event.target.value)}
          type='number'
          startAdornment={<InputAdornment position='start'>R$</InputAdornment>}
        />
      </InputContainer>
      <Button
        onClick={() => navigate("/feira")}
        variant='contained'
        color='primary'
      >
        Avançar
      </Button>
    </Container>
  );
}

export default Login;
