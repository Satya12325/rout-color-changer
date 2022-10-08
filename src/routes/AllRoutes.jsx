import { Link } from "react-router-dom";
import { Switch } from "react-router-dom";
import { Route } from "react-router-dom";
import About from "../pages/About";
import Home from "../pages/Home";
import NoMatch from "../pages/NoMatch";
import UserDetails from "../pages/UserDetails";
import Users from "../pages/Users";

function AllRoutes() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/users">
          <Users />
        </Route>
        <Route exact path="/users/info">
          <h1>User Info</h1>
        </Route>
        <Route exact path="/users/:id">
          <UserDetails />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route>
          <NoMatch />
        </Route>
      </Switch>
    </div>
  );
}

export default AllRoutes;
