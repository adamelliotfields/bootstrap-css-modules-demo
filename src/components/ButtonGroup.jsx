import React, { Component } from 'react';

import {
  btn,
  btnPrimary,
  btnOutlinePrimary,
  btnGroup,
  show,
  dropdownToggle,
  dropdownToggleSplit,
  dropdownMenu,
  dropdownItem
} from 'bootstrap-css-modules/css/components.css';

import Section from './Section.jsx';

class ButtonGroup extends Component {
  state = {
    show: false
  };

  handleClick = () => {
    this.setState(({show}) => ({
      show: !show
    }));
  };

  render () {
    return (
      <Section
        display='Button Group'
        url='https://github.com/adamelliotfields/bootstrap-css-modules-demo/blob/master/src/components/ButtonGroup.jsx'
      >
        <div className={`${btnGroup}`}>
          <button className={`${btn} ${btnOutlinePrimary}`}>Left</button>
          <button className={`${btn} ${btnOutlinePrimary}`}>Middle</button>
          <div className={`${btnGroup} ${this.state.show ? show : ''}`}>
            <button className={`${btn} ${btnPrimary}`}>Dropdown</button>
            <button
              className={`${btn} ${btnPrimary} ${dropdownToggle} ${dropdownToggleSplit}`}
              onClick={this.handleClick}
            />
            <div className={dropdownMenu}>
              <a className={dropdownItem} href='#'>Dropdown link</a>
            </div>
          </div>
        </div>
      </Section>
    );
  }
}

export default ButtonGroup;
