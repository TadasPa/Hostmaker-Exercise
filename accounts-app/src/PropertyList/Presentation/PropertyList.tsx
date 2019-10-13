import React, { Component } from "react";
import './PropertyList.css';
import { PropertyListState } from "../State/Reducer";

export interface IPropertyListPresentationProps extends PropertyListState {
    fetchData: () => void
}

export class PropertyListPresentation extends Component<IPropertyListPresentationProps> {

    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        const propertyList = this.props.propertyList.map(property => {
            return (
                <div key={property.airbnbId}>
                    Owner: {property.owner}
                </div>
            );
        });

        return (
            <div className="property-list-presentation-container">
                {this.props.isLoading && "Loading..."}
                {this.props.loadError && this.props.loadError}
                {propertyList}
            </div>
        );
    }
}