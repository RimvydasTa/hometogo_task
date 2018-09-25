import React from "react";

class List extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.height}</li>
          <li>{this.props.mass}</li>
        </ul>
      </div>
    );
  }
}

export default List;
