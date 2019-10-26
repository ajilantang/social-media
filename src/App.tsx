import React from "react";

import "./App.css";
import WebRouter from "./routes/routes";
import PersistentDrawerLeft from "./components/NavBar";
const App: React.FC = () => {
  return (
    <PersistentDrawerLeft>
      <WebRouter />
    </PersistentDrawerLeft>
  );
};

export default App;
