import React, {Component} from 'react';
import './App.css';
import PropertyListContainer from "../PropertyList/PropertyList"

class App extends Component {

  render() {
    return (
      <div className="App">
        <PropertyListContainer />
      </div>
    );
  }

}

export default App;
