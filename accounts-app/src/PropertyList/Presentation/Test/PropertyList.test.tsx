import React from 'react';
import { shallow } from 'enzyme';
import { PropertyListPresentation } from '../PropertyList';
import renderer from 'react-test-renderer';
it('renders without crashing', () => {
     shallow(<PropertyListPresentation isLoading={false} propertyList={[]} loadError={""} fetchData={jest.fn()} />);
});

it('calls fetch', () => {
     const fetchSpy = jest.fn();
     shallow(<PropertyListPresentation isLoading={false} propertyList={[]} loadError={""} fetchData={fetchSpy} />);
     expect(fetchSpy).toHaveBeenCalled();
});

it('bahaves when loading even with data', () => {
     const propertyList = [
          {
               "owner": "33 miles away",
               "address": {
                   "line1": "",
                   "line4": "",
                   "postCode": "SG4 7JD",
                   "city": "London",
                   "country": "U.K."
               },
               "airbnbId": 3512503,
               "numberOfBedrooms": 1,
               "numberOfBathrooms": 1,
               "incomeGenerated": 2000.34
             }
     ];
     const propertyListPresentation = renderer
          .create(<PropertyListPresentation isLoading={true} propertyList={propertyList} loadError={""} fetchData={jest.fn()} />)
          .toJSON();
     expect(propertyListPresentation).toMatchSnapshot();
});

it('render data correctly', () => {
     const propertyList = [
          {
               "owner": "33 miles away",
               "address": {
                   "line1": "",
                   "line4": "",
                   "postCode": "SG4 7JD",
                   "city": "London",
                   "country": "U.K."
               },
               "airbnbId": 3512503,
               "numberOfBedrooms": 1,
               "numberOfBathrooms": 1,
               "incomeGenerated": 2000.34
             }
     ];
     const propertyListPresentation = renderer
          .create(<PropertyListPresentation isLoading={false} propertyList={propertyList} loadError={""} fetchData={jest.fn()} />)
          .toJSON();
     expect(propertyListPresentation).toMatchSnapshot();
});