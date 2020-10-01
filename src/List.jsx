import React from 'react';
import ListItem from './ListItem.jsx';
import {RecList, NavButtonRight, NavButtonLeft} from './Styles.jsx';

const List = ({listItems, handleClick, selected}) => (
  <RecList>
    {selected > 0 ?
    <NavButtonLeft onClick={() => handleClick(-1)}>{'<'}</NavButtonLeft> : ''}
      {listItems.map(item =>
        <ListItem key={item._id} item={item}/> )}
    {selected < 3 ?
    <NavButtonRight onClick={() => handleClick(1)}>{'>'}</NavButtonRight> : ''}
  </RecList>
);

export default List;
