import "./ListaSuspensa.css";

const ListaSuspensa = () => {
  console.log(props.itens);

  return (
    <div>
      <label>{props.label} </label>
      <select>
        {props.itens.map((item) => (
          <option>{iten}</option>
        ))}
      </select>
    </div>
  );
};
export default ListaSuspensa;
