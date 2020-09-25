import React from 'react';

const List = ({listItems}) => (
  <ul>
    {listItems.map(item =>
      <ListItem item={item}/> )}
  </ul>
)

export default List;
