import RecommendedProducts from './RecommendedProducts.jsx';
import React from 'react';
import ReactDOM from 'react-dom';

ReactDOM.render(<RecommendedProducts/>, document.getElementById('RecommendedProducts') ||
document.createElement('div')); // create plain div for rendering--this is done for jest testing
