import React from 'react';
import {RecListItem, RecItemImage, RecItemPrice, RecItemTitle, RecItemAnchor} from './Styles.jsx';

const ListItem = ({item}) => {

  let handleClick = (event) => {
    console.log(`item ${item.title} was clicked!`);
    // I'm planning to use this to redirect page on click
  };

  return (
    <RecListItem onClick={(e) => {handleClick(e)}}>
      <RecItemAnchor href={item.productUrl}>
        <RecItemImage src={item.imageUrl} ></RecItemImage>
        <RecItemPrice className="item-price">${item.price}</RecItemPrice>
        <RecItemTitle className="item-title">{item.title}</RecItemTitle>
      </RecItemAnchor>
    </RecListItem>
  );
};

export default ListItem;
