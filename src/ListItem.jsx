import React from 'react';
import {RecListItem, RecItemImage, RecItemPrice, RecItemTitle, RecItemAnchor} from './Styles.jsx';

const ListItem = ({item, visible}) => {

  let handleClick = (event) => {
    console.log(`item ${item.title} was clicked!`);
    // I'm planning to use this to redirect page on click
  };

  if (visible) {
    return (
      <RecListItem key={`${item.title}-item`} onClick={(e) => {handleClick(e)}}>
        <RecItemAnchor key={`${item.title}-anchor`} href={item.productUrl}>
          <RecItemImage key={`${item.title}-image`} src={item.imageUrl} ></RecItemImage>
          <RecItemPrice key={`${item.title}-price`}>${item.price}</RecItemPrice>
        </RecItemAnchor>
      </RecListItem>
    );
  } else {
    return <div key={`${item.title}-item`}></div>
  }
};

export default ListItem;
