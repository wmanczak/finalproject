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
import NewVisualisationCountChart from "../components/NewVisualisationCountChart";
import DataPicker from "../components/DataPicker";
import FooterNav from "../components/Footer";
import FormlyInfo from "../components/FormlyInformations";
import MyComponent from "../components/FormlyInformations";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { useTheme } from '@material-ui/core/styles';

const AppRouter = () => {
  const theme = useTheme();

  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <Router>
      <MainHeader />
      <Switch>
        <Route path="/Statistics" exact component={NewVisualisationCountChart}>
          <DataPicker/>
          <NewVisualisationCountChart/>
          <Charts />
        </Route>
        <Route path="/What">
          <FormlyInfo/>
        </Route>
        <Route path="/">
          <MainContainer />
          <Shape3d />
          <FooterNav/>
        </Route>
      </Switch>
    </Router>
  );
};



export default AppRouter;
