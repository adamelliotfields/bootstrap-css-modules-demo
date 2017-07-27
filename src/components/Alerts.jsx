import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';

import {
  btn,
  btnOutlinePrimary,
  alert,
  alertDanger,
  alertDismissible,
  alertClose
} from 'bootstrap-css-modules/css/components.css';

import Section from './Section.jsx';

class Alerts extends Component {
  state = {
    show: true
  };

  handleClick = () => {
    this.setState(({show}) => ({
      show: !show
    }));
  };

  render () {
    return (
      <Section
        display='Alerts'
        url='https://github.com/adamelliotfields/bootstrap-css-modules-demo/blob/master/src/components/Alerts.jsx'
      >
        <Transition
          in={this.state.show}
          timeout={150}
          unmountOnExit
        >
          {(status) => (
            <div
              className={`${alert} ${alertDanger} ${alertDismissible}`}
              style={{
                opacity: (status === 'entering' || status === 'exiting') ? 0 : 1,
                transition: 'opacity 150ms linear'
              }}>
              <button
                className={alertClose}
                onClick={this.handleClick}
              >&times;
              </button>
              Click the button to show this alert again.
            </div>
          )}
        </Transition>
        <button
          className={`${btn} ${btnOutlinePrimary}`}
          onClick={!this.state.show ? this.handleClick : null}
        >Click
        </button>
      </Section>
    );
  }
}

export default Alerts;
