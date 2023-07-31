import Colaborador from "../Colaborador";
import "./time.css";

const Time = ({ time, colaboradores, aoDeletar, mudarCor }) => {
  return (
    colaboradores.length > 0 && (
      <section
        className="time"
        style={{
          backgroundImage: "url(/imagens/fundo.png)",
          backgroundColor: time.corPrimaria,
        }}
      >
        <input
          onChange={(evento) => mudarCor(evento.target.value, time.nome)} // o evento vai querer um target (informação inicial quando iniciou a solicitação do comando. Value é o valor que o input recebeu)
          value={time.corSecundaria}
          type="color"
          className="input-cor"
        />
        <h3 style={{ borderColor: time.corSecundaria }}>{time.nome}</h3>
        <div className="colaboradores">
          {colaboradores.map((colaborador, indice) => {
            return (
              <Colaborador
                key={indice}
                colaborador={colaborador}
                corDeFundo={time.corSecundaria}
                aoDeletar={aoDeletar}
              />
            );
          })}
        </div>
      </section>
    )
  );
};

export default Time;
