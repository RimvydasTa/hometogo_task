import React, { Component } from "react";
import axios from 'axios';

const url = 'https://swapi.co/api/people/1/';
const url2 = 'https://www.booknomads.com/api/v0/isbn/9789000010134';

class Button extends Component {
  state = {
    data: {}
  };
  makeApiCall = () => {
    axios.get(url2).then(data => {
        this.setState({
          data: data.data
        })
      });
    console.log(this.state.data);
  };

  render() {
    return (
      <div>
        <button onClick={this.makeApiCall}>Call Api</button>
      </div>
    );
  }
}

export default Button;
