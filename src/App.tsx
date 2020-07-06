import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Slider } from '@reach/slider';
import "@reach/slider/styles.css";


import Logo from "./components/Logo";
import Sidebar from "./components/Sidebar";
import Layout from "./components/Layout";
import Header from "./components/Header";

import Select from './utils/controls/select';
import Radio from './utils/controls/radio';

import "./styles/main.sass";

const shapes = [ 'shape 1', 'shape 2', 'shape 3'];

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

              <Select name="shapes" title="shapes" desc="lorem ipsum dolor sit amet" options={shapes} />
              <Slider min={0} max={200} step={10} />

              <Radio />

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
