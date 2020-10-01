import React from 'react';
import ListItem from './ListItem.jsx';
import {RecList, NavButton} from './Styles.jsx';

const List = ({listItems, handleClick}) => (
  <RecList>
    <NavButton onClick={() => handleClick(-1)}>{'<'}</NavButton>
      {listItems.map(item =>
        <ListItem key={item._id} item={item}/> )}
    <NavButton onClick={() => handleClick(1)}>{'>'}</NavButton>
  </RecList>
);

export default List;
