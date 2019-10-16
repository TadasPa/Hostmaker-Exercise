import React from 'react';
import { shallow } from 'enzyme';
import {PropertyListContainer} from '../PropertyList';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
     shallow(<PropertyListContainer isLoading={false} propertyList={[]} loadError={""} fetchData={()=>{}} />);
});

it('render defaults', () => {
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
     const propertyListContainer = renderer
          .create(<PropertyListContainer isLoading={false} propertyList={propertyList} loadError={""} fetchData={jest.fn()} />)
          .toJSON();
     expect(propertyListContainer).toMatchSnapshot();
});