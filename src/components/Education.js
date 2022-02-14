import React, { Component } from "react";
import TextField from "./TextField";

class Education extends Component {
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
        <TextField label="School" editMode={this.state.editMode} />
        <TextField label="Degree" editMode={this.state.editMode} />
        <TextField label="Graduation" editMode={this.state.editMode} />
        <button onClick={this.handleChange}>
          {this.state.editMode ? "Save" : "Edit"}
        </button>
      </div>
    );
  }
}

export default Education;
