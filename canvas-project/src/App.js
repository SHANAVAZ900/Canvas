import React from "react";
import Header from "./Components/Header";
import SideBar from "./Components/SideBar";
import Template from "./Components/Template";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CardBoard from "./Components/CardBoard";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <SideBar />
        <Switch>
          <Route path="/templates">
            <Template />
          </Route>
        </Switch>
        <CardBoard />
      </Router>
    </div>
  );
}

export default App;
