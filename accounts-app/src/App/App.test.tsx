import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "react-redux";

it('renders without crashing', () => {
  const div = document.createElement('div');
  const store = {    
    getState: jest.fn(() => ({
      PropertyList: {
        isLoading: false,
        propertyList: [],
        loadError: ""
      }
    })),
    dispatch: jest.fn(),
    subscribe: jest.fn()
  };
  
  ReactDOM.render(<Provider store={store as any}><App /></Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
