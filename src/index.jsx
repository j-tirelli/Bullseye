import App from './App.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<App totalItems={24} itemsShown={7}/>, document.getElementById('app') ||
document.createElement('div')); // create plain div for rendering--this is done for jest testing
