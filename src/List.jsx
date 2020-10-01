import React from 'react';
import ListItem from './ListItem.jsx';
import {RecList} from './Styles.jsx';

const List = ({listItems}) => (
  <RecList>
    {listItems.map(item =>
      <ListItem key={item._id} item={item}/> )}
  </RecList>
);

export default List;
