import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';

const NONE = 'none';
const INLINE = 'inline';
const width = 500;

 @inject('Store') @observer
class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      displayBet: NONE,
      displayHit: NONE,
      displayPlay: INLINE
    }
  }

cBet(){
  const store = this.props.Store;
  store.stateOfGame = 'hit';
      store.setUsrCards(0);
      store.setComCards();
this.setState({displayHit: INLINE, displayBet: NONE});
}
onBet(x){
  const store = this.props.Store;
  store.kesz = store.kesz - x;
  store.bet = store.bet + x;
}

startGame(){
  const store = this.props.Store;
    store.stateOfGame = 'bet';
    store.winner = '';
    store.setUsrCards();
    store.setComCards();
  this.setState({displayBet: INLINE, displayPlay: NONE});

}
cStand(){
  const store = this.props.Store;
  if(store.scoreUSR <= 21){
    store.setComCards(1);
  }
    this.setState({displayHit: NONE, displayPlay: INLINE})
}
cHit(){
  const store = this.props.Store;

          store.setUsrCards(1);

}

  render() {
    let k = width/3;
    let w = width/2;

    return (
      <div className="buttons">
      <button onClick={this.onBet.bind(this,25)} style={{width: k, display: this.state.displayBet}} className="btn btn-warning">25</button>
      <button onClick={this.cBet.bind(this)} style={{width: k, display: this.state.displayBet}} className="btn btn-success">START</button>
      <button onClick={this.onBet.bind(this,50)} style={{width: k, display: this.state.displayBet}} className="btn btn-danger">50</button>

      <button onClick={this.cHit.bind(this)} style={{width: w, display: this.state.displayHit}} className="btn btn-danger">HIT</button>
      <button onClick={this.cStand.bind(this)} style={{width: w, display: this.state.displayHit}} className="btn btn-success">STAND</button>

      <button onClick={this.startGame.bind(this)} style={{width: width, display: this.state.displayPlay}} className="btn btn-success">LET PLAY</button>
      </div>
    );
  }
}

export default Buttons;
