import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";
import Header from "./components/Header";

import "./App.css";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <Sidebar>
              <h1>Sidebar</h1>
            </Sidebar>
            <Layout>
              <Header
                title="Custom Shape Dividers"
                text="We created this free tool to make it easier for designers and developers to export a beautiful SVG shape divider for their latest project. We hope you enjoy this tool."
              />
            </Layout>
          </div>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
