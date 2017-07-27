import React from 'react';
import PropTypes from 'prop-types';

import { row } from 'bootstrap-css-modules/css/row.css';
import { col12, colSm10 } from 'bootstrap-css-modules/css/columns.css';
import { justifyContentCenter } from 'bootstrap-css-modules/css/justify.css';
import { display4, lead } from 'bootstrap-css-modules/css/type.css';
import { textCenter } from 'bootstrap-css-modules/css/text.css';
import { mt5 } from 'bootstrap-css-modules/css/marginTop.css';

const Section = (props) => (
  <div className={`${row} ${justifyContentCenter} ${mt5}`}>
    <div className={`${col12} ${colSm10} ${textCenter}`}>
      <h1 className={display4}>{props.display}</h1>
      <p className={`${lead}`}>See the <a href={props.url} target='_blank'>code</a>.</p>
      {props.children}
    </div>
  </div>
);

Section.propTypes = {
  display: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired
};

export default Section;
