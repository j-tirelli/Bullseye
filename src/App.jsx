import React, { useState, useEffect } from 'react';
import List from './List.jsx';
import Dot from './Dot.jsx';
import axios from 'axios';
import {GlobalStyle, CenterTextBox} from './Styles.jsx';

const App = (props) => {

  const [allItems, setAllItems] = useState([]);
  const [selectedDot, setSelectedDot] = useState(0);
<<<<<<< HEAD
  const [numItems, setNumItems] = useState(24);
  const [numVisible, setNumVisible] = useState(7);
  const [numDots, setNumDots] = useState(Math.ceil(numItems / numVisible));

=======
  const [numVisible, setNumVisible] = useState(7);
>>>>>>> 33e5a8f... Rebase in progress. refactored list and listitem to host all items on html, but only display the relevant ones. Removed shownItems state from app.
  let dotsArray = [];
  while (dotsArray.length < numDots) {
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
          debugger;
          if (results.data.length < 24) {
            axios.get('/products/dept/games')
              .then(results2 => {
                setAllItems(results.data.concat(results2.data).slice(0, 24));
              })
          } else {
            setAllItems(results.data.slice(0, 24));
          }
        });
    }
  });

  // useEffect(() => {
  //   setShownItems(allItems.slice( 7 * selectedDot, 7 * (selectedDot + 1)));
  // }, [selectedDot]);

  return (
    <div>
      <GlobalStyle />
      <CenterTextBox><h4>More to consider</h4></CenterTextBox>
      <div id="recommended-items">
        <List listItems={allItems} selectedDot={selectedDot} numVisible={numVisible} handleClick={(d) => setSelectedDot(selectedDot + d)}/>
      </div>
      <CenterTextBox>
        {dotsArray.map((selected, i) =>
          <Dot selected={selected} key={i} handleClick={() => setSelectedDot(i)}/>
        )}
      </CenterTextBox>
    </div>
  );
}

export default App;
