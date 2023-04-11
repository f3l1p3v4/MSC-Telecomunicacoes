import React, { Component } from "react";

import Layout from '../components/Layout'
import About from '../components/About'
import Support from '../components/Support'
import Clients from '../components/Clients'
import ButtonMessage from '../components/ButtonMessage'
import PopUp from '../components/PopUp'

class IndexPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOverlayOpen: false,
      popUp: false
    };
    this.overlayToggleClickHandler = this.overlayToggleClickHandler.bind(this);
    this.popUpToggleClickHandler = this.popUpToggleClickHandler.bind(this);
  }

  overlayToggleClickHandler = () => {
    this.setState((prevState) => ({
      menuOverlayOpen: !prevState.menuOverlayOpen
    }));
  };

  popUpToggleClickHandler = (e) => {
    e.preventDefault();
    this.overlayToggleClickHandler();
    this.setState((prevState) => ({
      popUp: !prevState.popUp
    }));
  };
  render() {
  return (
    <div>
      <Layout>
        <About />
        <Clients />
        <Support />
        <PopUp
          showPopUp={this.state.popUp}
          click={this.popUpToggleClickHandler}
          className="close"
        />
        <ButtonMessage 
          click={this.popUpToggleClickHandler}
          showPopUp={this.state.popUp}
        />
      </Layout>
    </div>
    )
  }
}

export default IndexPage
