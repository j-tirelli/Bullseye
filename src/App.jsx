import React, { useState, useEffect } from 'react';
import List from './List.jsx';
import Dot from './Dot.jsx';
import axios from 'axios';
import exampleData from '../data/example_data.js';
import {GlobalStyle, CenterTextBox} from './Styles.jsx';

const App = ({totalItems, itemsShown, productId}) => {

  const [selectedDot, setSelectedDot] = useState(0);
  const [numItems, setNumItems] = useState(totalItems || 24);
  const [allItems, setAllItems] = useState(exampleData.slice(0, numItems));
  const [numVisible, setNumVisible] = useState(itemsShown || 7);
  const [numDots, setNumDots] = useState(Math.ceil(numItems / numVisible));

  let dotsArray = [];
  while (dotsArray.length < numDots) {
    if (selectedDot === dotsArray.length) {
      dotsArray.push(1);
    } else {
      dotsArray.push(0);
    }
  }

  useEffect(() => {
    if (productId) {
      axios.get(`/products/id/${productId}`)
        .then(results => {
          setAllItems(results.data.slice(0, numItems));
        });
    }
  }, []);

  return (
    <div>
      <GlobalStyle />
      <CenterTextBox><h4>More to consider</h4></CenterTextBox>
      <div id="recommended-items">
        <List
          listItems={allItems}
          numVisible={numVisible}
          selectedDot={selectedDot}
          numDots={numDots}
          handleClick={(d) => setSelectedDot(selectedDot + d)}/>
      </div>
      <CenterTextBox>
        {dotsArray.map((selected, i) =>
          <Dot selected={selected} key={i} handleClick={() => setSelectedDot(i)}/>
        )}
      </CenterTextBox>
    </div>
  );
}
// not an important comment--just checking that circleCI isn't tracking this branch

export default App;
