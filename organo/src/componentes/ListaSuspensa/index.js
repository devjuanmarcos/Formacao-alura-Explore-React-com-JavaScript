import "./ListaSuspensa.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import { IconButton } from "@mui/material";
//
const ListaSuspensa = (props) => {
  const [open, setOpen] = React.useState(false);
  const [age, setAge] = React.useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (evento, reason) => {
    if (reason !== "backdropClick") {
      setOpen(false);
    }
  };

  const handleChange = (evento) => {
    props.aoAlterado(evento.target.value);
  };

  return (
    <div className="lista-suspensa">
      <label>{props.label}</label>
      <Button
        sx={{
          backgroundColor: "rgba(22, 0, 0, 0.5)",
          color: "aliceblue",
          boxShadow: "10px 10px 30px rgba(0,0,0, 0.06)",
          width: "100%",
          border: "none",
          fontSize: "24px",
          padding: "24px",
          boxSizing: "border-box",
          borderRadius: "15px",
          textTransform: "none",
          color: "rgb(255, 255, 255, 2)",
        }}
        onClick={handleClickOpen}
      >
        Selecione seu time
      </Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Selecione seu Time</DialogTitle>
        <DialogContent>
          <Box
            component="form"
            sx={{
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <FormControl sx={{ m: 2, minWidth: 300 }}>
              <InputLabel htmlFor="demo-dialog-native"></InputLabel>
              <Select
                native
                onChange={handleChange}
                required={props.obrigatorio}
                value={props.valor}
              >
                <option value={""}></option>
                {props.itens.map((item) => {
                  return <option key={item}>{item}</option>;
                })}
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancelar</Button>
          <Button onClick={handleClose}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default ListaSuspensa;
