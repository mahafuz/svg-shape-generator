import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Logo from "./components/Logo";
import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";
import Header from "./components/Header";

import "./styles/main.sass";

const App: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <div className="App">
            <Sidebar>
              <Logo
                url="https://shapedivider.app/img/logo_500x500.18aca7aa.png"
                alt="Svg Shape Generator"
              />
              <h1>Custom Shape Dividers</h1>
            </Sidebar>
            <Layout>
              <Header
                title="Custom Shape Dividers"
                text="We created this free tool to make it easier for designers and developers to export a beautiful SVG shape divider for their latest project. We hope you enjoy this tool."
              />
              <Header
                title="Custom Shape Dividers"
                text="We created this free tool to make it easier for designers and developers to export a beautiful SVG shape divider for their latest project. We hope you enjoy this tool."
              />
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
