import React from 'react';
import {BrowserRouter, Route, Link} from "react-router-dom";

class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render() {
    return (
        <BrowserRouter>
          <div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/news">News</Link>
              </li>
              <li>
                <Link to="/users">Users</Link>
              </li>
            </ul>
            <hr/>
            
            <Route exact path="/">
              <h3>home</h3>
            </Route>
            <Route path="/news">
              <h3>news</h3>
            </Route>
            <Route path="/users">
              <h3>users</h3>
            </Route>
          </div>
        </BrowserRouter>
    );
  }
}

export default Test;


