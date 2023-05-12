import React from "react";
import {BrowserRouter, Route} from "react-router-dom";
import logo from "../logo.svg";
import './RouterView.css'
import App from "../App";
import Login from "../pages/login/Login";
import Test from "../pages/test/Test";

export default class RouterView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
        // <Test/>
        <BrowserRouter>
          <App>
            <Route exact path="/">
              <Login/>
            </Route>
            <Route path="/user" render={() =>
                <div className="App">
                  <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <h2>Hengist Medicine Manager</h2>
                  </header>
                </div>
            }/>
          </App>
        </BrowserRouter>
    )
  }
}
