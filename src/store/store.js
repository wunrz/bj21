import React  from 'react';
import {observable, computed } from 'mobx';
import _ from 'lodash';

const cardsTab = {
  cards: ["2","3","4","5","6","7","8","9","10", "jack", 'queen','king', 'ace'],
  value: [2,3,4,5,6,7,8,9,10,10,10,10,11],
  colors: ['diamonds', 'clubs', 'hearts', 'spades']
}

class Store {
  @observable scoreUSR = 0;
  @observable scoreCPU = 0;
  @observable kesz = 2000;
  @observable bet = 0;
  @observable stateOfGame = "";
  @observable UsrCards = [];
  @observable ComCards = [];
  @observable winner = '';


  @computed get renderUsrCards() {

    return this.UsrCards;
}
  @computed get renderComCards() {

  return this.ComCards;
}

 @computed get getWinner()
 {
   if(this.winner === 'USR'){
     return <p>USR win</p>
   }
  else if(this.winner === 'COM'){
     return <p>COM win</p>
   }
   return <p>Bet: {this.bet}</p>
 }

setUsrCards(what){
  if(this.stateOfGame === 'bet'){
        this.scoreUSR = 0 ;
        this.UsrCards = [];
      for(let i = 0; i < 2; i++)
      this.UsrCards.push(
        <img key={i} className="card" alt="" src={require('../png/back.png')}  />
      )
  }
  else if(this.stateOfGame === "hit"){
    if(what === 1)
    {
      let k = _.random(0,12);
      let w = _.random(0,3);
      let napis = `${cardsTab.cards[k]}_of_${cardsTab.colors[w]}`;
      let tab = [];
      tab.push(<img key={this.UsrCards.length} className="card" alt="" src={require(`../png/${napis}.png`)}  />)
      this.UsrCards = this.UsrCards.concat(tab);
      console.log(napis);
      console.log(this.UsrCards.length);
      this.scoreUSR = this.scoreUSR + cardsTab.value[k];
      if(this.scoreUSR > 21){
        this.winner = 'COM';
      }
    }
    else if (what === 0) {
    this.UsrCards = [];
    for(let i = 0; i < 2; i++){
    let k = _.random(0,12);
    let w = _.random(0,3);
    let napis = `${cardsTab.cards[k]}_of_${cardsTab.colors[w]}`;
    this.UsrCards.push(
      <img key={this.UsrCards.length} className="card" alt="" src={require(`../png/${napis}.png`)}  />
    )
    this.scoreUSR = this.scoreUSR + cardsTab.value[k];
  }
}
}
}


setComCards(what) {
      let k = _.random(0,12);
      let w = _.random(0,3);
      let napis = `${cardsTab.cards[k]}_of_${cardsTab.colors[w]}`;
    if(this.stateOfGame === 'bet'){
    this.ComCards = [];
    this.bet = 0;
    this.scoreCPU = 0;
        this.ComCards.push(
          <img key={this.ComCards.length} className="card" alt="" src={require('../png/back.png')}  />
        )
    }
    else if(this.stateOfGame === "hit"){
      if(what === 1){
        while(this.scoreCPU <= 18){
        k = _.random(0,12);
        w = _.random(0,3);
        napis = `${cardsTab.cards[k]}_of_${cardsTab.colors[w]}`;
        let tab = [];
        tab.push(<img key={this.ComCards.length} className="card" alt="" src={require(`../png/${napis}.png`)}  />)
        this.ComCards = this.ComCards.concat(tab);
        console.log(napis);
        console.log(this.ComCards.length);
      this.scoreCPU = this.scoreCPU + cardsTab.value[k];
      }
      this.setWinner();
    }
      else{
      this.ComCards = [];
        this.ComCards.push(
        <img key={this.ComCards.length} className="card" alt="" src={require(`../png/${napis}.png`)}  />
      )
      this.scoreCPU = this.scoreCPU + cardsTab.value[k];
    }
}
  }

setWinner() {
  if(this.scoreCPU > 21 || this.scoreCPU < this.scoreUSR){
    this.winner = 'USR'
    this.kesz = this.kesz + (2* this.bet);
  }
  else if(this.scoreCPU > this.scoreUSR){
    this.winner = 'COM'
  }
}


}

export default new Store();
