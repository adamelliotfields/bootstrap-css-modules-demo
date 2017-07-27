import React, { Component } from 'react';
import Transition from 'react-transition-group/Transition';

import { textLeft } from 'bootstrap-css-modules/css/text.css';
import { btn, btnOutlinePrimary, btnPrimary } from 'bootstrap-css-modules/css/components.css';
import { mt3 } from 'bootstrap-css-modules/css/marginTop.css';
import {
  modal,
  modalOpen,
  modalClose,
  modalDialog,
  modalContent,
  modalHeader,
  modalTitle,
  modalBody,
  modalFooter,
  modalBackdrop
} from 'bootstrap-css-modules/css/modal.css';

import Section from './Section.jsx';

class Modal extends Component {
  state = {
    show: false
  };

  handleClick = (event) => {
    event.stopPropagation();
    this.setState({
      show: !this.state.show
    }, () => {
      this.state.show
        ? window.document.body.classList.add(modalOpen)
        : window.document.body.classList.remove(modalOpen);
    });
  };

  modalClick = (event) => {
    if (this.state.show) {
      this.handleClick(event);
    }
  };

  modalEscape = (event) => {
    if (event.keyCode === 27 && this.state.show) {
      this.handleClick(event);
    }
  };

  componentDidMount () {
    window.document.body.addEventListener('click', this.modalClick);

    window.document.body.addEventListener('keydown', this.modalEscape);
  }

  componentWillUnmount () {
    window.document.body.removeEventListener('click', this.modalClick);

    window.document.body.removeEventListener('keydown', this.modalEscape);
  }

  render () {
    return (
      <Section
        display='Modal'
        url='https://github.com/adamelliotfields/bootstrap-css-modules-demo/blob/master/src/components/Modal.jsx'
      >
        <button
          className={`${btn} ${btnOutlinePrimary} ${mt3}`}
          onClick={this.handleClick}
        >Launch demo modal
        </button>

        <Transition
          in={this.state.show}
          timeout={300}
          unmountOnExit
        >
          {(status) => (
            <div
              className={`${modal}`}
              style={{
                display: 'block',
                transition: 'transform 300ms ease-out, opacity 200ms linear',
                transform: (status === 'entering' || status === 'exiting') ? 'translate(0, -25%)' : 'translate(0, 0)',
                opacity: (status === 'entering' || status === 'exiting') ? 0 : 1
              }}>
              <div className={modalDialog}>
                <div className={modalContent}>
                  <div className={modalHeader}>
                    <h5 className={modalTitle}>Modal</h5>
                    <button className={modalClose} onClick={(event) => this.handleClick(event)}>
                      <span>&times;</span>
                    </button>
                  </div>
                  <div className={`${modalBody} ${textLeft}`}>
                    You can also click anywhere on the body or press the <code>ESCAPE</code> key to close the modal.
                  </div>
                  <div className={modalFooter}>
                    <button className={`${btn} ${btnPrimary}`} onClick={(event) => this.handleClick(event)}>Close</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </Transition>

        <Transition
          in={this.state.show}
          timeout={150}
          unmountOnExit
        >
          {(status) => (
            <div
              className={`${modalBackdrop}`}
              style={{
                transition: 'opacity 150ms linear',
                opacity: (status === 'entering' || status === 'exiting') ? 0 : 0.5
              }}
            />
          )}
        </Transition>

      </Section>
    );
  }
}

export default Modal;
