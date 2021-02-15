import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  useParams,
} from "react-router-dom";
import Shape3d from "../components/3dShapes";
import Charts from "../components/Charts";
import MainContainer from "../components/Container";
import MainHeader from "../components/Header";

const AppRouter = () => {
  return (
    <Router>
      <MainHeader />
      <Switch>
        <Route path="/dupa/:id">
          <About />
        </Route>
        <Route path="/users">
          <Users />
        </Route>
        <Route path="/">
          <MainContainer />
          <Shape3d />
          <Charts />
        </Route>
      </Switch>
    </Router>
  );
};

function About() {
  const { id } = useParams();
  return <h2>{id}</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

export default AppRouter;
