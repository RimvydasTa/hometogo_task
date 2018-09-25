import React  from "react";
import ReactDOM from "react-dom";
import Button from './Button';


class App extends React.Component {
  render() {
    return (
      <div>
        <Button/>
      </div>
    );
  }
}

ReactDOM.render(<App/>, document.getElementById("root"));

