import React from 'react';
import ReactDOM from 'react-dom';
import Root from './screens/Root';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Root />, document.getElementById('root')); // eslint-disable-line react/jsx-filename-extension
registerServiceWorker();
