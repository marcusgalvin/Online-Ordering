import React from "react";
import Landing from "./Landing";
import Apps from "./Apps";
import Entrees from "./Entrees"
import Desserts from "./Desserts"

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="flexcontainer">

      <div className="icon">
    <img src="https://d2.alternativeto.net/dist/icons/sushi_61204.png?width=128&height=128&mode=crop&upscale=false"/>
      </div>


<div className="navContainer">
        <nav>
           <Link to="/">Home - </Link>
         

              <Link to="/apps">Apps - </Link>

              <Link to="/entrees">Entrees - </Link>
              <Link to="/desserts">Desserts</Link>
        </nav>
</div>


        </div>

<div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/apps">
            <Apps />
          </Route>
          <Route path="/entrees">
            <Entrees />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/desserts">
            <Desserts />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
