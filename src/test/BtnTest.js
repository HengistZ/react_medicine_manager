import React from "react";
import CountBoxTest from "./CountBoxTest";

class BtnTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {count: props.count};
    this.add = this.add.bind(this);
  }
  
  add() {
    // alert("click");
    let count = this.state.count + 1;
    this.setState({count: count});
    // console.log(this.state.count);
  }
  
  render() {
    return (
        <div>
          <CountBoxTest count={this.state.count}/>
          <button onClick={this.add}>add</button>
        </div>
    );
  }
}

export default BtnTest;
