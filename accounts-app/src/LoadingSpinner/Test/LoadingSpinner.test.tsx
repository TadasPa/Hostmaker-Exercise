import React from 'react';
import { shallow } from 'enzyme';
import { LoadingSpinner } from '../LoadingSpinner';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  shallow(<LoadingSpinner isLoading={false} />);
});


test('LoadingSpinner renders correctly when not loading', () => {
  const spinner = renderer
    .create(<LoadingSpinner isLoading={false} />)
    .toJSON();
  expect(spinner).toMatchSnapshot();
});

test('LoadingSpinner renders correctly when loading', () => {
  const spinner = renderer
    .create(<LoadingSpinner isLoading={true} />)
    .toJSON();
  expect(spinner).toMatchSnapshot();
});