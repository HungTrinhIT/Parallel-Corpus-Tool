import React, { Component } from "react";
import "./Tooltip.css";
export default class Tooltip extends Component {
  state = {
    displayTooltip: false,
  };

  hideTooltip = () => {
    this.setState({ displayTooltip: false });
  };
  showTooltip = () => {
    this.setState({ displayTooltip: true });
  };
  render() {
    let message = this.props.message;
    let position = this.props.position;
    return (
      <span className="tooltip" onMouseLeave={this.hideTooltip}>
        {this.state.displayTooltip && (
          <div className={`tooltip-bubble tooltip-${position}`}>
            <div className="tooltip-message">{message}</div>
          </div>
        )}
        <span className="tooltip-trigger" onMouseOver={this.showTooltip}>
          {this.props.children}
        </span>
      </span>
    );
  }
}
