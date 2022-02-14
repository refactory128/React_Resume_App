import React, { Component } from "react";
import TextField from "./TextField";

class Work extends Component {
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
    return (
      <div>
        <TextField label="Company" editMode={this.state.editMode} />
        <TextField label="Title" editMode={this.state.editMode} />
        <TextField label="Details" editMode={this.state.editMode} />
        <TextField label="Start" editMode={this.state.editMode} />
        <TextField label="End" editMode={this.state.editMode} />
        <button onClick={this.handleChange}>
          {this.state.editMode ? "Save" : "Edit"}
        </button>
      </div>
    );
  }
}

export default Work;
