import React  from "react";
import ReactDOM from "react-dom";
import Button from './Button';
import Checkbox from './Checkbox';
import axios from "axios";
import List from "./List";


const items = [
  'Swapi',
  'Books',

];


class App extends React.Component {
  componentWillMount = () => {
    this.selectedCheckboxes = new Set();
  };

  state = {
    data: ""
  };
  makeApiCall = (checkbox) => {
    let url;
    if (checkbox === 'Swapi'){
      url = 'https://swapi.co/api/people/1/';
    }else if (checkbox === 'Books'){
      url = 'https://www.booknomads.com/api/v0/isbn/9789000010134';
    }else {
      url = "";
      return false;
    }
    axios.get(url).then(data => {
      this.setState({
        data: data.data
      });
        console.log(this.state.data);
    }).catch((error) => {
      // Error
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        // console.log(error.response.data);
        // console.log(error.response.status);
        // console.log(error.response.headers);
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log('Error', error.message);
      }
      console.log(error.config);
    });

  };





  toggleCheckbox = label => {
    if (this.selectedCheckboxes.has(label)) {
      this.selectedCheckboxes.delete(label);
    } else {
      this.selectedCheckboxes.add(label);
    }
  };

  handleFormSubmit = formSubmitEvent => {
    formSubmitEvent.preventDefault();

    for (const checkbox of this.selectedCheckboxes) {
      this.makeApiCall(checkbox);

    }
  };

  createCheckbox = label => (
    <Checkbox
      label={label}
      handleCheckboxChange={this.toggleCheckbox}
      key={label}
    />
  );

  createList = data => (
    <List
      name={data.name}
      mass={data.mass}
      height={data.height}

    />
  );

  createCheckboxes = () => (
    items.map(this.createCheckbox)
  );

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-12">

            <form onSubmit={this.handleFormSubmit}>
              {this.createCheckboxes()}

              <button className="btn btn-default" type="submit">Save</button>
            </form>
            { (this.state.data) ? this.createList(this.state.data) : "List empty" }
          </div>
        </div>
      </div>
    );
  }
}



ReactDOM.render(<App/>, document.getElementById("root"));

