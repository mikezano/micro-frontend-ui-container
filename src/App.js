import React from "react";
import { Route, Switch, Router, Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import MFEApp from "./components/MFEApp";
import ReactApp from "./components/ReactApp";
import VueApp from "./components/VueApp";
import "styles/StylesApp";

/*Framework icons*/
import reactLogo from "./assets/react.png";
import vueLogo from "./assets/vue.png";

const history = createBrowserHistory();

const Header = () => (
  <nav className="navbar">
    <Link to="/">
      <span className="framework-icon font-white oi" data-glyph="home"></span>
    </Link>
    <Link to="/react">
      <img className="framework-icon" src={reactLogo} />
    </Link>
    <Link to="/vue">
      <img className="framework-icon" src={vueLogo} />
    </Link>
  </nav>
);

export default () => {
  return (
    <>
      <Router history={history}>
        <Header />
        <Switch>
          <Route path="/vue" component={VueApp} />
          <Route path="/react" component={ReactApp} />
          <Route path="/" component={MFEApp} />
        </Switch>
      </Router>
    </>
  );
};
