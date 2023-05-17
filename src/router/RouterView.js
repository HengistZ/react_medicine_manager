import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import './RouterView.css'
import App from "../App";
import Login from "../login/Login";
import Test from "../test/Test";
import UserIndex from "../components/user/UserIndex";
import BtnTest from "../test/BtnTest";
import Home from "../components/pages/Home";
import List from "../components/list/List";
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
                    <Route path="/user/produce">
                      <List/>
                    </Route>
                    
                    <Route path="/user/buy">
                      {/*<ListC/>*/}
                      <List/>
                    </Route>
                    <Route path="/user/confirm">
                      <List/>
                    </Route>
                    
                    <Route>
                      {/*<NotMatch/>*/}
                    </Route>
                  </Switch>
                </UserIndex>
            }/>
          </App>
        </BrowserRouter>
    )
  }
}
