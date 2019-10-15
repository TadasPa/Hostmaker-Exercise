import React from 'react';
import { shallow } from 'enzyme';
import ServiceAreaMarker from '../ServiceAreaMarker';
import renderer from 'react-test-renderer';

const address = {
  "line1": "",
  "line4": "",
  "postCode": "SG4 7JD",
  "city": "London",
  "country": "U.K."
};

it('renders without crashing', () => {
  shallow(<ServiceAreaMarker address={address} />);
});

it('renders fine while loading', () => {
  const serviceAreaMarker = renderer
    .create(<ServiceAreaMarker address={address} />)
    .toJSON();
  expect(serviceAreaMarker).toMatchSnapshot();
});