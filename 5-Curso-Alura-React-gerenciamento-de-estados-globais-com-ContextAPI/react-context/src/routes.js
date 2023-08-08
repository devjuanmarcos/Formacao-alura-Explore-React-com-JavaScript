import Carrinho from "pages/Carrinho";
import Feira from "pages/Feira";
import Login from "pages/Login";
import React from "react";
import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { UsuarioContext } from "commom/context/usuario";

export default function AppRoutes() {
  const [nome, setNome] = useState("");
  const [saldo, setSaldo] = useState("");

  return (
    <BrowserRouter>
      <Routes>
        <Route
          exact
          path='/'
          element={
            <UsuarioContext.Provider value={(nome, setNome, saldo, setSaldo)}>
              <Login />
            </UsuarioContext.Provider>
          }
        ></Route>
        <Route
          path='feira'
          element={<Feira />}
        ></Route>
        <Route
          path='carrinho'
          element={<Carrinho />}
        ></Route>
        <Route
          path='*'
          element={<Login />}
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}
