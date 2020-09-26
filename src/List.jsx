import React from 'react';
import ListItem from './ListItem.jsx';

const List = ({listItems}) => (
  <ul>
    {listItems.map(item =>
      <ListItem key={item._id} item={item}/> )}
  </ul>
)

export default List;
