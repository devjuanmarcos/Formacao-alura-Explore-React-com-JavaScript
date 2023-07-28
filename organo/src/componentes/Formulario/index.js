import "./Formulario.css";
import CampoTexto from "../CampoTexto";

const Formulario = () => {
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
      </form>
    </section>
  );
};
export default Formulario;
