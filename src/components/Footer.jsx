import React from 'react';

import { container } from 'bootstrap-css-modules/css/container.css';

import { footer } from './Footer.css';

const Footer = () => (
  <footer className={footer}>
    <div className={container}>
      <a href='https://github.com/adamelliotfields' target='_blank'>@adamelliotfields</a>
    </div>
  </footer>
);

export default Footer;
