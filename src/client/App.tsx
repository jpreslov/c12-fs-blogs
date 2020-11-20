import * as React from "react";
import { BrowserRouter as Router, Link, Switch, Route } from "react-router-dom";
import AllBlogs from "./components/AllBlogs";
import BTDetails from "./components/BTDetails";
import OneBlog from "./components/OneBlog";
const App: React.FC = () => {
  return (
    <Router>
      <Link to="/">
        <nav>

        <h1 className="text-center">Blooooooggoggggggg</h1>
        </nav>
      </Link>

      <Switch>
        <Route exact path={"/"} component={AllBlogs} />
        <Route exact path={"/details/:id"} component={OneBlog} />
        <Route exact path={"/:name"} component={BTDetails} />
      </Switch>
    </Router>
  );
};

export interface IAppProps {}

export interface IAppState {
  name: string;
}

export default App;
