import React from 'react';

import { container } from 'bootstrap-css-modules/css/container.css';
import { row } from 'bootstrap-css-modules/css/row.css';
import { col12, colSm10, colLg8 } from 'bootstrap-css-modules/css/columns.css';
import { justifyContentCenter } from 'bootstrap-css-modules/css/justify.css';
import { textCenter } from 'bootstrap-css-modules/css/text.css';
import { lead, display4 } from 'bootstrap-css-modules/css/type.css';
import { mt5 } from 'bootstrap-css-modules/css/marginTop.css';

import LoginForm from '../components/LoginForm.jsx';

const Login = () => {
  window.document.title = 'Bootstrap CSS Modules | Login';

  return (
    <div className={container}>
      <div className={`${row} ${justifyContentCenter} ${mt5}`}>
        <div className={`${col12} ${colSm10} ${colLg8} ${textCenter}`}>
          <h1 className={display4}>Login</h1>
          <p className={lead}>See the <a href='https://github.com/adamelliotfields/bootstrap-css-modules-demo/blob/master/src/components/LoginForm.jsx'>code</a>.</p>
          <div className='container mt-5'>
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
