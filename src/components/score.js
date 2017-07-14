import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';




 @inject('Store') @observer
class ScoreField extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }



  render() {
    const store = this.props.Store;
    return (
      <div className="col-md-12 ScoreField">
      <p>$test2 : {store.kesz}</p>
      {this.props.Store.getWinner}
      <p>USR : {store.scoreUSR} </p>
      <p>CPU : {store.scoreCPU} </p>
      </div>
    );
  }
}

export default ScoreField;
