import React, { Component } from "react";
import "./LoadingSpinner.scss";

export interface ILoadingSpinnerProps {
  isLoading: boolean;
}

class LoadingSpinner extends Component<ILoadingSpinnerProps> {

  render() {
    if (this.props.isLoading) {
      return (
        <div className="spinner-container">
          <div className="overlay" />
          <div className="spinner" />
        </div>
      ); 
    } else {
      return null;
    }      
  }
}

export default LoadingSpinner; 