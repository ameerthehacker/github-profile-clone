import React, { Component } from "react";

export default class Errorcomponent extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }
  
  render() {
    if (this.state.hasError) {
      return (
        <div>
          oops!
        </div>
      );
    }
    // Normally, just render children
    return this.props.children;
  }  
}