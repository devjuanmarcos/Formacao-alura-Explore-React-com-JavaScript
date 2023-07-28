import "./Formulario.css";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import Botao from "../Botao";

const Formulario = () => {
  const times = [
    "Programação",
    "Front End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
  ];

  return (
    <section className="formulario">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>

        <CampoTexto label="nome" placeholder="Digite seu nome" />
        <CampoTexto label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto
          label="Imagem"
          placeholder="Digite o endereço da sua imagem"
        />
        <ListaSuspensa label="Time" itens={times} />
        <Botao>Criar Card</Botao>
      </form>
    </section>
  );
};
export default Formulario;
