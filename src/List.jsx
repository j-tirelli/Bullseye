import React from 'react';
import ListItem from './ListItem.jsx';
import {RecList, NavButton} from './Styles.jsx';

const List = ({listItems}) => (
  <RecList>
    <NavButton>{'<'}</NavButton>
      {listItems.map(item =>
        <ListItem key={item._id} item={item}/> )}
    <NavButton>{'>'}</NavButton>
  </RecList>
);

export default List;
