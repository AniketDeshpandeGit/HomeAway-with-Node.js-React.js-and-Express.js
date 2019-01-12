import React, { Component } from "react";
import { Route } from "react-router-dom";
import Login from "./Login/Login";
import Home from "./Home/Home";
import Create from "./Create/Create";
import LandOwner from "./Owner/landOwner";
//import LandTraveller from "./Traveller/landTraveller";
import Welcome from "./LandingPage/Welcome";
import DashboardOwner from "./DashboardOwner/DashboardOwner";
import WelcomeOwner from "./DashboardOwner/WelcomeOwnerCheckout/DrawerProperty";
import OwnerDashboard from "./DashboardOwner/OwnerDashboard/OwnerDashboard";
import LandTraveller from "./Traveller/landTraveller";
import Searchpage from "./Traveller/searchpage";
import ShowProperty from "./Traveller/ShowProperty";
//Create a Main Component
class Main extends Component {
  render() {
    return (
      <div>
        {/*Render Different Component based on Route*/}
        <Route path="/" exact component={Welcome} />
        <Route path="/landOwner" exact component={LandOwner} />
        <Route path="/landTraveller" exact component={LandTraveller} />
        <Route path="/searchpage" exact component={Searchpage} />
        <Route path="/welcomeOwner" exact component={WelcomeOwner} />
        <Route path="/dashboardOwner" exact component={DashboardOwner} />
        <Route path="/OwnerDashboard" exact component={OwnerDashboard} />
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/create" component={Create} />
        <Route path="/show" component={ShowProperty} />
      </div>
    );
  }
}
//Export The Main Component
export default Main;
