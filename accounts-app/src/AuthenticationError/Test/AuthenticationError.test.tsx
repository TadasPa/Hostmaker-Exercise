import React from 'react';
import { shallow } from 'enzyme';
import { AuthenticationError } from '../AuthenticationError';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
    shallow(<AuthenticationError error={""} />);
});


test('Error renders correctly when no error to show', () => {
    const spinner = renderer
        .create(<AuthenticationError error={""} />)
        .toJSON();
    expect(spinner).toMatchSnapshot();
});

test('Error renders correctly when there is error to show', () => {
    const spinner = renderer
        .create(<AuthenticationError error={"Error, please try again."} />)
        .toJSON();
    expect(spinner).toMatchSnapshot();
});