import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./containers/HomePage";
import LayoutWrapper from "./common/LayoutWrapper";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FeaturesPage from "./containers/FeaturesPage";
import PricingPage from "./containers/PricingPage";
import SupportPage from "./containers/SupportPage";
import SignInPage from "./containers/SignInPage";
import SignUpPage from "./containers/SignUpPage";
import AdminDashboard from "./components/AdminDashboard";

const App = () => {
  return (
    <Router>
      <Route
        exact
        path={[
          "/",
          "/features",
          "/pricing",
          "/support",
          "/sign-in",
          "/sign-up",
        ]}
        component={Header}
      />
      <div className="parent-wrapper">
        <LayoutWrapper>
          <Route exact path="/" component={HomePage} />
          <Route path="/features" component={FeaturesPage} />
          <Route path="/pricing" component={PricingPage} />
          <Route path="/support" component={SupportPage} />
          <Route path="/sign-in" component={SignInPage} />
          <Route path="/sign-up" component={SignUpPage} />
        </LayoutWrapper>
      </div>
      <Route
        exact
        path={[
          "/",
          "/features",
          "/pricing",
          "/support",
          "/sign-in",
          "/sign-up",
        ]}
        component={Footer}
      />
      <Route path="/admin" component={AdminDashboard} />
    </Router>
  );
};

export default App;
