import React from "react";
import Login from "./Pages/login";
import Dashboard from "./Pages/Dashboard";
import { BrowserRouter,Route,Routes } from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      <Login />
      <Routes>
      <Route path="/app" component={Dashboard} />
      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
