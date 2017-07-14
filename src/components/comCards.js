import React, { Component } from 'react';
import {observer, inject} from 'mobx-react';


 @inject('Store') @observer
class ComCards extends Component {
  render() {
    const store = this.props.Store;
    return (

      <div className="col-md-12 COMcards">

       {store.renderComCards}

      </div>

    );
  }
}

export default ComCards;
