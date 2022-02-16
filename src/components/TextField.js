// MyComponent.js

import React, { Component } from "react";
import uniqid from "uniqid";
import "../styles/style.css";

class TextField extends Component {
  constructor(props) {
    super(props);
    this.state = {
      field: { text: "", id: uniqid() },
    };
  }

  handleChange = (e) => {
    this.setState({
      field: {
        text: e.target.value,
        id: this.state.field.id,
      },
    });
  };

  render() {
    if (this.props.editMode === false) {
      return (
        <div className="Field">
          <p>
            {this.props.label} : {this.state.field.text}
          </p>
        </div>
      );
    } else {
      return (
        <div className="Field">
          <p>{this.props.label}</p>
          <input
            onChange={this.handleChange}
            value={this.state.field.text}
            type="text"
            id={this.props.label}
          />
        </div>
      );
    }
  }
}

export default TextField;
