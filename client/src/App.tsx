import React from "react";
import { Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./App.css";
import routes from "./Routes/index";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="routesContainer">
        {routes.map((route) => (
          <Route key={route.path} {...route} />
        ))}
      </div>
      <footer className="footer">
        My Roadmap App. Where you register and share all your memories.
      </footer>
    </div>
  );
}

export default App;
