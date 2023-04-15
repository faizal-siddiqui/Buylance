import React from "react";
import AllRoutes from "./components/Routes/AllRoutes";
import { initializeApp } from "firebase/app";
import { config } from "../src/components/Login/config/config";

initializeApp(config.firebaseConfig);

function App() {
  return (
    <div>
      <AllRoutes />
    </div>
  );
}

export default App;
