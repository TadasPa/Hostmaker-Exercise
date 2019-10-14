import React, { Component } from "react";
import './PropertyList.scss';
import { PropertyListState } from "../State/Reducer";
import LoadingSpinner from "../../LoadingSpinner/LoadingSpinner";
import AuthenticationError from "../../AuthenticationError/AuthenticationError"
import ServiceAreaMarker from "../../ServiceAreaMarker/ServiceAreaMarker"

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
                    <ServiceAreaMarker address={property.address} />
                </div>
            );
        });

        return (
            <div className="property-list-presentation-container">
                {!this.props.isLoading && <div>
                    <img src="https://hostmaker-website.imgix.net/assets/images/logos/hostmaker-logo.svg?auto=compress%2Cformat&fit=crop&ixlib=react-8.4.0&h=38&w=200" />
                </div>
                }
                {propertyList.length > 0 && <div className="property-table">
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
                    {propertyList}
                </div>
                }
                <LoadingSpinner isLoading={this.props.isLoading} />
                <AuthenticationError error={this.props.loadError} />
            </div>
        );
    }
}