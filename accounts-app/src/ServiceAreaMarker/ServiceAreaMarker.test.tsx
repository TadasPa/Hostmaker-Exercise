import React from 'react';
import { shallow } from 'enzyme';
import ServiceAreaMarker from './ServiceAreaMarker';
it('renders without crashing', () => {
    const address = {
        "line1": "",
        "line4": "",
        "postCode": "SG4 7JD",
        "city": "London",
        "country": "U.K."
    };
  shallow(<ServiceAreaMarker address={address} />);
});