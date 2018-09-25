import React, { Component } from "react";
import axios from 'axios';

const url = 'https://swapi.co/api/people/1/';

class Button extends Component {
  render() {
    return (
      <div>
        <button>Call Api</button>
      </div>
    );
  }
}

export default Button;
