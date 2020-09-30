import React from 'react';
import ListItem from './ListItem.jsx';
import styles from './Styles.jsx';

const List = ({listItems}) => (
  <styles.ul className="list">
    {listItems.map(item =>
      <ListItem key={item._id} item={item} /> )}
  </styles.ul>
)

export default List;
