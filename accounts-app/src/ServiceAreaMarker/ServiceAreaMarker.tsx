import React, { Component } from "react";
import { IAddress } from "../PropertyList/State/Reducer";
import ServiceAreaApi from "../API/ServiceArea";
import "./ServiceAreaMarker.scss"

interface IServiceAreaMarkerProps {
    address: IAddress
 }

 interface IServiceAreaMarkerState {
    isLoading: boolean;
    isServicable: boolean;    
 }

class ServiceAreaMarker extends Component<IServiceAreaMarkerProps, IServiceAreaMarkerState> {
    constructor(props: IServiceAreaMarkerProps) {
        super(props);

        this.state = {
            isLoading: false,
            isServicable: true
        };
    }

    componentDidMount(){
        this.setState({isLoading: true});
        ServiceAreaApi.isAddressServicable(this.props.address).then(isServicable => {
            this.setState({isLoading: false, isServicable: isServicable});
        });
    }

    render() {
        return (
            <div className="service-area-marker-container">
                {this.state.isLoading && <div className="service-area-marker-unknow-state" title="Service area is beeing checked at the moment." />}
                {this.state.isServicable && <div className="service-area-marker-servicable" title="Property location is within service radius." />}
                {!this.state.isServicable && <div className="service-area-marker-not-servicable" title="Property location is out of service radius." />}
            </div>
        );
    }
}

export default ServiceAreaMarker;