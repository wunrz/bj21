import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';
import Buttons from './buttons';
import ScoreField from './score';
import UsrCards from './usrCards';
import ComCards from './comCards';

 @inject('Store') @observer
class App extends Component {
  render() {
    return (
      <div className="col-md-offset-4 App">
      <ComCards />
      <ScoreField />
      <UsrCards />
      <Buttons />
      </div>
    );
  }
}

export default App;
