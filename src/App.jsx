import React, { useState, useEffect } from 'react';
import List from './List.jsx';
import Dot from './Dot.jsx';
import axios from 'axios';
import styles from './Styles.jsx';

const App = (props) => {

  const [allItems, setAllItems] = useState([]);
  const [shownItems, setShownItems] = useState([]);
  const [selectedDot, setSelectedDot] = useState(0);
  let dotsArray = [];
  while (dotsArray.length < 4) {
    if (selectedDot === dotsArray.length) {
      dotsArray.push(1);
    } else {
      dotsArray.push(0);
    }
  }

  useEffect(() => {
    // when component mounts, and if no items have been populated:
    if (!allItems.length) {
      // 'garden' is a temporary query for now. It will likely be changed for later implementation
      axios.get('/products/dept/garden')
        .then(results => {
          setAllItems(results.data.slice(0, 24));
          setShownItems(results.data.slice(0, 7));
        })
        .catch(err => console.log('there was an error', err));
    }
  });

  return (
    <div>
      <styles.global />
      <styles.centerDiv><h4>More to consider</h4></styles.centerDiv>
      <styles.centerDiv id="recommended-items">
        <List listItems={shownItems}/>
      </styles.centerDiv>
      <styles.centerDiv id="recommended-items">
        {dotsArray.map((selected, i) =>
          <Dot selected={selected} key={i} handleClick={() => setSelectedDot(i)}/>
        )}
      </styles.centerDiv>
    </div>
  );
}

export default App;
