import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import App from './containers/app/app.js';

ReactDOM.render(
      <App />,
    document.getElementById('root')
);
