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
import NewVisualisationCountChart from "../components/New VisualisationCountChart";
import DataPicker from "../components/DataPicker";

const AppRouter = () => {
  return (
    <Router>
      <MainHeader />
      <Switch>
        <Route path="/Statistics" exact component={NewVisualisationCountChart}>
          <DataPicker/>
          <NewVisualisationCountChart/>
          <Charts />
        </Route>
        <Route path="/users">
        </Route>
        <Route path="/">
          <MainContainer />
          <Shape3d />
        </Route>
      </Switch>
    </Router>
  );
};



export default AppRouter;
