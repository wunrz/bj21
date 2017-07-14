import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';





 @inject('Store') @observer
class UsrCards extends Component {



  render() {
    const store = this.props.Store;
    return (

      <div className="col-md-12 USRcards">
      {store.renderUsrCards}
      </div>

    );
  }
}

export default UsrCards;
