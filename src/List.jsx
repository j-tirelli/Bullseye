import React from 'react';
import ListItem from './ListItem.jsx';
import {RecList, NavButtonRight, NavButtonLeft} from './Styles.jsx';

const List = ({listItems, selectedDot, numVisible}) => {
  let minIVisible = selectedDot * numVisible;
  let maxIVisible = minIVisible + numVisible - 1;

  return (
  <RecList>
    {listItems.map((item, i) =>
      <ListItem item={item} key={item._id} visible={i >= minIVisible && i <= maxIVisible}/> )}
  </RecList>
  );
};

export default List;
