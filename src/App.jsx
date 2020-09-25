import React, { useState, useEffect } from 'react';
import List from './List.jsx';

const App = (props) => {

  const [items, setItems] = useState([]);

  useEffect(() => {
    // when component mounts:
    console.log('The Eagle has Landed');
    // I'm expecting to use this to pull from DB on page load
  });

  return (
    <div>
      <h4>More to consider</h4>
      <div id="recommended-items">
        <List listItems={items}/>
      </div>
    </div>
  );
}

export default App;
