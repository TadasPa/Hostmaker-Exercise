import React, {Component} from 'react';
import './App.css';
import PropertyListContainer from "../PropertyList/PropertyList"

class App extends Component {
  constructor(props: any){
    super(props);
  }

  render() {
    return (
      <div className="App">
        <PropertyListContainer />
      </div>
    );
  }

}

export default App;
