import React from 'react';
import {
  Route
  // Redirect,
  // Switch,
  // Link,
  // HashRouter
} from "react-router-dom";

import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from './session/login_form_container';
import SignupFormContainer from './session/signup_form_container';


export default () => (
  <div>
    <header>
      <h1>Bench BnB</h1>
      <GreetingContainer />
    </header>

    <Route path="/login" component={LoginFormContainer} />
    <Route path="/signup" component={SignupFormContainer} />
  </div>
);