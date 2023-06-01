import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './RouterView.css'
import App from "../App";
import Login from "../login/Login";
import UserIndex from "../components/user/UserIndex";
import Home from "../components/pages/Home";
import ListProduce from "../components/list/ListProduce";
import ListTrade from "../components/list/ListTrade";
import ListCheckMed from "../components/list/ListCheckMed";
import ListCheckTrade from "../components/list/ListCheckTrade";
// import ListC from "../components/list/ListC";

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
                <UserIndex>
                  {/*<BtnTest count={5}/>*/}
                  <Switch>
                    <Route path="/user/home">
                      <Home/>
                    </Route>
  
                    <Route path="/user/checkMed">
                      <ListCheckMed/>
                    </Route>
  
                    <Route path="/user/checkTrade">
                      <ListCheckTrade/>
                    </Route>
                    
                    <Route path="/user/produce">
                      <ListProduce/>
                    </Route>
                    
                    <Route path="/user/buy">
                      <ListTrade/>
                    </Route>
                    
                  </Switch>
                </UserIndex>
            }/>
          </App>
        </BrowserRouter>
    )
  }
}
