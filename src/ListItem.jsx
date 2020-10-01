import React from 'react';
import {RecListItem, RecItemImage, RecItemPrice, RecItemTitle, RecItemAnchor} from './Styles.jsx';

const ListItem = ({item, visible}) => {

  let handleClick = (event) => {
    console.log(`item ${item.title} was clicked!`);
    // I'm planning to use this to redirect page on click
  };

  if (visible) {
    return (
      <RecListItem onClick={(e) => {handleClick(e)}}>
        <a href={item.productUrl}>
          <RecItemImage src={item.imageUrl} ></RecItemImage>
          <RecItemPrice className="item-price">${item.price}</RecItemPrice>
        </a>
      </RecListItem>
    );
  }
  return <div></div>
};

export default ListItem;
