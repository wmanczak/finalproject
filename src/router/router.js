import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Shape3d from "../components/3dShapes";
import Charts from "../components/Charts";
import MainContainer from "../components/Container";
import MainHeader from "../components/Header";
import NewVisualisationCountChart from "../components/NewVisualisationCountChart";
import DataPicker from "../components/DataPicker";
import FooterNav from "../components/Footer";
import FormlyInfo from "../components/FormlyInformations";
import ViewContainer from "../components/ViewContainer";



const AppRouter = () => {
  return (
    <Router>
      <MainHeader />
      <ViewContainer>
        <Switch>
          <Route
            path="/Statistics"
            exact
            component={NewVisualisationCountChart}
          >
            <DataPicker />
            <NewVisualisationCountChart />
            <Charts />
          </Route>
          <Route path="/What">
            <FormlyInfo />
          </Route>
          <Route path="/">
            <MainContainer />
            <Shape3d />
            <FooterNav />
          </Route>
        </Switch>
      </ViewContainer>
    </Router>
  );
};

export default AppRouter;
