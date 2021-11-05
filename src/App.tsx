import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./Routes";

function App() {
  return (
    <React.StrictMode>
      <Router>
        <Routes />
      </Router>
    </React.StrictMode>
  );
}

export default App;
