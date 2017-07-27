import React from 'react';
import { Link } from 'react-router-dom';

import { container } from 'bootstrap-css-modules/css/container.css';
import { row } from 'bootstrap-css-modules/css/row.css';
import { col12, colSm10 } from 'bootstrap-css-modules/css/columns.css';
import { justifyContentCenter } from 'bootstrap-css-modules/css/justify.css';
import { display4, lead } from 'bootstrap-css-modules/css/type.css';
import { textCenter } from 'bootstrap-css-modules/css/text.css';
import { btn } from 'bootstrap-css-modules/css/buttons.css';
import { pt5 } from 'bootstrap-css-modules/css/paddingTop.css';
import { mt5 } from 'bootstrap-css-modules/css/marginTop.css';

import { btnOutlineBlack } from './Home.css';

const Home = () => {
  window.document.title = 'Bootstrap CSS Modules | Home';

  return (
    <div className={container}>
      <div className={`${row} ${justifyContentCenter} ${mt5} ${pt5}`}>
        <div className={`${col12} ${colSm10} ${textCenter}`}>
          <h1 className={display4}>Welcome</h1>
          <p className={`${lead}`}>This is a demonstration of <code>bootstrap-css-modules</code> with React.</p>
          <Link to='/components' className={`${btn} ${btnOutlineBlack}`}>See the components</Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
