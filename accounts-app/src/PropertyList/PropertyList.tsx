import React, { Component } from "react";
import './PropertyList.scss';
import { connect } from "react-redux";
import { PropertyListState } from "./State/Reducer"
import { PropertyListActions } from "./State/Actions";
import { PropertyListPresentation, IPropertyListPresentationProps } from "./Presentation/PropertyList";

export class PropertyListContainer extends Component<IPropertyListPresentationProps> {

    render() {
        return (
            <div className="property-list-container">
                <PropertyListPresentation
                    isLoading={this.props.isLoading}
                    propertyList={this.props.propertyList}
                    loadError={this.props.loadError}
                    fetchData={this.props.fetchData} />
            </div>
        );
    }
}

const mapStateToProps = (state: { PropertyList: PropertyListState }) => {
    
    return {
        isLoading: state.PropertyList.isLoading,
        propertyList: state.PropertyList.propertyList,
        loadError: state.PropertyList.loadError
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        fetchData: () => {
            dispatch(PropertyListActions.fetchData());
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PropertyListContainer)