// MyComponent.js

import React, { Component } from "react";
import TextField from "./TextField";

class General extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editMode: true,
    };
  }

  handleChange = (e) => {
    this.setState({
      editMode: !this.state.editMode,
    });
  };

  render() {
    //{this.state.editmode ? "Save":"Edit"}
    return (
      <div>
        <TextField label="Name" editMode={this.state.editMode} />
        <TextField label="Email" editMode={this.state.editMode} />
        <TextField label="Phone" editMode={this.state.editMode} />
        <button onClick={this.handleChange}>
          {this.state.editMode ? "Save" : "Edit"}
        </button>
      </div>
    );
  }
}

export default General;
