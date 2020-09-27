import React from "react";
import { useSelector } from "react-redux";
import "./App.css";
import Header from "./components/header/Header";
import Login from "./components/login/Login";
import Home from "./pages/Home";

function App() {
  const loginUser = useSelector((state) => state.loginUser);
  const { user } = loginUser;

  return (
    <div className="app">
      {!user
        ? (
          <Login />
        )
        : (<>
          <Header />
          <Home />
        </>)}
    </div>
  );
}

export default App;
