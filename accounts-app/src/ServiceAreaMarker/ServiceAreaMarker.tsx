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

    componentDidMount() {
        this.setState({ isLoading: true });
        
        ServiceAreaApi.isAddressServicable(this.props.address).then(isServicable => {
            this.setState({ isLoading: false, isServicable: isServicable });
        });
    }

    render() {
        return (
            <div className="service-area-marker-container">
                {this.state.isLoading && <div className="service-area-marker-unknow-state" title="Service area is beeing checked at the moment.">
                    <svg ><path fillRule="evenodd" clipRule="evenodd" d="M7 .01C3.144.01.008 3.148.008 7.004c0 4.483 5.967 11.765 6.22 12.072l.772.936.771-.936c.254-.308 6.221-7.59 6.221-12.072C13.992 3.147 10.856.01 7 .01zm0 2a5 5 0 0 1 4.992 4.994c0 2.705-3.114 7.357-4.992 9.822-1.878-2.463-4.992-7.113-4.992-9.822A5 5 0 0 1 7 2.01zM4.5 7a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z" fill="#1F242B"></path></svg>
                </div>}
                {!this.state.isLoading && this.state.isServicable && <div className="service-area-marker-servicable" title="Property location is within service radius.">
                    <svg ><path fillRule="evenodd" clipRule="evenodd" d="M7 .01C3.144.01.008 3.148.008 7.004c0 4.483 5.967 11.765 6.22 12.072l.772.936.771-.936c.254-.308 6.221-7.59 6.221-12.072C13.992 3.147 10.856.01 7 .01zm0 2a5 5 0 0 1 4.992 4.994c0 2.705-3.114 7.357-4.992 9.822-1.878-2.463-4.992-7.113-4.992-9.822A5 5 0 0 1 7 2.01zM4.5 7a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z" fill="#1F242B"></path></svg>
                </div>}
                {!this.state.isLoading && !this.state.isServicable && <div className="service-area-marker-not-servicable" title="Property location is out of service radius.">
                    <svg ><path fillRule="evenodd" clipRule="evenodd" d="M7 .01C3.144.01.008 3.148.008 7.004c0 4.483 5.967 11.765 6.22 12.072l.772.936.771-.936c.254-.308 6.221-7.59 6.221-12.072C13.992 3.147 10.856.01 7 .01zm0 2a5 5 0 0 1 4.992 4.994c0 2.705-3.114 7.357-4.992 9.822-1.878-2.463-4.992-7.113-4.992-9.822A5 5 0 0 1 7 2.01zM4.5 7a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0z" fill="#1F242B"></path></svg>
                </div>}
            </div>
        );
    }
}

export default ServiceAreaMarker;