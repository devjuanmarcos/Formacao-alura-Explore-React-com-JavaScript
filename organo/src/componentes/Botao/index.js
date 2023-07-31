import Button from "@mui/material/Button";
import "./Botao.css";
import SendIcon from "@mui/icons-material/Send";
import { makeStyles } from "@mui/material";

const Botao = (props) => {
  return (
    <Button
      variant="contained"
      endIcon={<SendIcon />}
      sx={{
        backgroundColor: "#271000c7",
        borderRadius: "10px",
        fontWeight: "700",
        fontSize: "18px",
        padding: "32px",
        border: "none",
        cursor: "pointer",
        color: "#fff",
        margin: "32px 0",
      }}
      type="elementType"
    >
      {props.children}
    </Button>
  );
};

export default Botao;
