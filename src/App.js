import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom';
import HomePage from './pages/index/HomePage';
import DiscoveryPage from './pages/discovery/DiscoveryPage';
import ProfilePage from './pages/profile/ProfilePage';
import ChangePasswordPage from './pages/authentication/ChangePasswordPage';
import ForgotPasswordPage from './pages/authentication/ForgotPasswordPage';
import ResetPasswordPage from './pages/authentication/ResetPasswordPage';
import SignInPage from './pages/authentication/SignInPage';
import SignUpPage from './pages/authentication/SignUpPage';
import RegionDetailPage from './pages/discovery/RegionDetailPage';
import TouristSiteDetailPage from './pages/discovery/TouristSiteDetailPage';

function App() {
  return (
    <Switch>
      <Route exact={true} path="/">
        <HomePage />
      </Route>

      <Route exact={true} path="/discovery">
        <DiscoveryPage />
      </Route>

      <Route exact={true} path="/profile">
        <ProfilePage />
      </Route>

      <Route exact={true} path="/change-password">
        <ChangePasswordPage />
      </Route>

      <Route exact={true} path="/forgot-password">
        <ForgotPasswordPage />
      </Route>

      <Route exact={true} path="/reset-password">
        <ResetPasswordPage />
      </Route>

      <Route exact={true} path="/login">
        <SignInPage />
      </Route>

      <Route exact={true} path="/register">
        <SignUpPage />
      </Route>

      <Route path="/regions/:regionID">
        <RegionDetailPage />
      </Route>

      <Route path="/sites/:siteID/">
        <TouristSiteDetailPage />
      </Route>
    </Switch>
  );
}

export default App;
