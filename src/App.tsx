import React from "react";
import "./App.css";
import AllRoutes from "./components/Routes/AllRoutes";
import Home from "./pages/Home";
import Products from "./pages/faizal/Products";
import { initializeApp } from "firebase/app";
import { config } from "../src/components/Login/config/config";

initializeApp(config.firebaseConfig);

function App() {
  return (
    <div className="App">
      <AllRoutes />
    </div>
  );
}

export default App;
