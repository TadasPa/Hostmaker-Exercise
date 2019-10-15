import React, { Component } from "react";
import "./AuthenticationError.scss";

export interface IAuthenticationErrorProps {
    error: string;
}

export class AuthenticationError extends Component<IAuthenticationErrorProps> {

    render() {
        return (
            this.props.error ? (<div className="error-message"> {this.props.error} </div>) : "" 
            );
    }
}

export default AuthenticationError; 