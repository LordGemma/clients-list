import React, { Component } from 'react';

import SideBarCont from './containers/SideBar/SideBarCont';
import Main from './components/Main/Main';
import './App.css';

class App extends Component {

  render() {
    return (
      <div className="App">
        <SideBarCont />
        <Main />
      </div>
    );
  }
}

export default App;
