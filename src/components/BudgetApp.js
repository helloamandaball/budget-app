import React, { useState } from "react";
import { Routes, Route, Navigate } from "react-router";
// import { NavBar } from "./nav/NavBar";
import { ApplicationViews } from "./ApplicationViews";
import { Login } from "./auth/Login";
import { Register } from "./auth/Register"
import "./BudgetApp.css";

export const BudgetApp = () => {
  // eslint-disable-next-line
  const [loggedin, setLoggedin] = useState(false);

  const changeState = (bool) => setLoggedin(bool);

  if (localStorage.getItem("activeUser")) {
    return (
      <>
        {/* <NavBar /> */}
        <section className="main">
          <ApplicationViews />
        </section>
      </>
    );
  } else {
    return (
      <Routes>
        <Route path="/" element={<Navigate to="login" />} />
        <Route path="/login" element={<Login setLoggedin={changeState} />} />
        <Route path="/register" element={<Register setLoggedin={changeState} />} />
      </Routes>
    );
  }
};