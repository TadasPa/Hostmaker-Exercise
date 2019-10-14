import React, { Component } from "react";
import './PropertyList.scss';
import { PropertyListState } from "../State/Reducer";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";

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
                <div key={property.airbnbId} className="property-item-row">
                    <div className="property-item-owner">
                        {property.owner}
                    </div>
                    <div className="property-item-address">
                        <div>{property.address.line1}</div>
                        <div>{property.address.line2}</div>
                        <div>{property.address.line3}</div>
                        <div>{property.address.line4}</div>
                        <div>{property.address.postCode}</div>
                        <div>{property.address.city}</div>
                        <div>{property.address.country}</div>
                    </div>
                    <div className="property-item-income-generated">
                        {property.incomeGenerated}
                    </div>
                </div>
            );
        });

        return (
            <div className="property-list-presentation-container">
                
                <div className="property-item-row-title">
                    <div className="property-item-owner">
                        Owner
                    </div>
                    <div className="property-item-address">
                        Address
                    </div>
                    <div className="property-item-income-generated">
                        Income generated
                    </div>
                </div>
                
                <LoadingSpinner isLoading={this.props.isLoading} />
                {this.props.loadError && this.props.loadError}
                {propertyList}
            </div>
        );
    }
}