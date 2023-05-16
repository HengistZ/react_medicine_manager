import React from "react";

export default class CountBoxTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  // shouldComponentUpdate(nextProps, nextState, nextContext) {
  //   console.log(this.props.count)
  //   return false;
  // }
  
  render() {
    return (
        <div>
          <h3>{this.props.count}</h3>
        </div>
    );
  }
}
